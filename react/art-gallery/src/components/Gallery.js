import React, { cloneElement } from 'react'

export default function Gallery(props){
    console.log(props)
    return(
        <div style={{'width': '100%'}}>
            <img src={props.objectImg} alt={props.title} />
            <p>{props.artist}</p>
            <p>{props.title}</p>
            {/* <p>{props.objectId}</p> */}
        </div>
    )
}

