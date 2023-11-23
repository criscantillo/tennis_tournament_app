const {ObjectId} = require('mongodb'); 
const TournamentDB = require('../models/TournamentDB');

module.exports = {
    async getTournament(id){
        let collection = await TournamentDB.getCollection();
        return await collection.findOne({_id: new ObjectId(id) });
    },
    
    async getListTournaments(){
        let collection = await TournamentDB.getCollection();
        return await collection.find({}).toArray();
    },
    
    async saveTournament(tournamentData){
        let collection = await TournamentDB.getCollection();
        tournamentData.start_at = new Date(tournamentData.start_at);

        const result = await collection.insertOne(tournamentData);
        tournamentData._id = result.insertedId

        return tournamentData;
    },
    
    async updateTournament(tournamentData){
        try{
            let _id = new ObjectId(tournamentData._id);
            let collection = await TournamentDB.getCollection();
            delete tournamentData['_id'];
            tournamentData.start_at = new Date(tournamentData.start_at);

            await collection
                    .replaceOne({_id }, tournamentData);

            const tournament = await this.getTournament(_id);
            return tournament;
        }catch(err){
            console.log(err);
        }
    },

    async deleteTournament(id){
        try{
            const tournament = await this.getTournament(id);
            let collection = await TournamentDB.getCollection();
            await collection.deleteOne({_id: new ObjectId(id) });

            return tournament;
        }catch(err){
            console.log(err);
        }
    }
}