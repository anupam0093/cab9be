import { connect } from "mongoose";

export const databaseConnect = async () => {
  await connect(`${process.env.MONGODB_URI}`)
    .then(() => {
      console.log("Connected to database");
    })
    .catch((err: any) => {
      console.log("Error to connecting to database", err);
    });
};
