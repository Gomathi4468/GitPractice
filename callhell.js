function ac(callback){
    
    console.log("switch on the ac");
    callback();
}

function tv(callback) 
{
  console.log("turn on the tv");
   callback();
}
function light(callback) {
    console.log("turn off the light");
    callback();
}

// ac(()=>{
//     tv(()=>{
//         light(()=>{

//         })
//     })
// })

ac(function(){
    tv(function(){
        light(function(){
            console.log("three functions executed");
            
        })
    })
})
