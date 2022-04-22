import sanityClient from "@sanity/client";

export const client = sanityClient({
    projectId: "jy21shny",
    dataset: "production",
    apiVersion: "2022-03-28",
    token: "skXCvMhFQQtVw43zIJPpodWkULBVY8xxoTY3EPCn1TjuhJArz7kQOvSEals3THk94LGqZmI8gVzHZmRwALp4ZD0EWbgR6nUFjz9WeoOHSdLks1gaij0sS7YUI1UUI1RU0yvzQ9K2AZoqaE47ASfd80W51eQ58aKsAERo8ksrHG4L4CAxSXfk",
    useCdn: false
})