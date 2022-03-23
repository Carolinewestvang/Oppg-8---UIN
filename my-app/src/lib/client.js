import sanityClient from "@sanity/client"

const options = {
  projectId: "0sql87n8",
  dataset: "production",
  apiVersion: "2021-03-25",
}

const client = sanityClient({
  ...options,
  useCdn: false,
})

export default client