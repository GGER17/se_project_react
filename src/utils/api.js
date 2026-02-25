const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.gwtwr.jumpingcrab.com" // Your production backend
    : "http://localhost:3001";

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

function addItem({ name, imageUrl, weather }, token) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, imageUrl, weather }),
  }).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  });
}

function deleteItem(id, token) {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: { authorization: `Bearer ${token}` },
  }).then((res) =>
    res.ok ? res.json() : Promise.reject(`Error: ${res.status}`),
  );
}

export { getItems, addItem, deleteItem };
