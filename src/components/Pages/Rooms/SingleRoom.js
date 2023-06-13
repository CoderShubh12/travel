import React from 'react'
import Carousel from '../../../common/Carousel'
import { hotelCards } from '../../../constant/data'

const SingleRoom = () => {
  return (
    <div style={{background:"black",}}>
        <Carousel cards={hotelCards}/>
          
    </div>
  )
}

export default SingleRoom