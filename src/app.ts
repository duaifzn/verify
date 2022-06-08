import express from 'express';
import cors from 'cors';

const port = 3000 || process.env.PORT;
const app = express();
app.set('view engine', 'ejs'); 
app.use(cors())
app.use(express.static('views'))

app.get('/', (req, res) =>{
    res.render('verify');
})

app.listen(port, ()=>{
    console.log(`server running on port ${port}`);
})