
window.onload = function () {

    

    setTimeout(() => {
        // Sticky Sidebar JS Load Here
        const stickySidebar = document.createElement('script')
        stickySidebar.src = 'js/theia-sticky-sidebar.js';
        document.body.appendChild(stickySidebar);


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



        // Sticky Sidebar JS Load Here
        // const common_script = document.createElement('script')
        // common_script.src = 'js/common_scripts_min.js';
        // document.body.appendChild(common_script);


    }, 3000);


    setTimeout(() => {
        jQuery('.left-imgbox').theiaStickySidebar({
      
            additionalMarginTop: 80
        
        });
        
        jQuery('.right-imgbox').theiaStickySidebar({
        
            additionalMarginTop: 80
        
        });
    },3200)

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