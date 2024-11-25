import { useState } from 'react'
import { useNavigate} from 'react-router-dom'
import { signUp } from '../api/apis';


const SignUp = () => {

  const navigate=useNavigate()

const [userInputs,setUserInputs]=useState({
   username:'',
   email:'',
   password:''
});

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setUserInputs({ ...userInputs, [name]: value });
};

const handleSignUp= async(e)=>{
   e.preventDefault();

   await signUp(userInputs,setUserInputs,navigate)
}

 
  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
   <div className="mx-auto max-w-lg">
    <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">Get started today</h1>

    <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt dolores deleniti
      inventore quaerat mollitia?
    </p>

    <form onSubmit={handleSignUp} className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
      <p className="text-center text-lg font-medium">create new account</p>
         

      <div>
        <label htmlFor="username" className="sr-only">username</label>

        <div className="relative">
          <input
            type="text"
             name='username'
             value={userInputs.username}
             onChange={handleInputChange}
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter username"
          />
        </div>
      </div>


      <div>
        <label htmlFor="email" className="sr-only">Email</label>

        <div className="relative">
          <input
            type="email"
            name='email'
            value={userInputs.email}
            onChange={handleInputChange}
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter email"
          />

        </div>
      </div>

      <div>
        <label htmlFor="password" className="sr-only">Password</label>

        <div className="relative">
          <input
            type="password"
            name='password'
            value={userInputs.password}
            onChange={handleInputChange}
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter password"
          />

        </div>
      </div>

      <button
        type="submit"
        className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
      >
        Create account
      </button>

    
    </form>
  </div>
</div>
    </div>
  )
}

export default SignUp