import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const db = process.env.DB_URL;

export function mongoDbConnection(){
    mongoose.connect(db).then(()=>{
        console.log('Connected to Mongo Successfully')
    }).catch((error)=>{
        console.log('Something Went Wrong',error);
        
        
    })
}