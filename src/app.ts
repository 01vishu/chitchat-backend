import express, { Express } from "express";
import { ChitChatServer } from "./setupServer";
import databaseConnection from "./setupDatabase";
class Application {
  public initialize(): void {
    databaseConnection();
    const app: Express = express();
    const server: ChitChatServer = new ChitChatServer(app);
    server.start();
  }
}

const application: Application = new Application();
application.initialize();
