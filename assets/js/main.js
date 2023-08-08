window.onload = function () {
    window.scrollTo(0, 0);
};

if (window.innerWidth < 992) {
    setTimeout(function () {
        var targetAnchor = document.getElementById("section2");
        targetAnchor.scrollIntoView({ behavior: 'smooth' });
    }, 5000);

    setTimeout(function () {
        var targetAnchor = document.getElementById("section3");
        targetAnchor.scrollIntoView({ behavior: 'smooth' });
    }, 7500);

    setTimeout(function () {
        var targetAnchor = document.getElementById("section4");
        targetAnchor.scrollIntoView({ behavior: 'smooth' });
    }, 10000);

    setTimeout(function () {
        var targetAnchor = document.getElementById("section5");
        targetAnchor.scrollIntoView({ behavior: 'smooth' });
    }, 12500);

    setTimeout(function () {
        var targetAnchor = document.getElementById("section1");
        targetAnchor.scrollIntoView({ behavior: 'smooth' });
    }, 15000);
} else {
    setTimeout(function () {
        var targetAnchor = document.getElementById("section2");
        targetAnchor.scrollIntoView({ behavior: 'smooth' });
    }, 5000);

    setTimeout(function () {
        var targetAnchor = document.getElementById("section4");
        targetAnchor.scrollIntoView({ behavior: 'smooth' });
    }, 10000);

    setTimeout(function () {
        var targetAnchor = document.getElementById("section1");
        targetAnchor.scrollIntoView({ behavior: 'smooth' });
    }, 15000);
}

function updateDivClass() {
    const div = document.getElementById('img-home');
    const h1 = document.getElementById('h1-intro');
    const h2 = document.getElementById('h2-intro');
    const git = document.getElementById('git-logo');

    if (window.innerWidth > 1199) {
        div.classList.remove('justify-content-center');
        div.classList.add('justify-content-end');

        h1.classList.remove('text-center');
        h1.classList.add('margin-h1');

        h2.classList.remove('text-center');
        h2.classList.add('margin-h2');

        git.classList.add('ajuste-logo');

    } else {
        div.classList.remove('justify-content-end');
        div.classList.add('justify-content-center');

        h1.classList.remove('margin-h1');
        h1.classList.add('text-center');

        h2.classList.remove('margin-h2');
        h2.classList.add('text-center');

        git.classList.remove('ajuste-logo');
    }
}

window.addEventListener('load', updateDivClass);

window.addEventListener('resize', updateDivClass);

