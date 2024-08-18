function memo(fn, getKey){
    const cache = {};

    return (...args) => {
        const key = getKey(...args)

        if(cache.hasOwnProperty(key)){

            return cache[key]
        }

        cache[key] = fn.apply(this, args)

        return cache[key]
    }
}

const add = (a,b) => a + b

const memoizedAdd = memo(add, (a,b) => `${a}-${b}`)

console.time("Before Memo")
console.log(memoizedAdd(2,3))
console.timeEnd("Before Memo")

console.time("After Memo")
console.log(memoizedAdd(2,3))
console.timeEnd("After Memo")

//Debounce
//Técnica para filtrar valores que mudam rapidamente e emitir o valor mais recente, apenas após um período definido em que não há emissão ou execução.
//Só executa após não haver interação durante deteerminado tempo.

//Throttle
//Técnica que limita a execução de um evento, mesmo que o evento seja disparado continuamente. 
//Não impede a execução de eventos, ele só limita essa execussão a um tempo determinado. Isso não impede a utilização.
