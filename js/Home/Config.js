window.onload = function () {

    const head = document.head;
    const body = document.body;



    function facadesLoad() {

        // CSS Load Here







        // JS Load Here
        const cookiebar = document.createElement('script')
        cookiebar.src = 'js/jquery.cookiebar.js';
        body.appendChild(cookiebar)

        const recaptcha = document.createElement('script')
        recaptcha.async = true;
        recaptcha.defer = true;
        recaptcha.src = 'https://www.google.com/recaptcha/api.js';
        body.appendChild(recaptcha)

        const google_tag_manager = document.createElement('script')
        google_tag_manager.src = 'https://www.googletagmanager.com/gtag/js?id=UA-17468101-1';
        body.appendChild(google_tag_manager)

        const sticky_sidebar = document.createElement('script')
        sticky_sidebar.src = 'js/theia-sticky-sidebar.js';
        body.appendChild(sticky_sidebar)

        // Map API JS Load Here
        const map_js = document.createElement('script')
        map_js.src = 'https://maps.googleapis.com/maps/api/js'
        document.body.appendChild(map_js)




    }

    function lazyFacadesLoad() {
        setTimeout(() => {
            $(document).ready(function () {
                'use strict';
                $.cookieBar({
                    fixed: true
                });
            });


            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'UA-17468101-1');



            jQuery('.left-imgbox').theiaStickySidebar({
                additionalMarginTop: 80
            });
            jQuery('.right-imgbox').theiaStickySidebar({
                additionalMarginTop: 80
            });


            const mapjs = document.createElement('script')
            mapjs.src = 'js/map.js'
            document.body.appendChild(mapjs)
        }, 1000)
    }

    window.addEventListener('scroll', function () {
        if (window.scrollY > 1000) {
            if (!window.rh) {
                window.rh = true
                facadesLoad();
                lazyFacadesLoad();
            }
        }
    })

    setTimeout(() => {
        (function () {
            var options = {
                apple: "+393922163049", // Apple Messages ID
                contactform: true, // Show Contact Form Button
                email: "info@pinocchiotours.com", // Email
                facebook: "1512830182286367", // Facebook page ID
                whatsapp: "+393922163049", // WhatsApp number
                company_logo_url: "//storage.getbutton.io/widget/57/576b/576b81092dc2f1f477fabf6224b12441/logo.webp", // URL of company logo (png, jpg, gif)
                button_image_url: "", // URL of button image (png, jpg, gif)
                greeting_message: "Hello, how may we help you? Just send us a message now to get assistance from Pinocchio Tours' team .", // Text of greeting message
                call_to_action: "Message us", // Call to action
                button_color: "#FF318E", // Color of button
                position: "left", // Position may be 'right' or 'left'
                order: "email,contactform,apple,whatsapp,facebook", // Order of buttons
                ga: true, // Google Analytics enabled
                branding: false, // Show branding string
                mobile: true, // Mobile version enabled
                desktop: true, // Desktop version enabled
                greeting: true, // Greeting message enabled
                shift_vertical: 0, // Vertical position, px
                shift_horizontal: 0, // Horizontal position, px
                domain: "pinocchiotours.com", // site domain
                key: "tcQ7pbYkT0qar8-0xGrjgg", // pro-widget key
            };
            var proto = 'https:', host = "getbutton.io", url = proto + '//static.' + host;
            var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
            s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
            var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);


        })();


        const google_font = document.createElement('link')
        google_font.href = 'https://fonts.googleapis.com/css2?family=Gochi+Hand&family=Montserrat:wght@300;400;500;600;700&display=swap'
        google_font.rel = 'stylesheet'
        head.appendChild(google_font)
    }, 6000)

}