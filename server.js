const express = require("express");
const app = express();

//const data = new Date();
//const dia = hoje.getDate().toString().padStart(2,'0');
//const mes = (hoje.getMonth() +1 ).padStart(2,'0');
//const ano = hoje.getFullYear();
//const dataAtual = (`${dia}/${mes}/${ano}`)

//var dateObjectName = new Date([parameters]);


var userRouter = require('./userRouter');
app.use('/',userRouter);

app.listen(8000, () => {
  console.log('Funcionooou');
})