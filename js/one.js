(function(andRedEyelikeLaRedoute, undefined) {
    var $ = window.jQuery;
    var SL = {};
    SL.andRedEyelikeLaRedoute = {
        init: function() {
            this.pgCssDesktop();
            this.pgCssMobile();
            this.undesires();
            this.bannerIs();
            this.doList();
           
        }, //init
        pgCssDesktop: function() {
            debugger;
            console.info('%c pgCssDesktop \u221a', 'background:blue;color:white;');
            var mainCss = '.plpFRv2-divMain .right {margin-top:0 !important; } .redbanner {background:#de343d; z-index;15; float:right;}';
            var head = document.getElementsByTagName('head')[0];

            function addcss(css) {
                var s = document.createElement('style');
                s.setAttribute('type', 'text/css');
                s.appendChild(document.createTextNode(css));
                head.appendChild(s);
            }
            addcss(mainCss);
        }, //pgCssDesktop
        pgCssMobile: function() {
            console.info('%c pgCssMobile \u221a', 'background:blue;color:white;');
            var mobcss = '@media screen and (max-device-width:480px) {.xxx {display:none;}  }';
            var head1 = document.getElementsByTagName('head')[0];

            function addMobcss(css) {
                var s = document.createElement('style');
                s.setAttribute('type', 'text/css');
                s.appendChild(document.createTextNode(css));
                head1.appendChild(s);
            }
            addMobcss(mobcss);
        }, //pgCssMobile

        undesires: function() {
            console.info('%c undesires \u221a', 'background:blue;color:white;');
            //removing image
            var oldban = document.getElementById('ctl00_cphMain_ctl00_ctl01_ctl01_ctl08_pnlMediaBankContent').
            children[0].children[0];
            oldban.parentElement.removeChild(oldban);


           
        }, //undesires

        bannerIs: function() {
            console.info('%c bannerIs \u221a', 'background:blue;color:white;');
            //img
            var ima = document.createElement('img');
            ima.className = 'redbanner';
            ima.id = 'redbanner';
            ima.src = "//cdn.optimizely.com/img/153957092/77813668e6e943f78926b5a0af7ad6f3.png";
            ima.alt = "Clearance Sale";
            //oldban pos
            var oldpos = document.getElementById('ctl00_cphMain_ctl00_ctl01_ctl01_ctl08_pnlMediaBankContent').
            children[0];
            oldpos.appendChild(ima);

           

        }, //doGrid

        doList: function() {
            console.info('%c doList \u221a', 'background:blue;color:white;');


        }, //doList
    };

(function() {

        SL.andRedEyelikeLaRedoute.init();
        


})();



}.call(window.andRedEyelikeLaRedoute || {}));