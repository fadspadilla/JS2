import { Order } from "./modules/order.js";

const order = new Order();

//get html
const itemName = document.getElementById("itemName");
const form = document.getElementById("form");

//regular expression
const addRemovePattern = /^[a-zA-Z0-9\s]+-\s*\d+(,\s*[a-zA-Z0-9\s]+-\s*\d+)*$/;
const modifyPattern = /^[a-zA-Z0-9\s]+,\s*[a-zA-Z0-9\s]+$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let messages = [];
  if (itemName.value === "" || itemName.value == null) {
    messages.push("Item name is required");
  }
});

window.addItem = function addItem() {
  const itemValue = itemName.value.trim();
  if (itemValue == "") {
    alert("Item name is required.");
  } else if (!addRemovePattern.test(itemValue)) {
    alert("Invalid Format");
  } else {
    order.add(itemValue); // Pass the value as a string
    itemName.value = '';    
  }
};
