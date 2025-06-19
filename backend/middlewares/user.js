import  jwt  from "jsonwebtoken";
import * as dotenv from 'dotenv';
dotenv.config();
const JWT_User_Password = `${process.env.JWT_User_Password}`
function userMiddleware(req, res, next) {
    const token = req.headers.token;
    const decoded = jwt.verify(token , JWT_User_Password)

    if(decoded){
        req.userId = decoded.id;
        next();
    }
    else{
        res.status(403).json({
            message: "You'r not signed in"
        })
    }
}


export default userMiddleware ;