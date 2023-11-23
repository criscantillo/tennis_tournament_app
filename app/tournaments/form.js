"use client"
import tournamentService from '../app_services/tournamentService';
import { redirect } from 'next/navigation';
import { useState } from 'react';
import { useEffect } from 'react';

export default function TournamentForm(props){
    const [isCreated, setIsCreated] = useState(false);
    const [isModified, setIsModified] = useState(false);
    const { formTitle } = props;
    const { tournament } = props;
    const { formType } = props;

    const [tournamentData, setTournamentData] = useState(tournament);

    useEffect(() => {
        if(isCreated || isModified){
            redirect('/tournaments');
        }
      }, [isCreated, isModified]);

    const handleSubmit = (e) =>{
        if(tournamentData._id){
            tournamentService.modifyTournament(tournamentData)
            .then(data =>{
                console.log(data);
                setIsModified(true);
            });
        }else{
            tournamentService.createTournament(tournamentData)
            .then(data =>{
                console.log(data);
                setIsCreated(true);
            });
        }
    }

    const handleChageData = (e) =>{
        const id = e.target.id;
        let value = e.target.value;
        if(e.target.type == 'number')
            value = parseInt(value);

        let newTournamentData = {...tournamentData};
        newTournamentData[id] = value;

        setTournamentData(newTournamentData);
    }

    return (
        <div>
            <h2 className="items-center mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                {formTitle}
            </h2>

            <form 
                className="p-5 m-5" >
                <div className="flex flex-wrap mb-3">
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
                        <input 
                            value={tournamentData.name}
                            onChange={handleChageData}
                            type="text" id="name" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            required />
                    </div>
                    <div className="pl-6">
                        <label htmlFor="place" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Lugar</label>
                        <input 
                            value={tournamentData.place}
                            onChange={handleChageData}
                            type="text" id="place" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                </div>

                <div className="flex flex-wrap mb-3">
                    <div>
                        <label htmlFor="max_players" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Número máximo de jugadores</label>
                        <input 
                            value={tournamentData.max_players}
                            onChange={handleChageData}
                            type="number" id="max_players" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className="pl-6">
                        <label htmlFor="inscription_price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Precio Inscripción</label>
                        <input 
                            value={tournamentData.inscription_price}
                            onChange={handleChageData}
                            type="number" id="inscription_price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                </div>

                <div className="flex flex-wrap">
                    <label htmlFor="start_at" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha de inicio</label>
                    <input 
                            value={tournamentData.start_at.substring(0,10)}
                            onChange={handleChageData}
                            type="date" id="start_at" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                
                <div className="flex flex-wrap">
                    <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descripción</label>
                    <textarea 
                        value={tournamentData.description}
                        onChange={handleChageData}
                        id="description" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ></textarea>
                </div>
                
                <div className="flex flex-wrap flex-row mt-5">
                    <button 
                        onClick={handleSubmit}
                        type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{formType}</button>
                </div>
            </form>
        </div>
    )
}