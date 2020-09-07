import React from 'react';
import './Card.css'

const Card =(props)=>{
    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${props.id}`} />
            <div>
                {/* <h2>{props.id}</h2> */}
                <p>{props.name}</p>
                <p>{props.email}</p>
            </div>

        </div>
    )
}


export default Card;