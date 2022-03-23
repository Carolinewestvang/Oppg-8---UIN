export default {
    type: "document",
    name: "actor",
    title: "Actor",
    fields: [
      {
        type: "string",
        name: "fullname",
        title: "Fullt navn:",
        description: "Her kan du legge til kjendisens fulle navn"
      },   
      {
        type: "slug",
        name: "name",
        title: "Slug",
      }
    ]
}