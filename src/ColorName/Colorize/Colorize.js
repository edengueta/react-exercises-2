import React  from 'react';
function Colorize(props){

    return (
        <div style= {{color: props.children }}>
            {props.children}
        </div>
    )
}
export default Colorize;