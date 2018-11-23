const express = require('express')
const app = express();
const port = 5000;


app.get('/api/notes', (req, res) => {
  const notes = [
    {id: 1, body: 'Doe'},
    {id: 2, body: 'Smith'},
    {id: 3, body: 'Swanson'}
  ]

  res.json(notes);
})

app.listen(port, () => console.log(`Server started on port ${port}`))
