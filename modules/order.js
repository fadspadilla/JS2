export class Order {
  constructor() {
    this.items = {};
    this.tableDisplay = document.getElementById("item-lists");
  }

  add(itemstr) {
    const itemsArray = itemstr.split(", "); //[Choco sundae - 2, burger - 3]

    itemsArray.forEach((item) => {
      const [name, quantity] = item.trim().split("-");
      const qty = parseInt(quantity);
      const nameCaps = name.trim().toUpperCase();

      if (this.search(nameCaps)) {
        //if it already exists just add the qty
        this.items[nameCaps] += qty;
      } else {
        //add unique key:value pair
        this.items[nameCaps] = qty;
      }
    });

    this.list();
  }
}
