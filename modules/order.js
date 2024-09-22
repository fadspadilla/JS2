export class Order {
    constructor() {
        this.items = {}
    }

    add(addItem) {
        const itemsArray = addItem.split(', '); //creates 2D array

        itemsArray.forEach(item => {
            const [name, quantity] = item.trim().split('-');
            const qty = parseInt(quantity);
            const nameCaps = name.trim().toUpperCase();
            
            if (this.search(nameCaps)) { //if it already exists just add the qty
                this.items[nameCaps] += qty;
            } else { //add unique key:value pair
                this.items[nameCaps] = qty;
            }
        });
    }

    search(item) {
        // return this.items.hasOwnProperty(item);
        return item in this.items;
        // for(let key in this.items){
        //     if(key == item){
        //         return true;
        //     }
        // }
        // return false;
    }

    remove(removeItem){
        const itemsArray = removeItem.split(', '); //creates 2D array

        itemsArray.forEach(item => {
            const [name, quantity] = item.trim().split('-');
            const qty = parseInt(quantity);
            const nameCaps = name.trim().toUpperCase();

            if (this.search(nameCaps)) {
                this.items[nameCaps] -= qty;
                if (this.items[nameCaps] <= 0) {
                    delete this.items[nameCaps];
                }
            } else { //item doesn't exist
                console.log(`Not Found: ${nameCaps}`);
            }
        })
    }

    modify(modifyItem){
        const [oldName, newName] = modifyItem.split(', '); //creates 2D array
        const oldNameCaps = oldName.trim().toUpperCase();
        const newNameCaps = newName.trim().toUpperCase();

        if (this.search(oldNameCaps)) {
            this.items[newNameCaps] = this.items[oldNameCaps];
            delete this.items[oldNameCaps];
        } else { //item doesn't exist
            console.log(`Not Found: ${oldNameCaps}`);
        }
        
    }

    list(){
        console.log(this.items)
        // if (Object.keys(this.items).length === 0) {
        //     console.log("Order is empty");
        // } else {
        //     console.log("Current Order:");
        //     for (const [name, quantity] of Object.entries(this.items)) {
        //         console.log(`${name} - ${quantity}`);
        //     }
        // }
    }

}