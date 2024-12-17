# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `data-source.ts` file
3. Run `npm start` command

## Bootsrap express server + typeorm

1. `npx typeorm init --name MyProject --database postgres`
2. `npm i -D typescript @types/express @types/node`
3. `CREATE DATABASE "api-starter";`
4. Set ts target to es6 in `tsconfig.json`
5. `npm i --save express`
6. Add `"esModuleInterop": true,` to `tsconfig.json`
