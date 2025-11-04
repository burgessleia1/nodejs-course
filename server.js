const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Existing routes
const helloRoute = require('./routes/hello');
const productRoutes = require('./routes/products');
const ttechRoute = require('./routes/ttech'); // <-- new route

// Use routes
app.use('/hello', helloRoute);
app.use('/products', productRoutes);
app.use('/ttech', ttechRoute); // <-- connect the route

app.get('/', (req, res) => {
  res.send('Welcome to my Node.js server!');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});




    
 