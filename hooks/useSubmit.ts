
import { MutationType } from "../types/index";

export const useSubmit = async (mutations: MutationType) => {
  let response;
  let token =
    "sk3Lv9k9IpxALPfNZsiQyknYGmbjO5FLfnQIphoQ3rIseJPWf7nFb7ifbYPSeYB5nbCQmfTbEYILyNUVTUYYf06orBIqbFPmMZe3Rf3ge0dosqcprgTGW3oNeJ7ZcLrME5qJv3mLP6eNoKlKN8getlW0jcZBbqk2PNonh5eGM9vyM26Jo1Jo";
  let projectId = "14gp8bl9";
  await fetch(
    `https://${projectId}.api.sanity.io/v2021-06-07/data/mutate/production/`,
    {
      method: "post",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ mutations }),
    }
  )
    .then((response) => response.json())
    .then((res) => {
        response = res
    })
    .catch((error) => console.error(error));
    return response
};
