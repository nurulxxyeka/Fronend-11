const express = require('express');
const routerMhs = require('./routers/mahasiswa');
const routerMk = require('./routers/matakuliah');
const routerNilai = require('./routers/nilai');
const app = express();
const port = 5000;
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(routerMhs);
app.use(routerMk);
app.use(routerNilai);


app.listen(port,() => {
    console.log('Server runing at port', port);
});