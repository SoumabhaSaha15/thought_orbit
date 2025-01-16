import { Schema, model } from "mongoose";
import { z } from "zod";
export const User = z.strictObject({
  name: z.string({ required_error: 'name is required' }).min(4, 'name must have 4 or more chars').max(30, 'name must be under 30 chars').regex(/^[a-zA-Z0-9]+(?: [a-zA-Z0-9]+)*$/, 'invalid user name'),
  email: z.string({ required_error: 'email is required' }).email('invalid email'),
  password: z.string({ required_error: 'password is required' }).length(8, 'password should have 8 chars').regex(/^[\x21-\x7E]+$/, 'invalid password'),
  avatar: z.instanceof(Buffer).optional()
});
export type UserType = z.infer<typeof User>;
export const UserSchema = new Schema<UserType>({
  name: {
    type: String,
    required: true,
    maxlength: 30,
    minlength: 4,
    validator: {
      validate: (value: string) => User.pick({ name: true }).safeParse({ name: value }).success,
      message: (props: { value: string; }) => `${props.value} is not a valid user name.`
    }
  },
  email: {
    type: String,
    required: true,
    validator: {
      validate: (value: string) => User.pick({ email: true }).safeParse({ email: value }).success,
      message: (props: { value: string; }) => `${props.value} is not a valid user name.`
    }
  },
  password: {
    type: String,
    required: true,
    maxlength: 20,
    minlength: 20,
    valodator: {
      validate: (value: string) => User.pick({ email: true }).safeParse({ email: value }).success,
      message: (props: { value: string; }) => `${props.value} is not a valid user name.`
    }
  },
  avatar: {
    type: Buffer,
    required: [true, 'profile pic is required.']
  }
});
export const UserModel = model<UserType>('user_model', UserSchema);