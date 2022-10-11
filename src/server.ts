import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import { routes } from "./routes/routes";
import cors from "cors";
 
const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

// app.use(cors({
//     "origin": "*",
//     "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
//     "preflightContinue": false,
//     "optionsSuccessStatus": 204
// }));

// app.all('*', function(req, res) {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
//     res.setHeader('Access-Control-Allow-Credentials', 'true'); // If needed

//     res.send('cors problem fixed:)');
// });

// Middleware to show errors
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof Error) {
        return res.status(400).json({
            message: err.message
        })
    }
    
    return res.status(500).json({
        status: "error",
        message: "Internal Server Error"
    })
})

app.listen(3000, () => console.log("Server is running"))