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
            this.sizeInc();
           
        }, //init
        pgCssDesktop: function() {
            //debugger;
            console.info('%c pgCssDesktop \u221a', 'background:blue;color:white;');
            var mainCss = '.plpFRv2-divMain .right {margin-top:0 !important; }.panel {position:relative;} .redbanner {background:#de343d; z-index;15; float:right; position:relative;} .leftban {float:left;} .mediabank {overflow:auto; } #leftbanid {} #bansize {position:absolute; right:215px; top:95px;} ';
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

        sizeInc: function() {
             console.info('%c sizeInc \u221a', 'background:blue;color:white;');
            var ele = document.createElement('div');
            ele.className = "facet-group";
            ele.id = 'bansize';

            ele.innerHTML = '  <div class="facet divDrop facet-size shown" tabindex="-1" data-stayshown="" data-type="size" data-cerberus="dropdown_plpProduit_sizeFilter"> <dl> <dt>Sizes</dt> </dl> <div class="divDropInner" style="opacity: 1; display: block;"> <div class="content mCustomScrollbar _mCS_1"> <div id="mCSB_1" class="mCustomScrollBox mCS-dark mCSB_vertical mCSB_inside" style="max-height: 147px;" tabindex="0"> <div id="mCSB_1_container" class="mCSB_container" style="position:relative; top:0; left:0;" dir="ltr"> <ul class="set set-size"> <li class="" data-value="00000_one-size:One size" title="One size (8)" data-type="size"> One size </li><li class="" data-value="00006_6:6" title="6 (442)" data-type="size"> 6 </li><li class="" data-value="00008_8:8" title="8 (868)" data-type="size"> 8 </li><li class="" data-value="00010_10:10" title="10 (1075)" data-type="size"> 10 </li><li class="" data-value="00012_12:12" title="12 (1042)" data-type="size"> 12 </li><li class="" data-value="00014_14:14" title="14 (1192)" data-type="size"> 14 </li><li class="" data-value="00016_16:16" title="16 (1174)" data-type="size"> 16 </li><li class="" data-value="00018_18:18" title="18 (1024)" data-type="size"> 18 </li><li class="" data-value="00020_20:20" title="20 (914)" data-type="size"> 20 </li><li class="" data-value="00022_22:22" title="22 (702)" data-type="size"> 22 </li><li class="" data-value="00024_24:24" title="24 (505)" data-type="size"> 24 </li><li class="" data-value="00026_26:26" title="26 (120)" data-type="size"> 26 </li><li class="" data-value="00028_28:28" title="28 (144)" data-type="size"> 28 </li><li class="selected" data-value="00030_30:30" title="30 (111)" data-type="size"> 30 </li><li class="" data-value="00032_32:32" title="32 (65)" data-type="size"> 32 </li><li class="" data-value="00032_32a:32a" title="32a (3)" data-type="size"> 32a </li><li class="" data-value="00032_32b:32b" title="32b (13)" data-type="size"> 32b </li><li class="" data-value="00032_32c:32c" title="32c (15)" data-type="size"> 32c </li><li class="" data-value="00032_32d:32d" title="32d (12)" data-type="size"> 32d </li><li class="" data-value="00032_32e:32e" title="32e (7)" data-type="size"> 32e </li><li class="" data-value="00034_34:34" title="34 (11)" data-type="size"> 34 </li><li class="" data-value="00034_34a:34a" title="34a (3)" data-type="size"> 34a </li><li class="" data-value="00034_34b:34b" title="34b (17)" data-type="size"> 34b </li><li class="" data-value="00034_34c:34c" title="34c (14)" data-type="size"> 34c </li><li class="" data-value="00034_34d:34d" title="34d (13)" data-type="size"> 34d </li><li class="" data-value="00034_34e:34e" title="34e (12)" data-type="size"> 34e </li><li class="" data-value="00036_36:36" title="36 (9)" data-type="size"> 36 </li><li class="" data-value="00036_36a:36a" title="36a (4)" data-type="size"> 36a </li><li class="" data-value="00036_36b:36b" title="36b (13)" data-type="size"> 36b </li><li class="" data-value="00036_36c:36c" title="36c (13)" data-type="size"> 36c </li><li class="" data-value="00036_36d:36d" title="36d (15)" data-type="size"> 36d </li><li class="" data-value="00036_36e:36e" title="36e (11)" data-type="size"> 36e </li><li class="" data-value="00038_38b:38b" title="38b (3)" data-type="size"> 38b </li><li class="" data-value="00038_38c:38c" title="38c (3)" data-type="size"> 38c </li><li class="" data-value="00038_38d:38d" title="38d (4)" data-type="size"> 38d </li><li class="" data-value="00038_38e:38e" title="38e (2)" data-type="size"> 38e </li><li class="" data-value="00040_40d:40d" title="40d (2)" data-type="size"> 40d </li><li class="" data-value="00040_40e:40e" title="40e (1)" data-type="size"> 40e </li><li class="" data-value="06004_xs:Xs" title="Xs (41)" data-type="size"> Xs </li><li class="" data-value="06005_s:S" title="S (75)" data-type="size"> S </li><li class="" data-value="06006_m:M" title="M (80)" data-type="size"> M </li><li class="" data-value="06007_l:L" title="L (75)" data-type="size"> L </li><li class="" data-value="06009_xl:Xl" title="Xl (23)" data-type="size"> Xl </li><li class="" data-value="06010_2xl:2xl" title="2xl (2)" data-type="size"> 2xl </li></ul> </div><div id="mCSB_1_scrollbar_vertical" class="mCSB_scrollTools mCSB_1_scrollbar mCS-dark mCSB_scrollTools_vertical" style="display: block;"> <div class="mCSB_draggerContainer"> <div id="mCSB_1_dragger_vertical" class="mCSB_dragger" style="position: absolute; min-height: 30px; top: 0px; display: block; height: 40px; max-height: 137px;"> <div class="mCSB_dragger_bar" style="line-height: 30px;"></div></div><div class="mCSB_draggerRail"></div></div></div></div></div><button type="button" class="" data-close="Close" data-apply="Apply"></button> </div></div></div><div class="accordian"> ';

         var media = document.querySelectorAll('.mediabank')[1];
         media.parentElement.appendChild(ele);


        }
    };

(function() {
    setTimeout(function() {
        SL.andRedEyelikeLaRedoute.init();
    },150);
        
        


})();



}.call(window.andRedEyelikeLaRedoute || {}));