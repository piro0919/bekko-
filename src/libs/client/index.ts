import * as contentful from "contentful";

const client = contentful.createClient({
  accessToken: process.env.CONTENTFUL_CONTENT_API_ACCESS_TOKEN || "",
  space: process.env.CONTENTFUL_SPACE_ID || "",
});

export default client;
