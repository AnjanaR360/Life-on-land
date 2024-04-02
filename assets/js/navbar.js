window.addEventListener("load", function(){
    document.querySelector('body').insertAdjacentHTML("beforebegin", `
        <header>
            <div class="navigation_bar">
                <div class="navigation_bar_logo">
                    <img src="assets/img/logo.png" class="Logo">
                </div>
                <a href="home.html">Home</a>
                <a href="site_map.html">Site map</a>
                <a href="shop.html">Shop</a>
                <a href="gallery.html">Gallery</a>
                <a href="feedback.html">Feedback</a>
                <a href="aboutus.html">About us</a>
                <a href="register.html">Register</a>
            </div>
        </header>
    `)
}); 