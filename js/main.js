// counter-design
const counters = document.querySelectorAll('.counter')




counters.forEach(counter => {
        counter.innerText = '0'

        const updateCounter = () => {
                const target = +counter.getAttribute('data-target')
                const c = +counter.innerText

                const increment = target / 200

                if (c < target) {
                    counter.innerText = `${Math.ceil(c + increment)}`
                    setTimeout(updateCounter, 1)
                } else {
                    counter.innerText = target
                }
            }
            // window.onscroll = function() {
            //     updateCounter();
            // }
        updateCounter()
    })
    // scrolling navbar
let nav = document.querySelector("nav");
window.onscroll = function() {
        if (document.documentElement.scrollTop > 20) {
            nav.classList.add("bg-light");
        } else {
            nav.classList.remove("bg-light");
        }
    }
    // nav-collapse