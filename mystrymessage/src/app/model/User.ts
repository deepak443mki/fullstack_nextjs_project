import mongoose, {Schema, Document} from "mongoose";
import { Content } from "next/font/google";

export interface Message extends Document{
    Content: string;
    createdAt: Date;
}

const MessageSchema: Schema<> = new Schema({

})