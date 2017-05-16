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
            this.otherSquares();        

        }, //init
        pgCssDesktop: function() {
            console.info('%c pgCssDesktop \u221a', 'background:blue;color:white;');
            var mainCss = '.plpFRv2-divMain .right {margin-top:0 !important; }.panel {position:relative;} #redbanner {background:#de343d; z-index:0; float:right; } #leban {max-width:780px;overflow:hidden; padding:0 0 20px 0; position:relative;} .leftban {float:left;} .mediabank {overflow:auto; } #leftbanid {} #bansize {position:absolute; right:196px; top:128px; width:141px; height:39px; z-index:10; background:#fff;} img#leftbanid {max-width:245px; height:auto;} #shopby {position:absolute; top:108px; right:114px; font-size:16px; letter-spacing:.75px; color: rgb(255, 254, 255); font-weight:normal; line-height:1;} #elefak {position:relative;} #sizedos {position:absolute; left:10px; top:58px; width:141px; height:39px; z-index:-2;} dl {font-size:12px; line-height:38px;} .divDrop>span,.divDropEmpty>span,.divDrop>dl {line-height:37px;} #tsize>dl>dt {line-height:38px;} ';
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
            tem1.parentElement.insertBefore(space, tem1);

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
            var shopby = document.createElement('h3');
            shopby.textContent = "SHOP ALL WOMEN'S SALE BY SIZE:";
            shopby.id = 'shopby';
            leban.id = 'leban';
            leban.className = "leban";
            leban.appendChild(ima);
            leban.appendChild(shopby);
            //handle
            var hand = document.querySelectorAll('.menu-facet')[0];
            var par = hand.parentElement;
            par.insertBefore(leban, hand);

        }, //bannerIs

        bannerLeft: function() {
            console.info('%c bannerLeft \u221a', 'background:blue;color:white;');
            var han = document.getElementById('redbanner');
            var im = document.createElement('img');
            im.setAttribute('src', '//cdn.optimizely.com/img/153957092/4ef1416349bd4199a5aa77bc05c4519b.png');
            im.className = "leftban";
            im.id = "leftbanid";
            im.setAttribute('alt', '70% Off');
            var pare = han.parentElement;
            pare.insertBefore(im, han);

        }, //bannerLeft

        sizeInc: function() {
            console.info('%c sizeInc \u221a', 'background:blue;color:white;');
            var ele = document.createElement('div');
            ele.className = "sizeinc";
            
            ele.id = 'bansize';
            ele.innerHTML = ' <div id="tsize" class="facet divDrop faceta-size" tabindex="-1" data-stayshown="" data-type="size" data-cerberus="dropdown_plpProduit_sizeFilter"> <dl> <dt>Sizes</dt> </dl></div>  ';
            //clone ele
            var elefak = ele.cloneNode(true);
            elefak.id = 'sizedos';
            //append ele
            var media = document.getElementById('leban');
            media.appendChild(ele);
            //append elefak
            var yme = document.querySelectorAll('.menu-facet')[0];
            yme.id = 'elefak';
            yme.appendChild(elefak);

        }, //sizeInc

        openit: function() {
                console.info('%c openit \u221a', 'background:blue;color:white;');
                var rot = document.querySelectorAll('.facet.divDrop.facet-size')[0];
                var drop = document.querySelectorAll('.divDropInner')[0];
                //targeted events
                var bsiz = document.getElementById('bansize');
                var tsize = document.getElementById('tsize');
                var bran = document.querySelectorAll('.facet.divDrop.set-brand')[0];
                var sizdos = document.getElementById('sizedos');
                bsiz.addEventListener('click', function(e) {
                    e.preventDefault();
                    if (e.toElement.nodeName == "DL" || e.toElement.nodeName == "DT") {
                        //og moved
                        rot.classList.remove('.reset-facet');         
                        rot.style.position = "absolute";
                        rot.style.right = "190px";
                        rot.style.top = "-119px";
                        
                        //timezone   
                        function timezone() {
                            //og
                            rot.classList.remove('.reset-facet');  
                            rot.className += " shown";
                            rot.style.zIndex = 10;
                            //size one
                            document.getElementById('sizedos').style.zIndex = 10;
                            //ban one
                            document.getElementById('bansize').style.zIndex = -5;
                            //brand
                            bran.style.marginLeft = "162px";
                            //csbone
                            document.getElementById('mCSB_1').style.maxHeight = "147px";
                            //inner
                            drop.style.opacity = 1;
                            drop.style.display = "block";
                        }
                        setTimeout(timezone,100);                         
                     
                    } //if
                    

                }); //bsiz    
                //targeted event
                sizdos.addEventListener('click', function(e) {
                    e.preventDefault();
                    if (e.toElement.nodeName == "DL" || e.toElement.nodeName == "DT") {
                        //ban one
                        document.getElementById('bansize').style.zIndex = 10;
                        //og
                        rot.classList.remove('.reset-facet');  
                        rot.style.position = "";
                        rot.style.right = "";
                        rot.style.top = "";
                        //brand
                        
                        
                        //timezone   
                        function timezone() {
                            //og
                            bran.style.marginLeft = "7px";
                            rot.style.zIndex = 10;   
                            rot.className += " shown";
                            //size one
                            document.getElementById('sizedos').style.zIndex = -5;
                            //ban one
                            document.getElementById('bansize').style.zIndex = 10;
                            
                            //csbone
                            document.getElementById('mCSB_1').style.maxHeight = "147px";
                            //inner
                            drop.style.opacity = 1;
                            drop.style.display = "block";
                        }
                        setTimeout(timezone,100);       

                    } //if

                }); //sizdos

            },//openit

            otherSquares: function() {
                console.info('%c otherSquares \u221a', 'background:blue;color:white;');
                var rot = document.querySelectorAll('.facet.divDrop.facet-size')[0];
                var otherSquares = document.querySelectorAll('.facet-group')[0];
                var drop = document.querySelectorAll('.divDropInner')[0];
                otherSquares.addEventListener('click', function(e) {
                   
                    console.log(e);
                    var children = otherSquares.children;
                    for(var i=0; i < children.length -1; i++) {
                        if(e.target.innerText == "Sizes") {
                            console.log('do nothing');
                           
                        } else {
                            console.log('otherSquares');
                            rot.classList.remove('shown');
                            drop.style.opacity = 0;
                            drop.style.display = "none";

                        }
                        
                        


                    }//for

                }); //otherSquares
                
                


            }//otherSquares

            
    };

    (function() {

        setTimeout(function() {
            SL.andRedEyelikeLaRedoute.init();
        }, 10);

    })();




}.call(window.andRedEyelikeLaRedoute || {}));