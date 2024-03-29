import express from "express"
import passport from "passport"
import { Logout, myProfile } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router =  express.Router();

router.get("/googlelogin",
passport.authenticate("google", {scope:["profile"],
})
);



router.get("/login", passport.authenticate("google"),
(req, res, next)=>{
    res.send("Logged In");
});


router.get("/me",isAuthenticated, myProfile);
router.get("/logout", Logout );

export default router;