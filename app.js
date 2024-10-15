const express = require('express');
const app = express();
const port = 3000;

// Data pengguna (biasanya ini akan berasal dari database)
const users = [
  { id: 1, email: "george.bluth@reqres.in", first_name: "George", last_name: "Bluth", avatar: "https://reqres.in/img/faces/1-image.jpg" },
  { id: 2, email: "janet.weaver@reqres.in", first_name: "Janet", last_name: "Weaver", avatar: "https://reqres.in/img/faces/2-image.jpg" },
  // ... tambahkan lebih banyak pengguna ...
  { id: 12, email: "rachel.howell@reqres.in", first_name: "Rachel", last_name: "Howell", avatar: "https://reqres.in/img/faces/12-image.jpg" }
];

// Fungsi untuk mendapatkan pengguna dengan paginasi
function getPaginatedUsers(page, perPage) {
  const start = (page - 1) * perPage;
  const end = start + perPage;
  return users.slice(start, end);
}

// Endpoint API
app.get('/api/users', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const perPage = parseInt(req.query.per_page) || 6;
  const paginatedUsers = getPaginatedUsers(page, perPage);

  const response = {
    page: page,
    per_page: perPage,
    total: users.length,
    total_pages: Math.ceil(users.length / perPage),
    data: paginatedUsers,
    support: {
      url: "https://reqres.in/#support-heading",
      text: "To keep ReqRes free, contributions towards server costs are appreciated!"
    }
  };

  res.json(response);
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});