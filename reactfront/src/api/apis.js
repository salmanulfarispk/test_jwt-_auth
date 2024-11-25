import axios from "axios";
import { replace } from "react-router-dom";
import { toast } from "sonner";



const baseURL= import.meta.env.VITE_BASE_URL || "http://localhost:8009"



const customAxios=axios.create({
    baseURL: baseURL,
    withCredentials:true,
});

customAxios.interceptors.response.use(
    (response)=> {
        return response;
    },

    async function(error) {
        const originalRequest = error.config;

        if (error.response.status === 403 && !originalRequest._retry) {
            originalRequest._retry = true;
         
            try {
                await generateRefreshToken();
                return customAxios(originalRequest);

              } catch (refreshError) {
                console.error("Token refresh failed:", refreshError);
              }
        }

        return Promise.reject(error)
    }
);


export const generateRefreshToken = async () => {
    try {
      await customAxios.get(`/regenarates-Token`);
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.error?.message);
    }
  };


  export const signUp= async(userInputs,setUserInputs,navigate) =>{
    
    try {
        const response= await customAxios.post('/signup',{
            name: userInputs.username,
            email: userInputs.email,
            password: userInputs.password,
        });

        if(response.status === 201){
            navigate('/login')
        }
        
    } catch (error) {
        console.error(error);
    }finally{
      setUserInputs({username:'',email:'',password:''})
    
    }
  };


  export const signIn= async(userInputs,setUserInputs,navigate)=>{
     
    try {
        const response=await customAxios.post('/login',{
            email:userInputs.email,
            password: userInputs.password,
        });

        if (response.status === 200 && response.data.user.role === 'admin') {
            navigate('/dashboard',{replace: true});
            // window.location.replace('/dashboard');
        } else if (response.status === 200 && response.data.user.role === 'user') {
            navigate('/',{replace:true});
            // window.location.replace('/');
        }
        
        
    } catch (error) {
      console.error(error);
    }finally{
      setUserInputs({email:'',password:''})
    }

  };

  export const Logout =async(navigate)=>{

    const response=await customAxios.post('/logout')
    if(response.status === 200){
        navigate('/login',{replace: true})
    }
  }

  export const IsUser =async(setAuthState)=>{

    const response=await customAxios.get('/user')
 
    if(response.data.success === true){
      setAuthState({
        isAuthenticated: true,
        user: response.data.user,
        loading:false
      })
    }
    

  }