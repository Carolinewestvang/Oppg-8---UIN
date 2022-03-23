import {useState, useEffect} from "react"
import { getMovies } from "../lib/services/movieService"
import Movie from "./Movie"

export default function Movies() {
    const [content, setContent] = useState(null)

  
    useEffect(() => {
      const getContent = async() => {
        const data = await getMovies()
        setContent(data)
      }
      getContent()
    }, [])
    return (
    <>
    <h1>Movies</h1>
    <Movie />
    </>
    )
}