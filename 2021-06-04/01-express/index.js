const express = require('express')
const app = express()
const port = 3000

const tareas = [
    {
    id:1,
    nombre: 'tarea 1',
    activo: true
    },
    {
    id:2,
    nombre: 'tarea 2',
    activo: false
        }
]
app.use(express.json())

app.get('/tareas/:id', (req, res) => {
    console.log('GET en /tareas/' + req.params.id);
    tareas.forEach(element => {
        element.id == req.params.id ? res.send(element):null      
    });
    res.send(tareas)

  })

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/tareas', (req, res) => {
    res.send(tareas)
  })

app.get('/persona/:nombre/:apellido', (req, res) =>{
    console.log('GET en /tareas/' + req.params.nombre +'/'+ req.params.apellido );
    console.log('Nombre: '+req.params.nombre);
    console.log('Apellido: '+req.params.apellido);

    res.send('ok')    
})

app.post('/tareas', (req, res) => {
    console.log('post en /tareas');
    console.log(req.body);
    id_aux=0;
    tareas.forEach(element => {
        element.id>id_aux?id_aux=element.id:null;
    });
    nueva_tarea={
        id:id_aux+1,
        nombre:req.body.nombre,
        activo:req.body.activo
    }
    tareas.push(nueva_tarea)
    res.send(nueva_tarea)


  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})