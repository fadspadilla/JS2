import { Order } from "./modules/order.js";

const order = new Order();

order.add("Choco sundae - 2, burger - 3")
order.add("chicken - 4")
order.add("spaghetti - 2")
order.list();
order.remove("burger - 1")
order.list();
order.remove("french fries - 1")
order.list();
order.remove("spaghetti - 2")
order.list();
order.remove("spaghetti - 2")
order.list();
order.modify("burger, burger steak")
order.list();