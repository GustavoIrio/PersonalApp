import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import { routes } from "./routes/routes";
import cors from "cors";
 
const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

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

app.listen(3333, () => console.log("Server is running"))