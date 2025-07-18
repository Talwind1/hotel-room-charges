const express = require('express');
const cors = require('cors');

const app = express();
const { loadJSONs } = require('./controllers/calculations');

app.use(cors());
app.use(express.json())


app.get('/', (req, res) => {
  res.send('Hello from backend!');
});


const { products, charges } = loadJSONs();
console.log('index run ', 'product:', products[0],'charge', charges[0]);



const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});

