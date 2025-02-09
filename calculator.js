// tostring is method used to convert datatype

let store = "";

let cal=(value)=>{
    store = store + value;
    let show = document.querySelector("#display");
    show.innerHTML=store;
}

let res=()=>{

    let show = document.querySelector("#display");
     show.innerHTML=eval(store)
     store=eval(store)
     store.toString()

}
let ac=()=>{
    store=""
    let show = document.querySelector("#display");
    show.innerHTML=store
}

let del=()=>{
 
    store=store.slice(0,-1)
    let show = document.querySelector("#display");
    show.innerHTML=store
}
let squ=()=>{
    
    store=store*store;
    let show = document.querySelector("#display");
    show.innerHTML=store
// git add .
// git commit -m "js commit" 
//git push

}
let cub=()=>{
    
    store=store*store*store;
    let show = document.querySelector("#display");
    show.innerHTML=store


}
let fun=()=>{
    let show = document.querySelector("#fun");
    show.innerHTML="Ananya Pandey"
}