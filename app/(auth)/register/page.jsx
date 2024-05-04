import Register from '@/components/userform/Register'

const page = () => {
  return (
       <main className='flex h-full flex-col items-center justify-between p-24'>
        <h1 className='text-xl lg:text-4xl font-bold'>Create an Account</h1>
        <Register/>
        <p className='py-4'>Already have an account? <a className='underline' href='/login'>Login</a></p>
    </main>
  )
}

export default page