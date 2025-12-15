#!/bin/sh

# create product brand
curl -X POST http://localhost:3000/api/product-brand -H "Content-Type: application/json" -d '{"name": "Barilla"}'

# create product for brand
#curl -X POST http://localhost:3000/api/product -H "Content-Type: application/json" -d '{"name": "Spaghetti"}'