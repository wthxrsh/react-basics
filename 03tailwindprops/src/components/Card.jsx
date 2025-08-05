import React from 'react'

function Card(props) {
  return (
    <div>
        <img src={props.image} alt="mumbai" />
        <h1 className='text-2xl bg-green-500 p-3 rounded'>A card for photos</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio mollitia, vel culpa, tenetur praesentium at adipisci delectus ut beatae dignissimos, cupiditate nemo error deleniti tempore?</p>
    </div>
  )
}

export default Card