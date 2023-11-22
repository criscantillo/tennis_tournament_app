const mongo = require('./mongoConnector');

const modelName = 'users';
let db = null;

module.exports = {
    async getCollection(){
        if(db == null)
            db = await mongo.getDatabase();

        return db.collection(modelName);
    }
}