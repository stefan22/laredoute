(function(andRedEyelikeLaRedoute, undefined) {
    var $ = window.jQuery;
    var SL = {};
    SL.andRedEyelikeLaRedoute = {
        init: function() {
            this.pgCssDesktop();
            this.pgCssMobile();
            this.undesires();
            this.bannerIs();
            this.bannerLeft();
            this.openit();
            this.sizeInc();
           
        }, //init
        pgCssDesktop: function() {
            //debugger;
            console.info('%c pgCssDesktop \u221a', 'background:blue;color:white;');
            var mainCss = '.plpFRv2-divMain .right {margin-top:0 !important; }.panel {position:relative;} .redbanner {background:#de343d; z-index;15; float:right; position:relative;} .leftban {float:left;} .mediabank {overflow:auto; } #leftbanid {} #bansize {position:absolute; right:190px; top:130px; width:150px; height:38px; z-index100; background:#fff;} ';
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
            var oldban = document.querySelectorAll('.mediabank')[1].
            children[0].children[0].children[0];
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

        bannerLeft: function() {
            console.info('%c bannerLeft \u221a', 'background:blue;color:white;');
            var han = document.querySelectorAll('.mediabank')[1];
            var im = document.createElement('img');
            im.setAttribute('src','//cdn.optimizely.com/img/153957092/4ef1416349bd4199a5aa77bc05c4519b.png');
            im.className = "leftban";
            im.id = "leftbanid";
            im.setAttribute('alt','70% Off');
            han.firstElementChild.parentElement.insertBefore(im, han.firstElementChild);

        }, //bannerLeft

        openit: function() {

            console.log('clicked');

        },

        sizeInc: function() {
             console.info('%c sizeInc \u221a', 'background:blue;color:white;');
             debugger;
            var ele = document.createElement('div');
            ele.className = "sizeinc";
            ele.id = 'bansize';
            ele.innerHTML = ' <div class="facet divDrop  facet-size shown" tabindex="-1" data-stayshown="" data-type="size" data-cerberus="dropdown_plpProduit_sizeFilter"><dl id="bansizes" onclick="this.openit()"><dt>Sizes</dt></dl></div>  ';


          
           

         var media = document.querySelectorAll('.mediabank')[1];
         media.parentElement.appendChild(ele);


        }
    };

(function() {

    setTimeout(function() {
        SL.andRedEyelikeLaRedoute.init();
    },550);

})();




}.call(window.andRedEyelikeLaRedoute || {}));