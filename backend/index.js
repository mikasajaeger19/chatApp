const express  = require('express');
// express runs http server
const cors = require('cors');
// cors to call this server from another origin
const axios = require('axios');
const app =  express();
app.use(express.json());
app.use(cors({origin: true}));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
    //getting user name from request body if it exists otherwise create a new user
    try {
        const r = await axios.put ('https://api.chatengine.io/users/',
        {username : username, secret : username, first_name : username},
        {headers : {"private-key":"a3bd88bb-2cb8-417e-ba66-723248cc00e8"}}
        )
        return res.status(r.status).json(r.data);
    } catch (error) { 
        //status of api call and data associated with it
        return res.status(error.response.status).json(error.response.data);
    }
});

app.listen(3001, () => console.log("Server running on port 3001"));