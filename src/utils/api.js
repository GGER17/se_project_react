const baseUrl = "http://localhost:3001";

function getItems() {
  return fetch(`${baseUrl}/items`)
    .then((res) =>
      res.ok ? res.json() : Promise.reject(`Error: ${res.status}`),
    )
    .then((items) =>
      items.map((item) => ({
        ...item,
        weather: item.weather.toLowerCase().trim(),
      })),
    );
}

function addItem({ name, imageUrl, weather }) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, imageUrl, weather }),
  }).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  });
}

function deleteItem(id) {
  return fetch(`${baseUrl}/items/${id}`, { method: "DELETE" }).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  });
}

export { getItems, addItem, deleteItem };
