import React, { useEffect } from 'react'
import useAuth from '../hook/useAuth'
import { useNavigate } from 'react-router-dom'
import { Logout } from '../api/apis'

const Home = () => {
 
  const navigate=useNavigate()
  const {isAuthenticated,user}=useAuth()

  
  
  

  return (
    <div>
       <div className='grid gap-6 md:grid-cols-2 w-full'>
          
         <div className='px-3'>
         <a
  href="#"
  className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
>
  <span
    className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
  ></span>

  <div className="sm:flex sm:justify-between sm:gap-4">
    <div>
      <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
        Building a SaaS product as a software developer {user?.email}
      </h3>

      <p className="mt-1 text-xs font-medium text-gray-600">{user?.name}</p>
    </div>

    <div className="hidden sm:block sm:shrink-0">
      <img
        alt=""
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
        className="size-16 rounded-lg object-cover shadow-sm"
      />
    </div>
  </div>

  <div className="mt-4">
    <p className="text-pretty text-sm text-gray-500">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum provident a, ipsa
      maiores deleniti consectetur nobis et eaque.
    </p>
  </div>

  <dl className="mt-6 flex gap-4 sm:gap-6">
    <div className="flex flex-col-reverse">
      <dt className="text-sm font-medium text-gray-600">joined</dt>
      <dd className="text-xs text-gray-500">{user?.createdAt}</dd>
    </div>

    <div className="flex flex-col-reverse">
      <dt className="text-sm font-medium text-gray-600">Reading time</dt>
      <dd className="text-xs text-gray-500">{user?.updatedAt}</dd>
    </div>
  </dl>
</a>   
  </div>




{/**rightside */}

         <div className='px-1'>
         <article className="rounded-xl border-2 border-gray-100 bg-white">
   <div className="flex items-start gap-4 p-2 sm:p-4 lg:p-5">
    <a href="#" className="block shrink-0">
      <img
        alt=""
        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        className="size-14 rounded-lg object-cover"
      />
    </a>

    <div>
      <h3 className="font-medium sm:text-lg">
        <a href="#" className="hover:underline"> Question about Livewire Rendering and Alpine JS </a>
      </h3>

      <p className="line-clamp-2 text-sm text-gray-700">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, accusantium temporibus
        iure delectus ut totam natus nesciunt ex? Ducimus, enim.
      </p>

      <div className="mt-2 sm:flex sm:items-center sm:gap-2">
        <div className="flex items-center gap-1 text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
            />
          </svg>

          <p className="text-xs">createdAt</p>
        </div>

        <span className="hidden sm:block" aria-hidden="true">&middot;</span>

        <p className="hidden sm:block sm:text-xs sm:text-gray-500">
           last logined
          <a href="#" className="font-medium underline hover:text-gray-700"> time </a>
        </p>
      </div>
    </div>
  </div>
</article>
         </div>
      

       </div>
        
    </div>
  )
}

export default Home