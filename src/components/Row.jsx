import React from 'react'
import Card from './Card'

const imgUrl = "https://image.tmdb.org/t/p/w500"
const Row = ({ title, arr=[{
    img:"https://movies.universalpictures.com/media/hbs-tsr1sheet-rgb-2-sm-5c54957d843cd-1-5d364e4fba0e1-1.jpg"
}] }) => (
    
    
    <div className='row'>
        <h2>{title}</h2>
        
        <div>
            {
                arr.map( (item, index) => (
                    <Card key={index} img={`${imgUrl}${item.poster_path}`} />
                ))
            }
        </div>
    </div>
  )

export default Row