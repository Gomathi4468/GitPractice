// class Room{
//     ac()
//     {
//         console.log('smart air');
//     }
//     projector()

//     {
//         console.log('benq');
        
//     }

// }
// const obj=new Room();
// obj.ac();
// obj.projector();


class Room{
constructor(acname, projectorname){
    this.acname=acname;
    this.projectorname=projectorname;

}
ac(){
    console.log(this.acname);
}
projector(){
    console.log((this.projectorname));
       

}

}

const obj=new Room("smartair","Benq");
obj.ac();
obj.projector();
