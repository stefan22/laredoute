(function (andRedEyelikeLaRedoute, undefined) {
    var $ = window.jQuery;
    var SL = {};
    SL.andRedEyelikeLaRedoute = {
        init: function () {
            this.pgCssDesktop();
            this.pgCssMobile();
            this.undesires();
            this.bannerIs();
            this.bannerLeft();
            this.sizeInc();
            this.openit();


        }, //init
        pgCssDesktop: function () {
            console.info('%c pgCssDesktop \u221a', 'background:blue;color:white;');
            var mainCss = '.clearfix:after { visibility: hidden; display: block; font-size: 0; content: " "; clear: both; height: 0; } * html .clearfix { zoom: 1; } *:first-child + html .clearfix { zoom: 1; } .plpFRv2-divMain .right {margin-top:0 !important; }.panel {position:relative;} #redbanner {background:#de343d; z-index:0; float:right; } #leban {max-width:780px; margin-bottom: 20px;  padding:0 0 20px 0; position:relative;} .leftban {float:left;} .mediabank {overflow:auto; } #leftbanid {} #bansize {position:absolute; right:196px; top:128px; width:141px; height:39px; z-index:555555; background:#fff;} img#leftbanid {max-width:245px; height:auto;} #shopby {position:absolute; top:108px; right:114px; font-size:16px; letter-spacing:.75px; color: rgb(255, 254, 255); font-weight:normal; line-height:1;} #elefak {position:relative;} #sizedos {position:absolute; left:10px; top:58px; width:141px; height:39px; z-index:-2;} dl {font-size:12px; line-height:38px;} .divDrop>span,.divDropEmpty>span,.divDrop>dl {line-height:37px;} #tsize>dl>dt {line-height:38px;} .blockop {display:block; opacity:1;} #tsizenew.active #new-popup-re {display: block} ';

            mainCss += '#new-popup-re li{height: 30px; min-width: 30px; margin-right: 16px; -moz-box-sizing: border-box; box-sizing: border-box; display: inline-block; border: 1px solid #7f7f7f; line-height: 29px; text-align: center; white-space: nowrap; font-size: 14px; font-weight: 400; padding: 0 8px; line-height: 29px; font-size: inherit; cursor: pointer; margin: 0 4px 9px 0; padding: 0 9px;} #new-popup-re li.selected{border: 3px solid; line-height: 25px; padding: 0 7px;}';

            mainCss += '#new-popup-re .mCustomScrollBox{max-height: 146px; overflow: overlay;} #new-popup-re .mCustomScrollBox::-webkit-scrollbar-track { -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); background-color: #F5F5F5; } #new-popup-re .mCustomScrollBox::-webkit-scrollbar { width: 6px; background-color: #F5F5F5; } #new-popup-re .mCustomScrollBox::-webkit-scrollbar-thumb { background-color: #000000; }';

            mainCss += '#new-popup-re button{width: 112px; margin: 0 auto; display: block; height: 40px; margin-top: 10px;} #new-popup-re button:before{content: ""; display: inline-block; width: 11px; height: 11px; vertical-align: middle; background: url(/images/global/sprite.png) no-repeat -106px -3px; margin-right: 7px;}  #new-popup-re button:after{content: attr(data-apply); vertical-align: middle;} #new-popup-re button.close:after{content: attr(data-close); vertical-align: middle;}';

            mainCss += 'div[data-cerberus="dropdown_plpProduit_sizeFilter"] .divDropInner.super-hide{display: none !important}';

            var head = document.getElementsByTagName('head')[0];

            function addcss(css) {
                var s = document.createElement('style');
                s.setAttribute('type', 'text/css');
                s.appendChild(document.createTextNode(css));
                head.appendChild(s);
            }
            addcss(mainCss);
        }, //pgCssDesktop
        pgCssMobile: function () {
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

        undesires: function () {
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

        bannerIs: function () {
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

        bannerLeft: function () {
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

        sizeInc: function () {
            $('<div class="sizeinc" id="bansize"><div id="tsizenew" class="facet divDrop" > <dl> <dt>Sizes</dt> </dl></div></div><div class="clearfix" />').appendTo('#leban');

        }, //sizeInc
        buildContent: function () {
            var html = '';
            $('div[data-cerberus="dropdown_plpProduit_sizeFilter"] .divDropInner .mCustomScrollBox ul.set-size li').each(function (index, el) {
                var title = $(this).attr('title');
                var type = $(this).data('type');
                var value = $(this).data('value');
                var text = $(this).text().trim();
                var selected = '';
                if ($(this).hasClass('selected')) {
                    selected = 'selected';
                }

                html += '<li class="' + selected + '" data-value="' + value + '" title="' + title + '" data-type="' + type + '">' + text + '</li>';
            });
            return html;
        },
        openit: function () {

            console.log($('div[data-cerberus="dropdown_plpProduit_sizeFilter"] .divDropInner .mCustomScrollBox ul.set-size li').length);

            var html = '<div id="new-popup-re" class="divDropInner"><div class="mCustomScrollBox "><ul>';
            html += SL.andRedEyelikeLaRedoute.buildContent();
            html += '</ul></div><button type="button" class="close" data-close="Close" data-apply="Apply"></button></div>';

            $(html).appendTo('#tsizenew');

            $(document).on('click', '#tsizenew dl', function (event) {
                event.preventDefault();
                /* Act on the event */
                console.log('0');
                $('#tsizenew').toggleClass('active');
            });

            $(document).on('click', '#new-popup-re li', function (event) {
                console.log('1');
                event.preventDefault();
                $(this).toggleClass('selected');
                var val = $(this).data('value');
                $('div[data-cerberus="dropdown_plpProduit_sizeFilter"] li[data-value="' + val + '"]').click();
                if ($('div[data-cerberus="dropdown_plpProduit_sizeFilter"] button').hasClass('close')) {
                    $('#new-popup-re button').addClass('close');
                } else {
                    $('#new-popup-re button').removeClass('close');

                }

            });

            $(document).on('click', '#new-popup-re button', function (event) {
                event.preventDefault();
                console.log('2');
                $('#tsizenew').removeClass('active');
                if ($(this).hasClass('close') === false) {
                    $('div[data-cerberus="dropdown_plpProduit_sizeFilter"] .divDropInner').addClass('super-hide');
                    $('div[data-cerberus="dropdown_plpProduit_sizeFilter"] button').click();
                    setTimeout(function () {
                        $('div[data-cerberus="dropdown_plpProduit_sizeFilter"] .divDropInner').removeClass('super-hide');
                    }, 500);
                }
            });


            $(document).on('click', 'div[data-cerberus="dropdown_plpProduit_sizeFilter"] button', function (event) {
                if ($(this).hasClass('close') === false) {
                    var lis = SL.andRedEyelikeLaRedoute.buildContent();
                    $('#new-popup-re ul').html(lis);
                }
            });

            $(document).on('click', '#gNavdivMain .facet.divDrop', function (event) {
                setTimeout(function () {
                    if ($('#gNavdivMain .facet.divDrop').hasClass('shown')) {
                        $('#tsizenew').removeClass('active');
                    }
                }, 350);

                console.log('3');

            });

        }


    };


    function pollForjQuery() {
        if (window.jQuery !== undefined) {
            if ($('div[data-cerberus="dropdown_plpProduit_sizeFilter"] .divDropInner .mCustomScrollBox ul.set-size li').length > 0) {
                // try {
                SL.andRedEyelikeLaRedoute.init();
                // } catch (err) {
                //     console.log('ERROR: ' + err);
                // }
            } else {
                setTimeout(pollForjQuery, 25);
            }
        } else {
            setTimeout(pollForjQuery, 25);
        }
    }
    pollForjQuery();


}.call(window.andRedEyelikeLaRedoute || {}));