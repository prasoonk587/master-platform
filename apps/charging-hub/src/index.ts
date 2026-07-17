import "dotenv/config";
import app from "./app";

const PORT = process.env.PORT ?? 3002;

app.listen(PORT, () => {
    console.warn(`Charging Hub running on port ${PORT} [${process.env.NODE_ENV ?? "development"}]`);
});
