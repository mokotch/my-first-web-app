const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express ();

app.get('/',(req,res) => {
	res.send('this is the first page');
});

app.get('/hello',(req,res) => {
	res.send('hello world');
});

app.get('/users',(req,res) => {
	res.send ('A list of users!');
});

app.listen(PORT,HOST, () => {
	console.log ('application started successfully');
});