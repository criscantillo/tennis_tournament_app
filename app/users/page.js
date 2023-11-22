"use client"
import Image from 'next/image'
import { useState } from 'react';
import { useEffect } from 'react';

export default function Users(){
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        fetch("/api/users")
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setUserData(data);
          });
      }, []);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-10">
            <div className="relative overflow-x-auto h-full m-8">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Avatar
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Nombre
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Correo
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Opts
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {userData.map(user =>{
                            return (
                                <tr key={user.uid}
                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        { user.avatar == '' 
                                            ? <Image src="/users.svg" alt="avatar" width="60" height="60" />
                                            : <Image 
                                                unoptimized src={user.avatar} 
                                                alt="avatar" width="60" height="60" />
                                        }
                                    </th>
                                    <td className="px-6 py-4">
                                        {user.names}
                                    </td>
                                    <td className="px-6 py-4">
                                        {user.email}
                                    </td>
                                    <td className="px-6 py-4">
                                        <button 
                                            type="button" 
                                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                                Modificar
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </main>
    )
}