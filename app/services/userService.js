const UserDB = require('../models/UserDB');

module.exports = {
    async getInfoUser(uid){
        let collection = await UserDB.getCollection();
        return await collection.findOne({uid});
    },
    
    async getListUser(){
        let collection = await UserDB.getCollection();
        return await collection.find({}).toArray();
    },
    
    async saveUser(userData){
        try{
            const user = await this.getInfoUser(userData.uid);
            if(user)
                return Promise.resolve(user);
        }catch(err){
            console.log(err);
        }

        let collection = await UserDB.getCollection();
        const result = await collection.insertOne(userData);
        userData._id = result.insertedId

        return userData;
    },
    
    async updateUser(userData){
        try{
            let uid = userData.uid;
            let collection = await UserDB.getCollection();
            await collection.replaceOne({uid}, userData);

            const user = await this.getInfoUser(uid);
            return user;
        }catch(err){
            console.log(err);
        }
    }
}