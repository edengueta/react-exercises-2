import React from 'react';
function ItemMarker(props){

    function mark(val,item){
        if (item.includes(val) && val !=='' && val!==' '){
            let markedItem = item.replace(val, `<span style='background-color:yellow'>${val}</span>`);
            return <li dangerouslySetInnerHTML={{__html: markedItem}} />
        } 
        return <li>{item}</li>

    }

    return(
        <li>
            {mark(props.value, props.children)}
        </li>
    )
    
}
export default ItemMarker;