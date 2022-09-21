import { SERVER_PORT } from './global/environment';
import Server from "./classes/server";
import router from './routes/router';
import cors from 'cors';

import bodyParser from 'body-parser';


 const server = new Server();

//BodyParser
server.app.use(bodyParser.urlencoded({extended: true}));
server.app.use(bodyParser.json());

// CORS
server.app.use(cors({origin: true, credentials: true}))

// Rutas de servicios
server.app.use('/', router);


// Arranca el servidor Express
server.start( ()=> {  
    console.log(`Servidor corriendo en el puerto ${SERVER_PORT}`);   
});