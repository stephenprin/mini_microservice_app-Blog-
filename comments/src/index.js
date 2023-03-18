const express = require("express");
const { randomBytes } = require("crypto");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors());

const commentsByPostId = {};

app.get("/posts/:id/comment", (req, res) => {
  res.status(200).send(commentsByPostId[req.params.id] || []);
});

app.post("/posts/:id/comment", async (req, res) => {
  const commentId = randomBytes(8).toString("hex");
  const { content } = req.body;
  const comments = commentsByPostId[req.params.id] || [];
  comments.push({ id: commentId, content, status: "pending"});
  commentsByPostId[req.params.id] = comments;
  res.status(201).send(comments);

  await axios
    .post("http://localhost:4005/events", {
      type: "CommentCreated",
      data: {
        id: commentId,
        content,
        postId: req.params.id,
        status: "pending",
      },
    })
    .catch((err) => {
      console.log(err.message);
    });
});

app.post("/events", async(req, res) => {
  console.log("Received Event", req.body.type);
  const { type, data } = req.body;
  if (type === "CommentModerated") { 
    const { postId, id, status } = data;
    const comments = commentsByPostId[postId];
    const comment = comments.find((comment) => { 
      return comment.id === id;
    });
    comment.status = status;
  }
  await axios.post("http://localhost:4005/events", {
    type: "CommentUpdated",
    data: {
      id: data.id,
      postId: data.postId,
      status: data.status,
      content: data.content,
      
    }
  })
  res.send({});
});

app.listen(4001, () => {
  console.log("Listening on 4001");
});
