import { useState, useEffect} from 'react'
import Anime from './Anime'
import axios from "axios"


const API = import.meta.env.VITE_API
function Animes() {

  const [animes, setAnimes] = useState([])
  useEffect(()=>{
    axios.get(`${API}/animes`).then(({data})=>{
      console.log(data)
      setAnimes(data.payload)
    }).catch(e => console.warn("catch", e))
  },[])
  return (
    <section className='index'>
      <table className='table'>
        <thead>
          <tr>
            <th>
              Name
            </th>
            <th>
              Description 
            </th>
          </tr>
        </thead>
        <tbody>
            {animes.map((anime, i)=>{
              return(
                <Anime anime={anime} i={i}/>
              )
            })}
        </tbody>
      </table>
    </section>
  )
}

export default Animes
