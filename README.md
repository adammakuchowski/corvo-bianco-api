# [Corvo Bianco API](https://corvo-bianco-api.azurewebsites.net)

Corvo Bianco API project serves as the backend for the [Corvo Bianco](https://github.com/adammakuchowski/corvo-bianco-web) project, enabling efficient communication and data transmission between various system components.

## Description

Corvo Bianco API project was created to develop programming skills, providing a robust backend solution for seamless interaction with diverse data. It represents a practical application of modern web technologies, perfect for gaining experience in designing backend systems. It utilizes the MongoDB database and is built on the Express framework, facilitating efficient data management and smooth project handling. This API allows various operations related to products and orders, facilitating both the retrieval and creation of new products, as well as the placement of new orders.

Corvo Bianco API provides the backend logic for the project: https://github.com/adammakuchowski/corvo-bianco-web

### Used technologies

* TS
* JS
* MongoDB

### Used libraries

* Express
* Mongoose
* Cors
* Helmet
* Joi
* Morgan
* Winston

## Getting Started

### Executing program

* Before starting use your package manager: npm or yarn to install all necessary dependencies and packages

* Basic settings ensure connection on the default port for local MongoDB operation.

```
npm install
```

* If all dependencies are installed successfully, use the command to run the application

```
npm run start
```

## Link

[Corvo Bianco API](https://corvo-bianco-api.azurewebsites.net)

## Author

[Adam Makuchowski](https://www.linkedin.com/in/adam-makuchowski-35753a209/)

## Enpoints list

[GET] **/** - test work

[GET]  **/notFoundTest** - test handling of unknown routing

[GET] **/products/getAllProducts** - fetching all products

[POST] **/products/createProduct** - creating new product

[POST] **/orders/createOrder** - creating new order

## Additional information

Project base was used from [express-api-template](https://github.com/adammakuchowski/express-api-template), which originates from another one of my repositories: https://github.com/adammakuchowski/express-api-template

The project was created entirely independently. Used as a source of knowledge
official documentations and the Internet. 

### Deployment

For deployment, I utilized the Azure App Service in Azure Cloud.
