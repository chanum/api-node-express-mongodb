import mongoose from "mongoose";

mongoose.connect("mongodb://localhost/companydb")
  .then((db) => console.log("DB is connected"))
  .catch((err) => console.log(err));

