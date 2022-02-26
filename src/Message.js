import React from 'react';
import './Message.css';
//import Card from '@material-ui/core/Card';

function Message(props) {
    const isLogin = props.text.user === props.user;
    return(
        <div>
            <h1>
                <div className={isLogin? 'right':'left'}>
                {props.text.msg}
                <span className="user">{props.text.user}</span>
                </div>
            </h1>
            
        </div>
    );
}

export default Message;