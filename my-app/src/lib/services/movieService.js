import client from "../client";

const movieFields = `
_id,
  title,
 "actor": actor->fullname
`
const actorFields = `
_id,
fullname,
"name": name.current,
`
// "slug": slug.current,
// "actor": actor->name.current

//_id, title, releaseYear

//*[_type == 'actor' && movie >= titanic] | order(movie) {
//     ... 
// } 

export async function getMovies() {
  const data = await client.fetch(`*[_type == "movie"]{${movieFields}}`)
  return data;
}

export async function getActors() {
    const data = await client.fetch(`*[_type == "actor"]{${actorFields}}`)
    return data;
  }

 export async function getMovieByActor() {
    const data = await client.fetch(
      `*[_type == "actor]{
        _id, fullname, "name": name.current,
        "movies": *[_type == "movie" && references(^._id)].title
      }`,
    )
    return data
  }

//   export async function getMovieByActor(actor) {
//     const data = await client.fetch(`*[_type == "movie" && actor->name.current=$actor]{${actorFields}}`)
//     {actor}
//     return data;
//   }


//   export async function getMovieByActor(actor) {
//     const data = await client.fetch(
//       `*[_type == "movie" && actor->name.current == $actor]{_id, title, "actor": actor->{fullname,
//         "name": name.current}`,
//       { actor }
//     )
//     return data;
// }