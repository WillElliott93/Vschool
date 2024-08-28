import { useState } from "react"
import movies from "../movies"


export default function RandomMovie(props) {

    const {addMovie} = props
    const [index, setIndex] = useState(0)
    const [showDetails, setShowDetails] = useState(false)

    function getRandomMovie(){
        const randomIndex = Math.floor(Math.random() * movies.length)
        setIndex(randomIndex)
    }

    function nextMovie(num) {
        setIndex(prevMovieIndex => {
            const newIndex = prevMovieIndex + num

            if(newIndex < 0) {
                return movies.length - 1
            } else if ( newIndex === movies.length) {
                return 0
            } else {
                return newIndex
            }
        })
    }

    function toggleDetails(){
        setShowDetails(!showDetails)
    }

    return(
        <div>
            <h1>{movies[index].title}</h1>
            {showDetails && (
                <>
                <p>Rating: {movies[index].rating}</p>
                <p>Description: {movies[index].description}</p>
                </>
            )
            }
            <button onClick={() => nextMovie(-1)}>Prev Movie</button>
            <button onClick={() => nextMovie(1)}>Next Movie</button>
            <button onClick={getRandomMovie}>Random Movie</button>
            <button onClick={toggleDetails}>{showDetails ? "Hide Details" : "Show Details"}</button>
            <div><button onClick={() => addMovie(movies[index])}>Save Movie</button></div>
        </div>
    )
}