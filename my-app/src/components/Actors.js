import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { getActors } from "../lib/services/movieService"

export default function Actors() {
    const [content, setContent] = useState([])

    useEffect(() => {
    const getContent = async() => {
    const data = await getActors()
    console.log(data)
    setContent(data)
    }
    getContent()
    }, [])

    return(
    <>
    <h1>Actors</h1>
    {content?.map((actor) => (

             <li key={actor._id}>
            <NavLink to={`${actor.name}`}>{actor.fullname}</NavLink>
          </li>
    )
    )}
    {/* {content?.map((actor) => (
          <li key={actor._id}>
          <NavLink to={`/actors/${actor.name}`}>{actor.fullname}</NavLink>
          </li>
    )
    )} */}
    </>
    )
}