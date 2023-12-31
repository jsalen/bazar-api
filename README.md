<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Bazar API
This is a simple API for a Bazar, where you can create, update, delete and list products and categories.

## Stack used
- NestJS
- MongoDB
- Mongoose ODM
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
4. Copy `.env.template` to `.env` and fill the variables
```bash
cp .env.template .env
```
5. Set up Mongo Data Base
```
docker-compose up -d
```
6. Seed the database
```
GET http://localhost:3000/api/seed
```