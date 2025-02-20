import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";
import * as dotenv from "dotenv";

dotenv.config();

// Costruisci l'URI di connessione con le credenziali
const username = "LibertyWall";
const password = encodeURIComponent("wQw5ez6SV.DF%aE"); // Codifica la password per gestire i caratteri speciali
const host = "atlas-sql-67b1efd3976edf15ec3c184d-vtyfd.a.query.mongodb.net";
const dbName = "sample_mflix";

const mongoUri = `mongodb://${username}:${password}@${host}/${dbName}?ssl=true&authSource=admin`;

export const AppDataSource = new DataSource({
    type: "mongodb",
    url: mongoUri,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    synchronize: true,
    logging: true,
    entities: [User],
    subscribers: [],
    migrations: []
});