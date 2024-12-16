import { AppDataSource } from "./data-source";
import { User } from "./entity/User";
import server from "./server";

AppDataSource.initialize()
  .then(async () => {
    server();
  })
  .catch((error) => console.log(error));
