import { Hono } from "hono";
import { cors } from "hono/cors";

import { PokerTable } from "./durable_objects/PokerTable";
import root from "./routes/root";
import connect from "./routes/connect";

const app = new Hono();
app.use("*", cors({ origin: "*" })); // Allow all origins

app.route("/", root);
app.route("/connect", connect);

export { PokerTable };
export default app;
