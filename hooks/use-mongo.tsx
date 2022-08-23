import {MongoClient} from "mongodb";

export const useMongo = async (collectionName: string) => {
    const client = await MongoClient.connect(process.env.MONGO_URL!);
    const db = client.db();

    const collection = db.collection(collectionName);

    const closeConnection = async () => {
        await client.close();
    }

    return {
        collection,
        closeConnection
    }
}