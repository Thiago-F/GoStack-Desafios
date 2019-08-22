const express = require("express");
const app = express();
app.use(express.json());

const projects = [];

//list
app.get("/projects", (req, res) => {
  return res.json(projects);
});

app.post("/projects", (req, res) => {
  const { id, title } = req.body;

  const project = { id, title };
  projects.push(project);

  return res.json(projects);
});

app.put("/projects/:id", (req, res) => {
  const project = projects.filter(proj => proj.id == req.params.id);
  console.log(project);
  const { title } = req.body;
  project[0].title = title;

  return res.json(project);
});

let index;
app.delete("/projects/:id", (req, res) => {
  const project = projects.filter((proj, index) => proj.id == req.params.id);

  projects.slice(index, 1);
  return res.json(project);
});

app.listen(3000);
