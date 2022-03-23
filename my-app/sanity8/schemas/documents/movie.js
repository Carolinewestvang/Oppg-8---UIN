export default {
    type: "document",
    name: "movie",
    title: "Movie",
    fields: [
      {
        type: "string",
        name: "title",
        title: "Tittel",
        description: "Her kan du legge til tittel"
      },
      {
        type: "reference",
        name: "actor",
        title: "Skuespiller",
        to: {type: "actor"},
      }
    ]
}