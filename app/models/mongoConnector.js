const { MongoClient } = require('mongodb');

module.exports = {
    getClient(){
        const client = new MongoClient(process.env.MONGO_URL);
        return client;
    }, 

    async getDatabase(){
        const client = this.getClient();

        try{
            await client.connect();
            const db = client.db(process.env.DATABASE_NAME);

            return db;
        }catch(err){
            console.error(err);
        }

        return null;
    }
}