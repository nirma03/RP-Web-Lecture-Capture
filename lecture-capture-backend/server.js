const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

//MongoDB Connection
const ATLAS_URI = 'mongodb+srv://dbuser:12345678ridmi@cluster0.urwts.mongodb.net/video_recordings_db?retryWrites=true&w=majority'
mongoose.connect(ATLAS_URI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
).then(
    () => {
        console.log("Database is connected");
    },
    (err) => {
        console.log("Can not connect to the database" + err);
    }
);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});


//Routes
const videoRecordingsRouter = require("./routes/videoRecording.routes");
const userRouter = require("./routes/user.routes");
// const bookingRouter= require("./routes/appointmentBooking.routes")
//
app.use("/users", userRouter);
// app.use("/products", productRouter);
// app.use("/bookings", bookingRouter);