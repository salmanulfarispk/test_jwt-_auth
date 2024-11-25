const express = require('express');
const mongoose=require('mongoose')
const cors=require('cors')
const cookieParser=require('cookie-parser')
const morgan = require('morgan');
const dotenv=require('dotenv')
dotenv.config();
const User=require('./model/useModel')
const bcrypt=require('bcryptjs');
const { ACCESS_TOKEN, REFRESH_TOKEN } = require('./utils/constants');
const jwt=require('jsonwebtoken');
const { generateAccessToken } = require('./utils/generateToken');
const { VerifyAuth }=require('./middlewares/verifyauth');
const { errorHandler } = require('./middlewares/errorhandler');
const app = express();
const PORT = 8009;

 
app.use(cors({ origin: "http://localhost:5173", credentials: true }))
app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev')); 


const MongoDb="mongodb://127.0.0.1:27017/JWT-Ath-BackEnd";
main().catch((err)=>{
    console.log(err);
})
async function main(){
    await mongoose.connect(MongoDb)
    console.log("Db connected");
};


app.use(errorHandler);




app.post('/signup', async(req,res)=>{

    const { name,email, password } = req.body;
    
    try {
      if (!name || !email ||  !password) {
        throw {
          status: 400,
          message: "All fields are required",
        };
      };

      const existingUser = await User.findOne({ email });

      if (existingUser) {
          return res.status(400).json({ message: 'Email is already in use' });
      }

      const salt= await bcrypt.genSalt(10)
      const hashpass=await bcrypt.hash(password, salt)

       const adminEmails = process.env.ADMIN_EMAILS.split(',');
       const userRole = adminEmails.includes(email) ? 'admin' : 'user';


      await User.create({name,email, password: hashpass ,role: userRole });
      res.status(201).json({ message: "User created successfully" });

    } catch (error) {
      console.error(error);
    }
});



app.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
  
    try {
      const user = await User.findOne({ email });

      if (!user || !await bcrypt.compare(password, user.password)) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }
  
     
       const accessToken = generateAccessToken(user); 
       res.cookie(ACCESS_TOKEN, accessToken, {
        path: "/",
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 3600),   // 1hr
        sameSite: "none",
        secure: true,
      });

      const refreshToken = jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: "1d" });

      res.cookie(REFRESH_TOKEN, refreshToken, {
        path: "/",
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 60 * 60),  // 1 day
        sameSite: "none",
        secure: true,
      });
  
      res.status(200).json({
        message: "User logged in successfully",
        user,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });




  app.get('/regenarates-Token',async(req,res)=>{

    const { refreshToken } = req.cookies;

    console.log(refreshToken);
    
    
 try {
     if(!refreshToken){
      return res.status(403).json({ message: 'there is no refreshToken in cookies ,please verify' }); 
     };

         jwt.verify(refreshToken,process.env.JWT_SECRET , (err, user) => {

         if(err){
         return res.status(403).json({ message: 'jwt Verification failed!' }); 
         };

         const accessToken= generateAccessToken(user);

         res.cookie(ACCESS_TOKEN, accessToken, {
            path: "/",
            httpOnly: true,
            expires: new Date(Date.now() + 1000 * 3600),   // 1hr
            sameSite: "none",
            secure: true,
          });

          res.status(200).json({ message: "Token refreshed successfully" });
    
     });
       }catch(error){
         throw Error(error)
      }

  });


  app.post('/logout',async(req,res, next)=>{

    try {
        res.clearCookie(ACCESS_TOKEN, { path: "/" });
        res.clearCookie(REFRESH_TOKEN, { path: "/" });
    
        res.status(200).json({
          message: "User logged out successfully",
        });
      } catch (error) {
        next(error);
      }

  })
  

  app.get('/user',VerifyAuth,async(req,res)=> {

    const {user}=req.user;
     if(user){
      const allUsers = await User.find({ _id: { $ne: user._id } }).select('-password');
       return  res.json({
        success:true,
        message:"all set",
        user,
        allUsers
    });
     }else{
       return res.status(404).json({
         success:false,
         message:"cant fetch user..."
       })
     }
      
  });



app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
