# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `data-source.ts` file
3. Run `npm start` command

## Bootsrap express server + typeorm

1. `npx typeorm init --name MyProject --database postgres`
2. `npm i --save express`
3. `npm i -D typescript @types/express @types/node nodemon`
4. `CREATE DATABASE "api-starter";`
5. Set ts target to `es6` in `tsconfig.json`
6. Add `"esModuleInterop": true,` to `tsconfig.json`
7. Update `start` script in `package.json` to `nodemon --exec ts-node src/index.ts`
