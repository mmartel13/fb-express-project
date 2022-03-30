const { connectDb } = require("./connect-db"); 

const custRef = connectDb().collection("customers"); 

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