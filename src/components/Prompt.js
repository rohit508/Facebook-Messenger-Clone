import React from 'react'

function Prompt(props) {
    return (props.triger)?(
        <div className="popup">
        <div className="popup_inner">
            <button className="close_button">close</button>
        </div>
        </div>
    ): "";
       
}

export default Prompt
