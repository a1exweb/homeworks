let animateHTML = function() {
    let elems = document.querySelectorAll('.block_anim');
    let windowHeight = window.innerHeight;

    function addEventHandlers() {
        window.addEventListener('scroll', checkPosition);
        window.addEventListener('resize', init);
    };
    function checkPosition() {
        for (let i = 0; i < elems.length; i++) {
        let positionFromTop = elems[i].getBoundingClientRect().top;
            if (positionFromTop - windowHeight <= 0) {
                elems[i].className = elems[i].className.replace(
                'block_anim',
                'fadeInLeftBig'
                );
            }
        }
    }
    function init() {
    addEventHandlers();
    checkPosition();
    };
    return {
        init: init
    };
};
animateHTML().init();