import React, { useEffect, useState } from 'react'

const Anloo = () => {
     const [anioo, setanioo] = useState([])

   useEffect(() => {
    const updateanime=async(e)=>{
      try {
          let url=`https://api.jikan.moe/v4/anime`
          let res=await fetch(url)
          let dato=await res.json();
          // console.log(dato);
          // console.log(dato.data[1].title);
          setanioo(dato.data)
      } catch (error) {
          // console.log(error);
          
      }
     }
     updateanime()
   }, [])
   
 
  return (
     <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Trending Anime</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {anioo.map((anime) => (
          <div key={anime.mal_id} className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <img src={anime.images.jpg.image_url} alt={anime.title} className="w-full h-60 object-cover rounded-md" />
            <h2 className="text-xl font-semibold mt-2">{anime.title}</h2>
            <h3>{anime.duration}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Anloo
