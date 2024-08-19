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

//Lazy Loading
// Metodologia que consiste em adiar a inicialização de um elemento ou objeto até este ser necessário.
//EX:
{/* <img src="image.jpg" alt="Image Alt" loading="lazy" />
<iframe src="iframe" loading="lazy"></iframe> */}

//Intersection Observer API
//API do browser que deteta ou conhece quando um elemento "target" torna-se vis+ivel para o utilizador.

