const sliderLanding = tns({
    container: "#mySlider",
    loop: true,
    items: 1,
    slideBy: 'page',
    autoplay: true,
    controlsContainer: '#controls',
    prevButton: '.previous',
    nextButton: '.next',
    autoplayButton: '.auto',
    autoplayText: ['', ''],
    nav: false
});

const sliderLogo = tns({
    container: '#logos',
    loop: true,
    items: 3,
    slideBy: 1,
    autoplay: true,
    center: true,
    mouseDrag: true,
    controlsContainer: '.controls2',
    prevButton: '#previous',
    nextButton: '#next',
    autoplayButton: '#auto',
    autoplayHoverPause: false,
    autoplayText: ['', ''],
    nav: false
})