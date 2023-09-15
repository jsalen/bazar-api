<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Bazar API
This is a simple API for a Bazar, where you can create, update, delete and list products and categories.

## Stack used
- NestJS
- MongoDB
- Docker

## Installation
1. Clone this repository
2. Install the dependencies
```
npm install
```
3. Install NestCLI
```
npm install -g @nestjs/cli
```
4. Set up Mongo Data Base
```
docker-compose up -d
```
5. Seed the database
```
GET http://localhost:3000/api/seed
```