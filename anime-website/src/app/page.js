"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function AnimeDetails() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [anime, setAnime] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchAnimeDetails = async () => {
      try {
        const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
        const data = await res.json();
        setAnime(data.data);
      } catch (error) {
        console.error("Error fetching anime details:", error);
      }
    };
    
    fetchAnimeDetails();
  }, [id]);

  if (!anime) return <p className="text-white text-center">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-4xl mx-auto">
        <img src={anime.trailer.images?.large_image_url || anime.images.jpg.image_url} 
             alt={anime.title} 
             className="w-full h-96 object-cover rounded-lg shadow-lg" />
        <h1 className="text-3xl font-bold mt-4">{anime.title}</h1>
        <p className="mt-2 text-gray-300">{anime.synopsis}</p>
        {anime.trailer.youtube_id && (
          <div className="mt-6">
            <h2 className="text-2xl font-semibold">Watch Trailer</h2>
            <iframe
              className="w-full h-64 mt-2 rounded-lg"
              src={`https://www.youtube.com/embed/${anime.trailer.youtube_id}`}
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
}
