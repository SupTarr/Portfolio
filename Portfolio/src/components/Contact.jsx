import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/c057ab92-3d53-4594-b7ff-a9396b935015" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8 text-xl'>
                <p className='text-4xl font-bold inline border-b-4 border-red-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form below or sent an email to air.veerakit@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="8" placeholder='Message'></textarea>
            <button className='text-white rounded-lg border-2 hover:bg-red-600 duration-200 hover:border-red-600 active:bg-white px-4 py-3 my-8 mx-auto flex items-center'>Email me</button>
        </form>
    </div>
  )
}

export default Contact