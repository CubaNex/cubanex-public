import mongoose, { Schema, model, Model } from "mongoose";

interface IEmail {
  email: string;
  createdAt: Date;
}

const emailSchema = new Schema<IEmail>({
  email: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Email: Model<IEmail> = mongoose.models.Email || model<IEmail>("Email", emailSchema);

export default Email;
