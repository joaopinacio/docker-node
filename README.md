# Instructions

*In this Project makes you have a Mysql database and a backend in Node.js all in localhost.*  

## About Node  
**This backend uses the following libraries:**  

- **Nodemon**  
To restart the server every time you change a file.  

- **Mysql**  
To connect to the database.  

- **Socket.io**  
To have available functions that let you handle information in real time.  

## About Database
See more in: [Docker Mysql](https://hub.docker.com/_/mysql)

## Important (!!!)
Open your docker-compose.yml file to edit for your taste - ;D

## Important Docker Commands
To turn on all container's:

```docker-compose up```

To list all container's (to see the id's):

```docker ps```

To enter in a Container:

```docker exec -it [container-id] bash```

### Load Dump (Database Scripts)
Before you turn on your container's: 
- Delete all files in data directory (./mysql/data)
- Put your dump file in the folder "scripts" with the name "1-init.sql"

If you want add some more scripts:
- Just put the files at the same folder and increase the order number by one to docker run's into an order.

Examples: 1-init.sql, 2-init.sql, 3-init.sql, ...

## Credentials
Credentials Database:

    hostname: localhost
    port: 3306
    dbname: mysql
    username: root
    password: root

Credentials to put in your project:

    host     = "mysql"; // Container's Name
    dbname   = "mysql";
    user     = "root";
    password = "root";

## Docker Commands
Docker Commands for clean your containers.

Stop all containers:

```docker kill $(docker ps -q)```
    
Remove all containers

```docker rm $(docker ps -a -q)```
    
Remove all docker images

```docker rmi $(docker images -q)```
