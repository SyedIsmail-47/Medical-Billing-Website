document.addEventListener("DOMContentLoaded", function () {
    const bars = document.querySelectorAll(".bar1");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const percentage = bar.getAttribute("data-percentage");
                bar.style.width = percentage + '%';

                let start = 0;
                const interval = setInterval(() => {
                    start++;
                    bar.querySelector('span').textContent = start + '%';
                    if (start == percentage) {
                        clearInterval(interval);
                    }
                }, 20);

                observer.unobserve(bar);
            }
        });
    }, {
        threshold: 0.1
    });

    bars.forEach(bar => {
        observer.observe(bar);
    });
});