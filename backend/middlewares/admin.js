import * as dotenv from 'dotenv';
dotenv.config();
import  jwt  from "jsonwebtoken";
const JWT_Admin_Password = `${process.env.JWT_Admin_Password}`
function adminMiddleware(req, res, next) {
    const token = req.headers.token;
    const decoded = jwt.verify(token , JWT_Admin_Password)

    if(decoded){
        req.adminId = decoded.id;
        next();
    }
    else{
        res.status(403).json({
            message: "You'r not signed in"
        })
    }
}


export default adminMiddleware ;