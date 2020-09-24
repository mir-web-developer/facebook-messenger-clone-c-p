import { Card, CardContent, Typography } from "@material-ui/core";
import React, { FC, forwardRef } from "react";
import "./Message.css";
import db from './firebase';
type MessageTypes = {
  message: string;
  username: string;
};
const Message: FC<MessageTypes> = forwardRef(({ id,message, username }, ref) => {
    //@ts-ignore
  const isUser = username === message.username;

  return (
    <div onClick={() => db.collection("messages").doc(id).delete()} ref={ref} className={`message ${isUser && "user__message"}`}>
      <Card className={isUser ? "message__userCard" : "message__guestCard"}>
        <CardContent>
          <Typography color="white" variant="h5" component="h2">
            {!isUser  && message.username || "unknown user" }:{message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;
