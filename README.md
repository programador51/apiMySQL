# Libraries needed
* express
* mysql
* nodemon -D : Refresh the server when a change on the code it's made

Elements that conform a server in express
* Configuration for the port
* Development enviroment
* Template engine
* Public files
* **MIDDLEWARES** : [What is a middleware](https://dev.to/xngwng/what-is-http-middleware-best-practices-for-building-desiging-and-using-middleware-5g10)
* **ROUTES**: Endpoints

## Database
Like in PHP...
1. Create the connection (Database already must be created, like in XAMPP,MySQLWorkbench,etc.)
2. Use the connection, normally its used on the routes of the API

## Endpoints
Can be multiple endpoints with the same name
but with different https methods.
More [info](https://dev.to/irina_scurtu/naming-your-rest-endpoints-2fc)