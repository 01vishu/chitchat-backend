import express, { Express } from "express";
import { ChitChatServer } from "./setupServer";
class Application {
  public initialize(): void {
    const app: Express = express();
    const server: ChitChatServer = new ChitChatServer(app);
    server.start();
  }
}

const application: Application = new Application();
application.initialize();
