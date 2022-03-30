import { useEffect, useState } from "react"
import { getMovieByActor } from "../lib/services/movieService"
import {NavLink} from 'react-router-dom'
// import {useParams} from 'react-router-dom'

export default function Actor() {
    const [content, setContent] = useState([])
    // const {actor} = useParams()

    useEffect(() => {
    const actorSort = async() => {
        const data = await getMovieByActor()
        console.log(data)
        setContent(data)
          }
        actorSort()
    }, [])
    // useEffect(() => {
    //     const getContent = async() => {
    //     const data = await getActors()
    //     console.log(data)
    //     setContent(data)
    //     }
    //     getContent()
    //     }, [])

    return (
    <section>
    {content?.map((actors) => (
            <section key={actors._id}>
            <h1>{actors.fullname}</h1>
            <ul>
            <li key={actors._id}>
            {actors.movies}
            </li>
            </ul>
            </section>
       )
       )}
 
       
       <NavLink to="/actors">TILBAKE</NavLink>

    </section>
    )
}