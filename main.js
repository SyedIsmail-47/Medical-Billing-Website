document.addEventListener("DOMContentLoaded", () => {
    const numbers = document.querySelectorAll(".number");

    const updateCount = (number) => {
        const target = +number.getAttribute("data-target");
        const count = +number.innerText;
        const speed = 100; // Speed of increment

        const inc = target / speed;

        if (count < target) {
            number.innerText = Math.ceil(count + inc);
            setTimeout(() => updateCount(number), 1);
        } else {
            number.innerText = target;
        }
    };

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const number = entry.target;
                updateCount(number);
                observer.unobserve(number); // Stop observing after the count up
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    numbers.forEach(number => {
        observer.observe(number);
    });
});


