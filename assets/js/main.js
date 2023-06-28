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