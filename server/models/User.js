import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: 'string',
            required: true,
            min: 2,
            max: 100,
        },
        email:{
            type: 'string',
            required: true,
            min: 50,
            max: 100,
            unique: true
        },
        password:{
            type: 'string',
            required: true,
            min: 5,
        },
        city: String,
        state: String,
        country: String,
        occupation: String,
        phoneNumber: String,
        transactions: Array,
        role: {
           type: 'string',
           enum: ["user", "admin", "superadmin"],
           default: "admin"
        },
    },
    {timestamps: true}
);

const User = mongoose.model("User", UserSchema);
export default User;