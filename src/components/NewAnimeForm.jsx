import { useState } from "react"
import axios from "axios"

const API = import.meta.env.VITE_API


function NewAnimeForm() {
    const [anime, setAnime] = useState({
        name: "",
        discription: ""
    })

    function handleNameChange(event){
        setAnime({...anime, name: event.target.value})
    }

    function handleDiscriptionChange(event){
        setAnime({...anime, discription: event.target.value})
    }

    function handleSubmit(e){
        e.preventdefault()

        axios.post(`${API}/animes`, anime).then(response => {
            console.log(response)
            setAnime({
                name: "",
                discription: ""
            })
        })
    }
    
    return(
        <form className="new-anime-form" onSubmit={(e)=> handleSubmit(e)}>
        <h4>New Anime</h4>
        <label>
            please enter the name of your anime:
            <input 
            type="text" 
            name='name' 
            id="name" 
            value={anime.name}
            onChange={(event) => handleNameChange(event)}
            />
        </label>
        <label>
            please enter the discription of your anime:
            <input 
            type="text" 
            name='discription' 
            id="discription" 
            value={anime.discription}
            onChange={(event) => handleDiscriptionChange(event)}
            />
        </label>

        <div className="form-button-container">
            <button type="submit" className="form-button"> Submit </button>
        </div>
        </form>
    )
}

export default NewAnimeForm