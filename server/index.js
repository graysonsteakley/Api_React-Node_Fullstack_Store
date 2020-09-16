const { json } = require('body-parser');
const express = require('express');


const app = express();
app.listen(3000, ()=>{
    console.log('App has started running on port 3000')

});

app.use(express.static('../client/public/index.html'));
app.use(express.json({limit: '1mb'}));

app.post('/api', (req, res)=>{

    console.log('Data sent to api succesfully!');
    data = req.body();
    // Add data to the database
    console.log(data);

    res.json({
        request: 'success',
        body: data,
        timestamp: Date.now()
    });

})

