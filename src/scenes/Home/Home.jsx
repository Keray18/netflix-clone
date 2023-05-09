import React, { useState } from 'react'
import './Home.scss'
import Row from '../../components/Row'
import axios from 'axios'
import { useEffect } from 'react'
import { ImPlay3 } from 'react-icons/im'
import { IoAddOutline } from 'react-icons/io5'

const apiKey = "734f7b01cf11b87921c92d3bb93db2a6"
const url = "https://api.themoviedb.org/3"
const imgUrl = "https://image.tmdb.org/t/p/w500"

const Home = () => {

  const [upcomingMovies, setUpcomingMovies] = useState([])
  const [nowPlaying, setNowPlaying] = useState([])
  const [popular, setPopular] = useState([])
  const [topRated, setTopRated] = useState([])

  useEffect( () => {
    const fetchUpcoming = async () => {
      const { data: { results } } = await axios.get(`${url}/movie/upcoming?api_key=${apiKey}`)
      setUpcomingMovies(results)
    }
    const fetchPlaying = async () => {
      const { data: { results } } = await axios.get(`${url}/movie/now_playing?api_key=${apiKey}`)
      setNowPlaying(results)
    }
    const fetchPopular = async () => {
      const { data: { results } } = await axios.get(`${url}/movie/popular?api_key=${apiKey}`)
      setPopular(results)
    }
    const fetchTop = async () => {
      const { data: { results } } = await axios.get(`${url}/movie/top_rated?api_key=${apiKey}`)
      setTopRated(results)
    }

    fetchUpcoming()
    fetchPlaying()
    fetchPopular()
    fetchTop()
  }, []) 

  return (
    <div className='home'>
      <div
       className='banner'
       style={{
        backgroundImage: popular[0] ? `url(${`${imgUrl}/${popular[0].poster_path}`})` : "none"
       }}
       >
        {popular[0] && <h1>{popular[0].original_title}</h1>}
        {popular[0] && <p>{popular[0].overview}</p>}

        <div>
          <button className='play'><ImPlay3 /> Play</button>
          <button className='plus'><IoAddOutline /> My List</button>
        </div>

      </div>

      <Row title={"Upcoming Movies"} arr={upcomingMovies} />
      <Row title={"Now Playing"} arr={nowPlaying} />
      <Row title={"Most Popular"} arr={popular} />
      <Row title={"Top Rated"} arr={topRated} />
      
    </div>
  )
}

export default Home