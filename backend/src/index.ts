import "dotenv/config";
import apiConfig from "./config/api.config";
import { app } from "./app";

app.listen(apiConfig.API_PORT);
