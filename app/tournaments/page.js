"use client"
import tournamentService from '../app_services/tournamentService';
import { useState } from 'react';
import { useEffect } from 'react';
import Link from "next/link";

export default function Tournaments(){
    const [listTournament, setTournamentData] = useState([]);

    useEffect(() => {
        tournamentService.getListTournament()
        .then(data => {
            setTournamentData(data);
        });
      }, []);

    const deleteTorunament = (id)=>{
        tournamentService.deleteTournament(id)
        .then(data => {
            console.log(data);
            const newTournamentList = listTournament.filter(t => t._id != id);
            setTournamentData(newTournamentList);
        });
    }
    
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-10">
            <Link
                  href="/tournaments/new"
                >
                <div 
                    className = "group fixed bottom-0 right-0 p-2  flex items-end justify-end w-24 h-24 ">
                    <div className = "text-white shadow-xl flex items-center justify-center p-3 rounded-full z-50 absolute  bg-green-700">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 group-hover:rotate-90 transition  transition-all duration-[0.6s]">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12H18M12 6V18" stroke="#f0efef" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g>
                        </svg>
                    </div>
                </div>
            </Link>

            <div className="relative overflow-x-auto h-full m-8">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Nombre
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Descripción
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Fecha de inicio
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Máximo de jugadores
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Lugar
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Precio Inscripción
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Opts
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {listTournament.map(tournament =>{
                            return (
                                <tr key={tournament._id}
                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {tournament.name}
                                    </th>
                                    <td className="px-6 py-4">
                                        {tournament.description}
                                    </td>
                                    <td className="px-6 py-4">
                                        {tournament.start_at.substring(0,10)}
                                    </td>
                                    <td className="px-6 py-4">
                                        {tournament.max_players}
                                    </td>
                                    <td className="px-6 py-4">
                                        {tournament.place}
                                    </td>
                                    <td className="px-6 py-4">
                                        {tournament.inscription_price}
                                    </td>
                                    <td className="px-6 py-4">
                                        <Link
                                            href={`tournaments/${tournament._id}`}
                                            >
                                            <button 
                                                type="button" 
                                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                                    Modificar
                                            </button>
                                        </Link>

                                        <button 
                                            onClick={()=>{ deleteTorunament(tournament._id) }}
                                            type="button" 
                                            className="text-white bg-orange-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                                Eliminar
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