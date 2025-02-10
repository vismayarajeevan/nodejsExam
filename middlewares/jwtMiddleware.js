const jwt = require('jsonwebtoken')

const jwtMiddleware = (req,res,next)=>{
    console.log("inside middleware");
   
     
    const token = req.headers['authorization'].split(" ")[1]

    if(token!=''){
        try {
            const jwtrespose = jwt.verify(token,process.env.superSecretKey)
            console.log(jwtrespose);
            req.userId = jwtrespose.userId
            
                        
            
        } catch (error) {
            res.status(401).json('Authorization failed.. please login...')
        }

    }
    
  
    
    next()
    
}

module.exports = jwtMiddleware