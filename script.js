function galleryPlugin( activeSlide, classElement ) {
    const slides = document.querySelectorAll( `.${classElement}` );

    slides[activeSlide].classList.add("active");

    slides.forEach( ( slide ) => {
        slide.addEventListener( "click", () => {
            clearAllClasses();

            slide.classList.add( "active" );
        } );
    } );

    function clearAllClasses() {
        slides.forEach( ( slide ) => slide.classList.remove( "active" ) );
    }
}

galleryPlugin(Math.floor(Math.random() * 5), "slide");