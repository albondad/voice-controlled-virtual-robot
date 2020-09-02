const express = require('express');
const app = express();
const port = 3000 || process.env.PORT;
const cors = require('cors');

app.use(cors())

app.post('/', (req, res) => {
    console.log('request recieved');
    res.send({message: 'request recieved'});
});

app.listen(port, () => {
    console.log('[VCVR] express app listening at ' + port)
})