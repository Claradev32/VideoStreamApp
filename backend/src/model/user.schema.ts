import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type UserDocument = User & Document;

@Schema()
export class User {

    @Prop({required:true})
    fullname: string;

    @Prop({required:true, unique:true, lowercase:true})
    email: string;

    @Prop({required:true})
    password: string

    @Prop({required:true, default: Date.now() })
    createdDate: Date
}

export const UserSchema = SchemaFactory.createForClass(User)