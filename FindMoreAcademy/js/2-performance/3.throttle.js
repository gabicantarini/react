//Throttle
//Técnica que limita a execução de um evento, mesmo que o evento seja disparado continuamente. 
//Não impede a execução de eventos, ele só limita essa execussão a um tempo determinado. Isso não impede a utilização.


function handlerTrigger(){
    console.log("Fire cannon")
}


function throttle(fn, interval){
    let shouldFire = true
    return function(){
        if (shouldFire){
            fn()

            shouldFire = false
            setTimeout(() => {
                shouldFire = true
            }, interval)
        }
    }
}

const optimizedTriggerHandler = throttle(handlerTrigger, 1000)

document
.getElementById("fire")
.addEventListener("click", handlerTrigger)

document
.getElementById("fire-throttle")
.addEventListener("click", optimizedTriggerHandler)