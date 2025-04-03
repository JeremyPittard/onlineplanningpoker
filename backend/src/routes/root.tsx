import { Hono } from "hono";
import { FC } from "hono/jsx";

const app = new Hono();

const LandingPage: FC = () => {
  return (
    <>
      <html lang="en">
        <head>
          <title>chatroom</title>
          <link
            rel="icon"
            href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👀</text></svg>"
          />
        </head>
        <body>
          <main style="display: flex; justify-content: center; align-items: center; height: 100vh;">
            <h1>👀</h1>
          </main>
        </body>
      </html>
    </>
  );
};

app.get("/", (c) => {
  return c.html(<LandingPage />);
});

export default app;
