import React from 'react'

export default function Register() {
    return (
        <div className='p-5'>
            <h1 className='text-primary-blue text-logo-size font-bold text-center'>Boombook</h1>
            <div className='flex flex-wrap justify-center p-2 text-center'>
                <section className='shadow-2xl rounded-2xl'>
                    <article>
                        <h2 className='text-2xl font-bold'>Create new Account</h2>
                        <span className='text-gray-600'>It's quick and easy.</span>
                    </article>
                    <form className='grid grid-cols-2 gap-4 p-6'>
                        <input type="text" className='input' placeholder='Name' />
                        <input type="text" className='input' placeholder='LastName' />
                        <input type="text" className='input col-span-2' placeholder="Email" />
                        <input type="text" className='input col-span-2' placeholder='Password' />

                        <div className='flex justify-center col-span-2 p-4'>
                            <button className='btn bg-primary-green'>Register</button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}
