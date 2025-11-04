const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Route files
const helloRoute = require('./routes/hello');
const productRoutes = require('./routes/products');

// Use routes
app.use('/hello', helloRoute);
app.use('/products', productRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to my Node.js server!');
});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});



    
 