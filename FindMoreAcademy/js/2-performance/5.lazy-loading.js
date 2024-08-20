[...Array.from(Array(100).keys())].forEach((item) =>{
    const image = `
        <div class="img-wrapper">
            <img
                class="lazy"
                src="https://placehold.co/300X300?text=Coming+Soon"
                data-src="https://picsum.photos/id/${item}/500"
                alt="Image Alt-${item}"
            >
        </div>
    `
    document.querySelector(".img-list").innerHTML += image
})

const lazyImages = document.querySelectorAll(".lazy")

const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const img = entry.target
            const src = img.getAttribute("data-src")
            // Trocamos o placeholder pelo data source
            img.src = src
            // Parar de observer a image
            observer.unobserve(img)
        }
    })
}

const observerLazyLoading = new IntersectionObserver(handleIntersection)

lazyImages.forEach((image) => {
    observerLazyLoading.observe(image)
})