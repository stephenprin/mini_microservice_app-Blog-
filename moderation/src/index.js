const express= require('express');
const axios = require('axios');
const cors = require('cors');


const app = express();
app.use(express.json()); 


app.post('/events', (req, res) => {
    
});
 
app.listen(4003, () => { 
    console.log('Listening on 4003');
});