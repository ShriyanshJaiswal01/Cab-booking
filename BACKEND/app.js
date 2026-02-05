const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const connectToDb = require('./db/db');
const userRoute = require('./routes/user.route');
const cookieParser = require('cookie-parser');
const captainRoutes = require('./routes/captain.route');
const mapsRoutes = require('./routes/maps.route');
const rideRoutes = require('./routes/ride.route');

connectToDb();
                  
// app.use(cors());
app.use(cors({
  origin: "https://cab-booking-1-9tva.onrender.com",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.get('/',(req,res)=>{ 
  res.send('hello world');
});

app.get('/api', (req, res) => {
  res.json({ status: 'API working' });
});

app.use('/user',userRoute);
app.use('/captain',captainRoutes);
app.use('/maps',mapsRoutes);
app.use('/rides',rideRoutes);

module.exports = app;