import React from 'react'

const Dashboard = () => {
  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        
     <div className="mx-auto max-w-3xl text-center">
    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Trusted by eCommerce Businesses</h2>

    <p className="mt-4 text-gray-500 sm:text-xl">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores laborum labore
      provident impedit esse recusandae facere libero harum sequi.
    </p>
  </div>

  <dl className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
    <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
      <dt className="order-last text-lg font-medium text-gray-500">Total Sales</dt>

      <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">$4.8m</dd>
    </div>

    <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
      <dt className="order-last text-lg font-medium text-gray-500">Official Addons</dt>

      <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">24</dd>
    </div>

    <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
      <dt className="order-last text-lg font-medium text-gray-500">Total Addons</dt>

      <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">86</dd>
    </div>

    <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
      <dt className="order-last text-lg font-medium text-gray-500">Downloads</dt>

      <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">86k</dd>
    </div>
  </dl>
</div>



<div className='px-8'>

<div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
  <dl className=" divide-gray-100 text-sm">
    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900">Title</dt>
      <dd className="text-gray-700 sm:col-span-2">Mr</dd>
    </div>

    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900">Name</dt>
      <dd className="text-gray-700 sm:col-span-2">John Frusciante</dd>
    </div>

    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900">Occupation</dt>
      <dd className="text-gray-700 sm:col-span-2">Guitarist</dd>
    </div>

    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900">Salary</dt>
      <dd className="text-gray-700 sm:col-span-2">$1,000,000+</dd>
    </div>

    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900">Bio</dt>
      <dd className="text-gray-700 sm:col-span-2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et facilis debitis explicabo
        doloremque impedit nesciunt dolorem facere, dolor quasi veritatis quia fugit aperiam
        aspernatur neque molestiae labore aliquam soluta architecto?
      </dd>
    </div>
  </dl>
</div>
</div>

    </div>
  )
}

export default Dashboard