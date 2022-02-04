const { connectDb } = require("./connect-db"); //brings in the function to connect to the database

const custRef = connectDb().collection("customers"); //gets the customers collection

function getCustomersCol() {
    return custRef
      .get()
      .then((snapshot) => {
        const customers = [];
        snapshot.forEach((doc) => {
          customers.push({ id: doc.id, ...doc.data() });
        });
  
        return customers;
      })
      .catch(console.error);
  }

function addCustomer(customer) {
  return custRef
    .add(customer)
    .catch(console.error);
}

function updateCustomer(customerId, dataUpdate) {
    return custRef
    .doc(customerId)
    .update(dataUpdate)
}
module.exports = { getCustomersCol, addCustomer, updateCustomer };