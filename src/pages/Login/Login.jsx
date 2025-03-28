import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Login({ email, setEmail, password, setPassword }) {
    return (
        <div className='flex justify-evenly items-center h-screen max-md:flex-col max-md:text-center'>
            <section className='max-w-xl'>
                <h1 className='text-primary-blue text-logo-size font-bold'>Boombook</h1>
                <p className='text-info-size'>Facebook helps you stay connected and stay in touch with your friends.</p>
            </section>
            <section className='p-5 w-form-size bg-white shadow-lg rounded-xl'>
                <form className='text-center text-lg'>
                    <div className='flex flex-wrap gap-4'>
                        <input
                            type="text"
                            value={email}
                            className='input'
                            placeholder='Email'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="text"
                            value={password}
                            className='input'
                            placeholder='Password'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className='m-4 flex flex-wrap justify-center gap-4'>
                        <button className='btn w-btn-size bg-primary-blue'>Sign Up</button>
                        <NavLink to="/create_account">
                            <button className='btn bg-primary-green'>Create new account</button>
                        </NavLink>
                    </div>
                </form>
            </section>
        </div>
    )
}
