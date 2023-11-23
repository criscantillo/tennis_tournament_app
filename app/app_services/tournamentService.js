const endpoint = '/api/tournaments';

module.exports = {
    async getTournament(id){
        let response = await fetch(`${endpoint}/${id}`);
        return response.json();
    },

    async getListTournament(){
        let response = await fetch(endpoint);
        return response.json();
    },

    async createTournament(tournamentData){
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(tournamentData)
        };

        let response = await fetch(endpoint, requestOptions);
        return response.json();
    },

    async modifyTournament(tournamentData){
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(tournamentData)
        };

        let response = await fetch(endpoint, requestOptions);
        return response.json();
    },

    async deleteTournament(id){
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        };

        let response = await fetch(`${endpoint}/${id}`, requestOptions);
        return response.json();
    }
}