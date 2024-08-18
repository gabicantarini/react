function add(){
    const cache = {};

    return function (a,b){
        const key = `${a},${b}`

        if(key in cache){
            console.log("[1] :: Returning memoized result")

            return cache[key]
        }else {
            const result = a + b
            cache[key] = result
            return result
        }
    }
}

const memoizedAdd = add();

console.time("Before Memo")
console.log(memoizedAdd(2,3))
console.timeEnd("Before Memo")

console.time("After Memo")
console.log(memoizedAdd(2,3))
console.timeEnd("After Memo")