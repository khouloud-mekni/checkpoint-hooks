import React from 'react'
import './CardMovie.css'

import ReactStars from 'react-stars'
const Cardmovie = ({movie}) => {
  
  return (
   <div className='cards'>
   <div className="card">
   <img src={movie.posterUrl} alt="posterimg" width="200px" height="150PX"/>
   <div className='starsrate'>
   <ReactStars 
   value={movie.rating}
   half={false}
count={5}
   size={24}
   edit={false}
    />
   </div>
   <p className="card-desc"> {movie.description}</p>
   <h2 className="card-title">{movie.title}</h2>
   
   </div>
   </div>
   
 
  

  )
}

export default Cardmovie











































// import React from 'react'
// import './CardMovie.css'
// import StarsRating from 'stars-rating'
// const Cardmovie = ({movie}) => {
//   return (
//     <div className='oneCard'>
//     <h7>{movie.title}</h7>
//     <img src={movie.posterUrl} alt="imghk" width={170}/>
// <p>{movie.description}</p>
// <StarsRating
//         count={5}
//         // onChange={ratingChanged}
//         half={false}
//         size={25}
//         color2={'#ffd700'} 
//         edit={false}/>

//     </div>
//   )
// }

// export default Cardmovie