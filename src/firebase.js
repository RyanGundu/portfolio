import { initializeApp } from "firebase";
const env = require('dotenv');


env.config();

const app = initializeApp({
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: "portfolio-4f117",
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID
})

export const db = app.firestore();

export async function pushMessage (data) {
    try {
        await db.collection('message').add(data)
        return true
    } catch {
        return false
    }
}