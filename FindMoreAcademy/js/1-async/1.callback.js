
//Event Loop - Assíncrono
console.log("hello");

function world(){
    console.log("world")
}

setTimeout(function cbFunction(){
    console.log("Callback Function")
}, 1000);

world();