import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()
  return (
    <>
      <div className='flex flex-col min-h-[700px] justify-center items-center'>
        <h1 className='text-4xl'>Ops! An Error Ocurred!</h1>
        <br />
        {error && (
          <div className='flex flex-col justify-center items-center'>
            <p className='font-semibold text-4xl'>{error.status}</p>
            <p className='text-red-500 font-semibold text-3xl'>{error.statusText || error.message}</p>
          </div>
        )}
      </div>
    </>
  )
}

export default ErrorPage