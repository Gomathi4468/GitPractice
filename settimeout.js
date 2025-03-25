function eve() {
    setTimeout(() => {
        console.log("good evening");
        
    }, 2500);
    
}

function mor(){

    setTimeout(() => {
        console.log('good morning');
        
    }, 1000);
}

function  night(){

    setTimeout(() => {
        console.log('good night');
        
    }, 3000);
}

eve();
mor();
night();