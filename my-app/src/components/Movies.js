import {useState, useEffect} from "react"
import { getMovies } from "../lib/services/movieService"
import Movie from "./Movie"

export default function Movies() {
    const [content, setContent] = useState([])

    useEffect(() => {
    const getContent = async() => {
    const data = await getMovies()
    console.log(data)
    setContent(data)
    }
    getContent()
    }, [])


    return (
    <>
    <h1>Movies</h1>
    {content?.map((movie) => (
         <Movie key={movie._id} title={movie.title}
         actor={movie.actor}/>
    )
    )}
    </>
    )
}