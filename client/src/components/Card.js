import React from 'react'
import './Card.css'

function Card({title,imageUrl,body}) {
    return (
        <div className='card-container'>
           <div className='image-container'>
               <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/White-tiger-2407799_1280.jpg/260px-White-tiger-2407799_1280.jpg'} alt='Tigre Blanc'/>
               
                   
        </div>
        <div className='card-content'>
        <div className='card-title'>
            <h3>Le tigre du Bengale</h3>
            </div>
            <div className="card-body">
                 <p>Le tigre du Bengale 
                     (Panthera tigris tigris) est un félin, et la sous-espèce
                      de tigre la plus connue. Également appelé tigre royal du Bengale,
                       il est plus léger et moins imposant que le tigre de Sibérie. Sa population,
                        notamment grâce aux actions de protection du gouvernement indien, est en augmentation
                         depuis plusieurs années, en 2019, elle dépassait probablement les 3000 individus en Inde1. 
                         <button>
                <a>
                Plus d'infos
                </a>
            </button></p>
            </div>
            
        </div>
        </div>
        
        
        
        

    )
}

export default Card
