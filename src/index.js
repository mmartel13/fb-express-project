
const express = require('express');

const { getCustomersCol, addCustomer, updateCustomer} = require('./customers-col')

const app = express();
app.use(express.json())

app.listen(3000, () => {
    console.log('Listening on port 3000')
});

app.get('/customers', (req, res) => {
    getCustomersCol()
    .then (customers => res.send(customers))
})

app.post('/customers', (req, res) => {
    addCustomer(req.body)
    .then(() => res.send("Customer Added").status(200))
})

app.patch('/customers/:customerId', (req, res) => {
    updateCustomer(req.params.customerId, req.body)
    .then(() => res.send("Successfully updated user!").status(200))
})