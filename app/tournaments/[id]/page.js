"use client"

import tournamentService from '../../app_services/tournamentService';
import TournamentForm from '../form'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import { useEffect } from 'react'

export default function ModTournament(){
    const [isLoadTournament, setIsLoadTournament] = useState(false);
    const [tournament, setTournamentData] = useState({});

    const params = useParams();
    const {id} = params;

    useEffect(() => {
        tournamentService.getTournament(id)
        .then(data => {
            console.log(data);
            setTournamentData(data);
            setIsLoadTournament(true);
        });
      }, []);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-10">
            { isLoadTournament 
                ?
                <TournamentForm
                    formTitle="Modificar Torneo"
                    formType="Modificar"
                    tournament={tournament}
                />
                :
                <div>Cargando datos ...</div>
            }
        </main>
    )
}