export const authMiddleware=(re,res,next)=>{
       const userid= req.headers["authorization"];

    const decode=  jwt.verify(userid ,jwtsecret)
    if(decode){
        //@ts-ignore
        req.user= decode.id;
        next()
    }
}