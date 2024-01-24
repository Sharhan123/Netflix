import { useEffect, useState ,createContext} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Rowpost from './components/rowpost'
import './App.css'
import Banner from './components/Banner'
import axios from './axios'
import { genresContext } from './context'
import { api_key,baseUrl } from './constants/constant'
import Footer from './components/footer'
function App() {
  const [genres,setGenres]=useState([])
  useEffect(()=>{
    axios.get('genre/movie/list?language=en&api_key=8dfcb70eca0f8a3cc1af87ee5ef2b409').then((response)=>{
      setGenres(response.data.genres)
    })
  },[])
   


  return (
    <div className='app'>
      <Navbar />
      <Banner />
      {
        
        genres.map((genre, index) => (
          genre.id !== 99 ? (
            <Rowpost key={index} isSmall={index === 0 ? true : false} id={genre.id} page={index + 1} title={genre.name} />
          ) : null
        ))
        }
        <Footer />
    </div>
  )
}

export default App
