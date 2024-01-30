
window.onload = function () {

    

    setTimeout(() => {
        // Sticky Sidebar JS Load Here
        const stickySidebar = document.createElement('script')
        stickySidebar.src = 'js/theia-sticky-sidebar.js';
        document.body.appendChild(stickySidebar);


    }, 3000);


    setTimeout(() => {
        jQuery('.left-imgbox').theiaStickySidebar({
      
            additionalMarginTop: 80
        
        });
        
        jQuery('.right-imgbox').theiaStickySidebar({
        
            additionalMarginTop: 80
        
        });
    },3100)

    setTimeout(() => {

        
        // Google Font Load
        var gFont = document.createElement('link');
        gFont.rel = 'stylesheet';
        gFont.href = 'https://fonts.googleapis.com/css2?family=Gochi+Hand&family=Montserrat:wght@300;400;500;600;700&display=swap';
        document.head.appendChild(gFont);



        // Cookie Js Load Here
        const cookie = document.createElement('script')
        cookie.src = 'js/jquery.cookiebar.js';
        document.body.appendChild(cookie)

    }, 4000)


    setTimeout(() => {

        // Google Analytics Load Here
        const googleTag = document.createElement('script');
        googleTag.src = 'https://www.googletagmanager.com/gtag/js?id=UA-17468101-1';
        document.body.appendChild(googleTag);

        // Google Gtag Activation
        window.dataLayer = window.dataLayer || [];

        function gtag() { dataLayer.push(arguments); }

        gtag('js', new Date());



        gtag('config', 'UA-17468101-1');


            


        !function (e, t, n) { var s, o = e.getElementsByTagName(t)[0]; e.getElementById(n) || ((s = e.createElement(t)).id = n, s.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.10&appId=1365407963556488", s.setAttribute('defer', null), o.parentNode.insertBefore(s, o)) }(document, "script", "facebook-jssdk")
    }, 5000)

    setTimeout(() => {
        


        const recaptcha = document.createElement('script')
        recaptcha.src = 'https://www.google.com/recaptcha/api.js'
        document.body.appendChild(recaptcha)
    },5100)
};