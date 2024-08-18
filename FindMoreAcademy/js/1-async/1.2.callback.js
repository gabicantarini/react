//Event Loop - Síncrono
function foo(){
    console.log("foo");
}

function bar(){
    console.log("bar");
}

function hello(){
    foo();
    bar();
    console.log("hello");

}

hello();

