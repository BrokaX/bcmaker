
'use client'
import React from 'react'
import Login from '@/components/userform/Login'
const page = () => {
  return (
    <main className='flex h-full flex-col items-center justify-between p-24'>
      <h1 className='text-xl lg:text-4xl font-bold'>Login to your Account</h1>
      <Login />
      <p className='py-4'>
        Don&apos;t have an account yet?{' '}
        <a className='underline' href='/register'>
          Create one
        </a>
      </p>
    </main>
  );
}

export default page