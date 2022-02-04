
const express = require('express');

const { getCustomersCol, addCustomer, updateCustomer} = require('./customers-col')

const app = express();//setting up API here
app.use(express.json())//allow posts with json

app.listen(3000, () => {
    console.log('Listening on port 3000')//listen on port 3000
});

app.get('/customers', (req, res) => {//setting up routes that people can hit. for example when you search something and put /customer it will show you customers within the website
    getCustomersCol()
    .then (customers => res.send(customers))
})

app.post('/customers', (req, res) => {//setting up routes people can hit
    addCustomer(req.body)
    .then(() => res.send("Customer Added").status(200))
})

app.patch('/customers/:customerId', (req, res) => {//a patch is telling me to update the information
    updateCustomer(req.params.customerId, req.body)
    .then(() => res.send("Successfully updated user!").status(200))
})