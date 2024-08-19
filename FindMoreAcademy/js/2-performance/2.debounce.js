//Debounce
//Técnica para filtrar valores que mudam rapidamente e emitir o valor mais recente, apenas após um período definido em que não há emissão ou execução.
//Só executa após não haver interação durante deteerminado tempo.


function searchHandler(event){
    const { value } = event.target

    console.log("Value :: ", value)
}

function debounce(fn, delay){

    let timer
                                                 
    return function (...args){
        const context = this
        clearTimeout(timer)
        timer = setTimeout(() =>
        {
            fn.apply(context, args)
        }, delay)
    }
}

const optimizedSearchHandler = debounce(searchHandler, 500)

document
.getElementById("search")
.addEventListener("keyup", (event)=> searchHandler(event))

document
.getElementById("search-debounce")
.addEventListener("keyup", (event)=> optimizedSearchHandler(event))