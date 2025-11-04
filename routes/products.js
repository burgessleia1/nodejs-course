const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const productsFile = path.join(__dirname, '../data/products.json');

router.get('/', (req, res) => {
  const products = JSON.parse(fs.readFileSync(productsFile, 'utf-8'));
  res.json(products);
});

router.post('/', (req, res) => {
  const products = JSON.parse(fs.readFileSync(productsFile, 'utf-8'));
  const newProduct = req.body;
  products.push(newProduct);
  fs.writeFileSync(productsFile, JSON.stringify(products, null, 2));
  res.status(201).json(newProduct);
});

module.exports = router;


