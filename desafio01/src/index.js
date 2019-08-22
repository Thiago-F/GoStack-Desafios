const express = require("express");
const app = express();
app.use(express.json());

const projects = [];
let requestCount = 0;

const checkIsValid = (req , res , next) => {
  const { id } = req.params;

  projects.map(proj => {
    if(proj.id == id){
      return next();
    }
  })

  return res.status(400).json({error:'Project is not valid'})
}

app.use((req , res, next) => {
  console.log(`Total de ${++requestCount} requisiç${(requestCount > 1)?'ões':'ão'}`)

  return next();
})

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

app.put("/projects/:id", checkIsValid , (req, res) => {
  const project = projects.filter(proj => proj.id == req.params.id);
  console.log(project);
  const { title } = req.body;
  project[0].title = title;

  return res.json(project);
});

app.delete("/projects/:id", checkIsValid, (req, res) => {
  const project = projects.filter((proj, index) => (proj.id == req.params.id));
  let index = projects.indexOf(project[0]);

  projects.splice(index , 1);
  
  return res.json(projects);
});

app.post("/projects/:id", checkIsValid, (req, res) => {
  const {id} = req.params;
  
  projects.map(proj => {
    if(proj.id == id){
      proj.tasks = req.body.tasks
    }
  })
  
  return res.json(projects);
});

app.listen(3000);
