const express= require('express');
const axios = require('axios');
const cors = require('cors');


const app = express();
app.use(express.json()); 
app.use(cors());


app.post('/events', (req, res) => {

    const { type, data } = req.body;
    if (type === 'CommentCreated') { 
        const status = data.content.includes('gay') ? 'rejected' : 'approved';
        
        axios.post('http://localhost:4005/events', {
            type: 'CommentModerated',
            data: {
                id: data.id,
                postId: data.postId,
                status: status,
                content: data.content
            }
        })
    }

    
    
});
 
app.listen(4003, () => { 
    console.log('Listening on 4003');
});