import React from 'react'


function ContentBox(props){
    return(
    <div className='content-box'>
        <h1>{props.tag}</h1>
        <img id={props.id} src={props.img} alt={props.alt} width="100px"></img>

        
    </div>
    )
}


export default ContentBox;
