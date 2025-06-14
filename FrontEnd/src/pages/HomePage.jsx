import React from 'react'
import UrlForm from '../component/UrlForm.jsx'

const HomePage = () => {
    
    return (
        <div>
            <div className="min-h-screen flex flex-col items-center justify-center bg-pink-50">
                <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                    <h1 className="text-2xl font-bold mb-4 text-pink-600">URL Shortener</h1>
                     <UrlForm/>
                </div>
                
            </div>

           
        </div>
    )
}

export default HomePage