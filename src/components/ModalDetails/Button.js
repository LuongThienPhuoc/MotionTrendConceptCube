import React from 'react';

function Button(props) {
    return (
        <div style={{ backgroundColor: props.isBlack? 'black' : 'white', color:props.isBlack? 'white' : 'black' }} className='btn-icons'>
            {props.icon}
            <div style={{ fontSize: '10px', marginLeft: '5px' }}>{props.content}</div>
        </div>
    );
}

export default Button;