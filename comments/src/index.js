const express = require('express');
const { randomBytes } = require('crypto');
const cors = require('cors');

const app = express();
app.use(express.json());

const commentsByPostId = {};

app.get('/posts/:id/comment', (req, res) => { 
   res.status(200).send(commentsByPostId[req.params.id] || []);
});

app.post('/posts/:id/comment', (req, res) => { 
    const commentId = randomBytes(8).toString('hex');
    const { content } = req.body; 
    const comments = commentsByPostId[req.params.id] || [];
    comments.push({ id: commentId, content });
    commentsByPostId[req.params.id] = comments;
    res.status(201).send(comments);
    
});

app.listen(4001, () => { 
    console.log('Listening on 4001');
})