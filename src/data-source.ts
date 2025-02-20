import { DataSource } from "typeorm/data-source/DataSource.js";
import { User } from "./entity/User";

export const AppDataSource = new DataSource({
    type: "mongodb",
    host: "atlas-sql-67b2034f8977570991a75501-cwcx3.a.query.mongodb.net",
    port: 80,
    username: "calabrofrancesco92",
    password: "rQyovUajwmV8HNr7",
    database: "sample_mflix",
    synchronize: true,
    logging: true,
    entities: [User],
    subscribers: [],
    migrations: [],
})