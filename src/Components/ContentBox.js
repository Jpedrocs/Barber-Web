import React from 'react'


function ContentBox(props){
    return(
    <div className='content-box box-shadow brown-color' >
        <h1>{props.tag}</h1>
        <img id={props.id} src={props.img} alt={props.alt} width="100px"></img>
    </div>
    )
}


export default ContentBox;
