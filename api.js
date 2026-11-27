import { apiBaseUrl } from "./config.js";

// Turns a fetch response into JSON, or rejects if the request failed.
// The API answers 200 even for errors, with { response: "error", error: "..." }.
function toJson(res) {
  if (!res.ok) return Promise.reject(new Error(`Request failed: ${res.status}`));
  return res.json().then((data) =>
    data.response === "error" ? Promise.reject(new Error(data.error)) : data,
  );
}

// Gets one hero by its numeric id.
export function getHero(id) {
  return fetch(`${apiBaseUrl}/${id}`)
    .then(toJson)
    .catch((err) => ({ error: err.message || "Hero not found" }));
}

// Searches heroes by name.
export function searchHero(name) {
  return fetch(`${apiBaseUrl}/search/${encodeURIComponent(name)}`)
    .then(toJson)
    .catch((err) => ({ error: err.message || "Hero not found" }));
}
