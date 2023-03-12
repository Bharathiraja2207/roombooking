import express from "express";
import { MongoClient } from "mongodb";
import * as dotenv from 'dotenv' 
dotenv.config()

const app = express();

const PORT = (process.env.PORT);
// const mongo_url = 'mongodb://127.0.0.1';
const mongo_url =(process.env.mongo_url)
export const client = new MongoClient(mongo_url);
await client.connect();
  console.log('mongo is connected!!');

  app.use(express.json())

app.get("/", function (request, response) {
  response.send("🙋‍♂️welcome home it's bharathi raja.A it's my home page");
});

app.get("/createroom",async function (request, response) {
  const room_create= await client
  .db("roombooking")
  .collection("createroom")
  .find({})
  .toArray();
    response.send(room_create);
    });

    app.post("/post_create",async function (request, response) {
      const data=request.body;
      console.log(data);
       const result= await client
          .db("roombooking")
         .collection("createroom")
          .insertMany(data)
      response.send(result);
    });

    
app.get("/bookingroom",async function (request, response) {
  const room_booking= await client
  .db("roombooking")
  .collection("bookingroom")
  .find({})
  .toArray();
    response.send(room_booking);
    });
   
    app.post("/post_booking",async function (request, response) {
      const data=request.body;
      console.log(data);
       const result= await client
          .db("roombooking")
         .collection("bookingroom")
          .insertMany(data)
      response.send(result);
    });

    app.get("/room_booked_data",async function (request, response) {
      const room_booked_data= await client
      .db("roombooking")
      .collection("room_booked_data")
      .find({})
      .toArray();
        response.send(room_booked_data);
        });

        app.post("/post_roombooked_data",async function (request, response) {
          const data=request.body;
          console.log(data);
           const result= await client
              .db("roombooking")
             .collection("room_booked_data")
              .insertMany(data)
          response.send(result);
        });
        
    app.get("/customer_booked_data",async function (request, response) {
      const customer_booked_data= await client
      .db("roombooking")
      .collection("customer_booked_data")
      .find({})
      .toArray();
        response.send(customer_booked_data);
        });
    
        app.post("/post_customerbooked_data",async function (request, response) {
          const data=request.body;
          console.log(data);
           const result= await client
              .db("roombooking")
             .collection("customer_booked_data")
              .insertMany(data)
          response.send(result);
        });

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));

