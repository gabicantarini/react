const getElement = (selector) => document.querySelector(selector)

const button1Node = getElement("#button-1")
const button2Node = getElement("#button-2")

const result1Node = getElement("#result-1")
const result2Node = getElement("#result-2")

const loaderNode = getElement("#loader")

button1Node.addEventListener("click", () => {
    const result = doCalc()

    result1Node.innerText = `Done! Took ${result} seconds`
})

const worker = new Worker('./js/worker.js')

button2Node.addEventListener("click", () => {
    worker.postMessage({ action: "doCalc" })

    loaderNode.classList.remove("is-hidden")
    result2Node.innerText = ""
})

worker.onmessage = ({ data }) => {
    if (data.action === "doCalc") {
        loaderNode.classList.add("is-hidden")

        result2Node.innerText = `Done! Took ${data.result} seconds`
    }
}