const doCalc = () => {
    const start = Date.now()
    Array.from({ length: 1000 }, () => helper())
    const finish = Date.now()

    return (finish - start) / 1000
}

const helper = () => {
    let above = 0,
        below = 0

    Array.from({ length: 500000 }, () => {
        if (Math.random() * 2 > 1) above++
        below++
    })
}