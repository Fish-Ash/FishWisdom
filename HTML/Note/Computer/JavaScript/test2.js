class Goods{
    constructor(name, price){
        this.name = name,
        this.price = price
    }
}

let cart = [];

function addItem(good){
    cart.push(good)
}

function viewCart(){
    console.log("商品", "价格");
    for(const good of cart){
        console.log(good.name,good.price);
    }
}

function CalculateTotal(){
    let res = 0;
    for(const good of cart){
        res += good.price;
    }
    console.log("商品总价为",res)
}

addItem(new Goods("carrot", 18))
addItem(new Goods("apple", 5))

viewCart()
CalculateTotal()