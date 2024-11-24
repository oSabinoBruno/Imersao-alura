import express from "express"; // Importa a biblioteca Express para criar o servidor web
import routes from "./src/config/routes/postRoutes.js";

// Cria uma instância do Express para criar o servidor
const app = express();
app.use(express.static("uploads"))
routes(app)


// Inicia o servidor na porta 3000 e mostra uma mensagem no console
app.listen(3000, () => {
    console.log("servidor Escutando...");
});
    