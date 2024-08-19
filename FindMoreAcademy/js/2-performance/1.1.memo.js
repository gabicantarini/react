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



