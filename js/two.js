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
            this.openit();
            
           
        }, //init
        pgCssDesktop: function() {
            console.info('%c pgCssDesktop \u221a', 'background:blue;color:white;');
            var mainCss = '.plpFRv2-divMain .right {margin-top:0 !important; }.panel {position:relative;} #redbanner {background:#de343d; z-index:0; float:right; } #leban {max-width:780px;overflow:hidden; padding:0 0 20px 0; position:relative;} .leftban {float:left;} .mediabank {overflow:auto; } #leftbanid {} #bansize {position:absolute; right:190px; top:130px; width:150px; height:39px; z-index100; background:#fff;} img#leftbanid {max-width:245px; height:auto;} #shopby {position:absolute; top:109px; right:114px; font-size:16px; letter-spacing:.75px; color:#fafafa; font-weight:normal; line-height:1;}  ';
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
            //removing image tem
            var tem = document.querySelectorAll('.right')[0].children[0];
            tem.parentElement.removeChild(tem);
            //spacegap
            var space = document.createElement('div');
            var spaimg = document.createElement('img');
            spaimg.width = "0";
            space.appendChild(spaimg);
            var tem1 = document.querySelectorAll('.right')[0].children[0];
            tem1.parentElement.insertBefore(space,tem1);

           
        }, //undesires

        bannerIs: function() {
            console.info('%c bannerIs \u221a', 'background:blue;color:white;');
           
            //img
            var ima = document.createElement('img');
            ima.className = 'redbanner';
            ima.id = 'redbanner';
            ima.src = "//cdn.optimizely.com/img/153957092/77813668e6e943f78926b5a0af7ad6f3.png";
            ima.alt = "Clearance Sale";
            //le banner
            var leban = document.createElement('div');
            leban.id = 'leban';
            leban.className = "leban";
            leban.appendChild(ima);
            //handle
            var hand = document.querySelectorAll('.menu-facet')[0];
            var par = hand.parentElement;
            par.insertBefore(leban,hand);
          


           

        }, //bannerIs

        bannerLeft: function() {
            console.info('%c bannerLeft \u221a', 'background:blue;color:white;');
            var han = document.getElementById('redbanner');
            var im = document.createElement('img');
            im.setAttribute('src','//cdn.optimizely.com/img/153957092/4ef1416349bd4199a5aa77bc05c4519b.png');
            im.className = "leftban";
            im.id = "leftbanid";
            im.setAttribute('alt','70% Off');
            var pare = han.parentElement;
            pare.insertBefore(im,han);

        }, //bannerLeft

        sizeInc: function() {
             console.info('%c sizeInc \u221a', 'background:blue;color:white;');
           
            var ele = document.createElement('div');
            ele.className = "sizeinc";
            var shopby = document.createElement('h3');
            shopby.textContent = "SHOP ALL WOMEN'S SALE BY SIZE:"
            shopby.id = 'shopby';


            ele.id = 'bansize';
            ele.innerHTML = ' <div id="tsize" class="facet divDrop facet-size" tabindex="-1" data-stayshown="" data-type="size" data-cerberus="dropdown_plpProduit_sizeFilter"> <dl> <dt>Sizes</dt> </dl> <div class="divDropInner" style="opacity: 0; display: none;"> </div></div>   ';

            var media = document.getElementById('leban');
            media.appendChild(ele);
            //children
            var xx = document.querySelectorAll('.divDropInner')[1];
            var one = xx.children[0].cloneNode(true);
            var two = xx.children[1].cloneNode(true);
            var fa = document.getElementById('mCSB_1').style.maxHeight = "147px";
            var xz = document.querySelectorAll('.divDropInner')[0];
            xz.appendChild(one);
            xz.appendChild(two);
            
            
            

    

        },//sizeInc

        openit: function() {
            console.info('%c openit \u221a', 'background:blue;color:white;');

            //targeted event
            var bsiz = document.getElementById('bansize');
            bsiz.addEventListener('click', function(e) {
                e.preventDefault();
                if(e.toElement.nodeName == "DL" || e.toElement.nodeName == "DT") {
                    console.log(e);
                    if(document.getElementById('tsize').classList.contains('shown')) {
                        document.getElementById('tsize').
                        classList.remove('shown');
                        var drop = document.querySelectorAll('.divDropInner')[0];
                        drop.style.opacity = 0;
                        drop.style.display = "none";
                        var y = document.querySelectorAll('.divDropInner')[0];
                        y.children[0].style.display = "none";
                        y.children[1].style.display = "none";
                        var ya = document.querySelectorAll('.divDropInner')[1];
                        ya.children[0].style.display = "block";
                        ya.children[1].style.display = "block";
                        
                        
                    }//if
                    else {
                        var tsize = document.getElementById('tsize');
                        tsize.className += " shown";
                        var drop = document.querySelectorAll('.divDropInner')[0];
                        drop.style.opacity = 1;
                        drop.style.display = "block";
                        var yf = document.querySelectorAll('.divDropInner')[0];
                        yf.children[0].style.display = "block";
                        yf.children[1].style.display = "block";
                        var yc = document.querySelectorAll('.divDropInner')[1];
                        yc.children[0].style.display = "none";
                        yc.children[1].style.display = "none";
                        var yd = document.getElementById('mCSB_6').style.lineHeight = "147px";
                        yd.style.maxHeight = '147px';
                        yd.style.height = '147px';
                        var ye = document.getElementById('mCSB_1').style.lineHeight = "147px";
                        ye.style.maxHeight = '147px';
                        ye.style.height = '147px';
                      
                       
                    }
                           
                }//if 


                
                


            }); //click

            

            

        },//openit

        othercode: function() {

              
                    window.on("click", ".accordian", function() {
                        i.hasClass("collapsed") ? i.removeClass("collapsed").addClass("expanded") : i.removeClass("expanded").addClass("collapsed")
                    });

                  
                    

                

            


        }//other
    };

(function() {

    setTimeout(function() {
        SL.andRedEyelikeLaRedoute.init();
    },10);

})();




}.call(window.andRedEyelikeLaRedoute || {}));