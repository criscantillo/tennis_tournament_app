import TournamentForm from '../form';

export default function NewTournament(){
    const tournament = {
        'name':'',
        'description':'',
        'max_players':12,
        'start_at': '',
        'place':'',
        'inscription_price':0
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-10">
            <TournamentForm
                formTitle="Nuevo Torneo"
                formType="Crear"
                tournament={tournament}
             />
        </main>
    )
}