const jwt = require('jsonwebtoken');


const VerifyAuth = (req, res, next) => {
  const token = req.cookies.accessToken;
  
  

  try {
    if (!token) {
      return res.status(403).json({ message: 'User not authorized' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      
      if (err) {
        return res.status(403).json({ message: 'Verification failed' });
      }
      req.user = user;      
      next();
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = { VerifyAuth };
