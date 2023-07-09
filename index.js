import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import candidatosRoute from "./routes/candidatos.js";
import eleccionesRoute from "./routes/elecciones.js";

dotenv.config();

const app = express();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conectado a MongoDB");
  } catch (error) {
    console.error("Error al conectar a MongoDB:", error.message);
    process.exit(1); // Detener la ejecución de la aplicación en caso de error
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("Desconectado de MongoDB");
});

// Middlewares
app.use(express.json());

// Rutas
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/candidatos", candidatosRoute);
app.use("/api/v1/elecciones", eleccionesRoute);

const port = process.env.PORT || 8800;
app.listen(port, () => {
  connect();
  console.log(`Servidor en ejecución en el puerto ${port}`);
});
