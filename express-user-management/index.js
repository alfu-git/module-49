const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Homepage response");
});

const users = [
  {
    id: "u1",
    name: "Rahim Ahmed",
    email: "rahim@example.com",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    role: "user",
    createdAt: "2026-01-10",
  },
  {
    id: "u2",
    name: "Karim Hasan",
    email: "karim@example.com",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    role: "admin",
    createdAt: "2026-02-05",
  },
  {
    id: "u3",
    name: "Nusrat Jahan",
    email: "nusrat@example.com",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    role: "user",
    createdAt: "2026-03-12",
  },
  {
    id: "u4",
    name: "Tanvir Islam",
    email: "tanvir@example.com",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    role: "user",
    createdAt: "2026-04-01",
  },
  {
    id: "u5",
    name: "Sadia Khan",
    email: "sadia@example.com",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    role: "user",
    createdAt: "2026-04-20",
  },
];

app.get("/users", (req, res) => {
  res.send(users);
});

app.listen(port, () => {
  console.log(`express-user-management app listening on port ${port}`);
});
