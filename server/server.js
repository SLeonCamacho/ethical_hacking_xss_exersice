const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/captura_datos', (req, res) => {
  const data = req.body;
  console.log('Datos recibidos:', data);

  // Puedes guardar los datos en un archivo o base de datos aquí
  // Ejemplo: fs.writeFile('data.json', JSON.stringify(data), (err) => { /* ... */ });

  res.status(200).send('Datos recibidos exitosamente');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
