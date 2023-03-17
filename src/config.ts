import dotenv from "dotenv";
dotenv.config({});

class Config {
  public MONGO_URI: string | undefined;
  public JWT_TOKEN: string | undefined;
  public NODE_ENV: string | undefined;
  public SECRET_KEY_ONE: string | undefined;
  public SECRET_KEY_TWO: string | undefined;
  public CLIENT_URL: string | undefined;
  public SERVER_PORT: string | undefined;

  private readonly DEFAULT_MONGO_URI = "mongodb://127.0.0.1:27017/chitchat";

  constructor() {
    this.MONGO_URI = process.env.MONOGO_URI || this.DEFAULT_MONGO_URI;
    this.JWT_TOKEN = process.env.JWT_TOKEN;
    this.CLIENT_URL = process.env.CLIENT_URL;
    this.NODE_ENV = process.env.NODE_ENV;
    this.SECRET_KEY_ONE = process.env.SECRET_KEY_ONE;
    this.SECRET_KEY_TWO = process.env.SECRET_KEY_TWO;
    this.SERVER_PORT = process.env.SERVER_PORT;
  }

  public validateConfig(): void {
    for (const [key, value] of Object.entries(this)) {
      if (value === undefined) {
        throw new Error(`Configration ${key} is undefiend.`);
      }
    }
  }
}

export const config: Config = new Config();
