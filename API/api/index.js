const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/users',require('./src/api/user-routes'));

app.use('/api/auth',require('./src/api/auth-routes'));
app.use('/api/properties',require('./src/api/property-routes'));
app.use('/api/bookings',require('./src/api/booking-routes'));


// app.use('/api/provider',require('./src/api/property-routes'));
// app.use('/api/listing',require('./src/api/listing-routes'));
// app.use('/api/booking',require('./src/api/booking-routes'));



 
const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));