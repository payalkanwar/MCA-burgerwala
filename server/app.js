import express, { urlencoded } from "express"
import dotenv from "dotenv"
import {connectPassport} from "./utils/Provider.js"
import session from "express-session"
import cookieParser from "cookie-parser"
import userRoute from "./routes/user.js";
import passport from "passport"
import { errorMiddeware } from "./middlewares/errorMiddleware.js"
import orderRoute from "./routes/order.js"

const app = express()

dotenv.config({
    path:"./config/config.env"
});

//using middlewares

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
})
);
app.use(cookieParser());
app.use(express.json());
app.use(
    urlencoded({
        extended:true,
    })
)
app.use(passport.authenticate("session"));
app.use(passport.initialize());
app.use(passport.session ());

connectPassport();


export default app;

//importing Routes


app.use("/api/v1", userRoute)
app.use("/api/v1", orderRoute)

//Using Error Middleware
app.use(errorMiddeware)