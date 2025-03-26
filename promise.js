function go() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let shop = false
            if  (shop){
            resolve("go to the shop");
            }
            else{
                reject("Not going to the shop");
            }
        }, 5000);
    })
}

function buy() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let product=true;
            if(product){
                resolve("buy the product");
            }
            else{
                reject("Not buy the product");
            }
        }, 1000);
    })    
}

function get() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let change=false
            if(change){
                resolve("get the change")
            }
            else{
                reject("not get the change")
            }
           
        }, 2000);
    })
}

// go()
// .catch(val=>{console.log(val);return buy()})
// .then(val1=>{console.log(val1);return get()})
// .catch(val2=>{console.log(val2); console.log("all work done");
// })

async function out(){
    try{
        const a = await go();
        console.log(a)
        const b = await buy();
        console.log(b)
        const c = await get();
        console.log(c)
    }catch(error){
        console.log(error);

    }

    
}
out();