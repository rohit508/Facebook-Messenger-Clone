import React, { forwardRef }  from 'react';
import {Card  ,CardContent ,Typography} from '@material-ui/core';
import '../message.css';

const Message = forwardRef(({username,message}, ref) => {
    const isUser = username === message.username;
    return (
        <div  ref={ ref} className={`message ${isUser  && 'message_user'}`}>
            <Card className={isUser ? "message_usercard":"message_guestcard"}>
                <CardContent>
                    <Typography
                    color="white" 
                    variant="h5"
                    component="h2"
                    >
                        {!isUser && `${message.username || "Unknow User"}: `}{message.message}
                    </Typography> 
                    </CardContent>
                    </Card>
              
            
        </div>
    )
})


export default Message;