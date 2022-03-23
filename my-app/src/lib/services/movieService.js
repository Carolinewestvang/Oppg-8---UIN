import client from "../client";

const fields = `
  title,
  actor,
  fullname, 
  "name": name.current
`

export async function getMovies() {
  const data = await client.fetch(`*[_type == "movie"]{${fields}}`)
  return data
}

// export async function getQuizByCategory(category) {
//   const data = await client.fetch(
//     `*[_type == "quiz" && category->name.current==$category]{${fields}}`,
//     { category }
//   )
//   return data
// }

// export async function getQuizBySlug(slug) {
//   const data = await client.fetch(
//     `*[_type == "quiz" && slug.current == $slug]{${fields}}`, 
//     { slug } )
//   return data?.[0]
// }