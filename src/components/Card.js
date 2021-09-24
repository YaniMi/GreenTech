import React from 'react'
import './Card.css'

function Card({title,imageUrl,body}) {
    return (
        <div className='card-container'>
           <div className='image-container'>
               <img src={'https://images.bfmtv.com/KmjkaVXQpzelGwwW1k2DShCvnfU=/4x3:1236x696/640x0/images/Juan-Joya-Borja-El-Risitas-dans-l-emission-espagnole-Ratones-coloraos-1016561.jpg'} alt=''/>
               
                   
        </div>
        <div className='card-content'>
        <div className='card-title'>
            <h3>(title)</h3>
            </div>
            <div className="card-body">
                 <p>(body)</p>
            </div>
        </div>
        
            <button>
                <a>
                Plus d'infos
                </a>
            </button>
            </div>

    )
}

export default Card
