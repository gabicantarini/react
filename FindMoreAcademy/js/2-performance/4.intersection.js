
//Intersection Observer API
//API do browser que deteta ou conhece quando um elemento "target" torna-se visivel para o utilizador.

const options = {
    root: null,
    rootMargin: "10px",
    threshould: 1
}

const callback = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            console.log("Intersected")
            console.log(entry)
        }
    });
}

const observer = new IntersectionObserver(callback, options)

observer.observe(document.getElementById("fire-intersect"))

