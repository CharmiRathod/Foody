import mongoose from "mongoose";

export interface userDocument  extends mongoose.Document {

  email: string;
  name: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new mongoose.Schema ({

    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },

});



const User = mongoose.model<userDocument>("User", userSchema);



export default User;





