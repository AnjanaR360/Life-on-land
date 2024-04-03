window.addEventListener("load", function(){
    document.querySelector('body').insertAdjacentHTML("afterbegin", `
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
                <a href="team.html">About us</a>
                <a href="profile.html">Register</a>
            </div>
        </header>
    `)
    document.querySelector('body').insertAdjacentHTML("beforeend", `
        <footer>
            <div class="navigation_bar">
                <h3>Editors' Pages</h3>
                <a href="anjitha.html">Anjitha</a>
                <a href="nohim.html">Nohim</a>
                <a href="monali.html">Monali</a>
                <a href="anjana.html">Anjana</a>
            </div>
        </footer>
    `)
}); 