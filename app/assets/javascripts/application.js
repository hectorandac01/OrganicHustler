// First script 

// let index = false;
// let bag = false;
// let checkout = false;

// function reload_jcarousel() {
//     (function (window, $, undefined) {
//         var plugins = ['jcarousel', 'jcarouselAutoscroll', 'jcarouselControl', 'jcarouselPagination'];
//         for (var i = 0; i < plugins.length; i++) {
//             var plugin = plugins[i];
//             var reload_plugin = 'reload' + plugin.charAt(0).toUpperCase() + plugin.slice(1);
//             $.fn[reload_plugin] = (function (plugin) {
//                 return function () {
//                     return this.each(function () {
//                         if (!$(this).data(plugin)) {
//                             return false;
//                         }
//                         var _options = $(this).data(plugin)._options;
//                         $(this).data(plugin, {}).off()[plugin](_options);
//                     });
//                 };
//             })(plugin);
//         }
//     })(this, jQuery);
// }

// function setup_n_1() {
//     $('#quick_view').on('click', function (e) {
//         if (e.target === this)
//             close_modal();
//     });

//     // When the user clicks anywhere outside of the modal, close it
//     window.onclick = function (event) {
//         if (event.target === modal_quick) {
//             product.remove();
//             modal_quick.style.display = "none";
//             $("body").removeClass("modal-open");
//             $('body').css('overflow', 'auto');
//             $('body').css('position', 'relative');
//             OVERALL_MODE = false;
//         }
//     };
// }

// function position_card(a) {
//     a = a === 15 ? a : 0;
//     var coords = getCoords(document.getElementById('cart_ic_2'));
//     var bubble = document.getElementById('bubble');
//     if ($(window).width() < 768) {
//         bubble.style.top = 0;
//         bubble.style.left = 0;
//     } else {
//         bubble.style.top = '38px';
//         bubble.style.left = (coords.left - 380 + a) + 'px';
//     }
// }

// function setup_n_2() {
//     $(".modal").on("shown.bs.modal", function () {
//         $(".modal-backdrop").remove();
//         fitStageIntoParentContainer_we_cart();
//     });

//     window.addEventListener('resize', position_card);
//     position_card(15);
// }

// function loadScript(src, callback) {
//     var s,
//         r,
//         t;
//     r = false;
//     s = document.createElement('script');
//     s.type = 'text/javascript';
//     s.src = src;
//     s.onload = s.onreadystatechange = function () {
//         if (!r && (!this.readyState || this.readyState == 'complete')) {
//             r = true;
//             callback();
//         }
//     };
//     t = document.getElementsByTagName('script')[0];
//     t.parentNode.insertBefore(s, t);
// }

// End First Script

// Second Script
// var ACTUAL_CART_ITEM_EDIT = null;

// window.twttr = (function (d, s, id) {
//     var js, fjs = d.getElementsByTagName(s)[0],
//         t = window.twttr || {};
//     if (d.getElementById(id)) return t;
//     js = d.createElement(s);
//     js.id = id;
//     js.src = "https://platform.twitter.com/widgets.js";
//     fjs.parentNode.insertBefore(js, fjs);

//     t._e = [];
//     t.ready = function (f) {
//         t._e.push(f);
//     };

//     return t;
// }(document, "script", "twitter-wjs"));

// function getImage(array, id) {
//     for (var i = 0; i < array.length; i++) {
//         if (array[i].id === parseInt(id)) {
//             return array[i];
//         }
//     }
// }

// function getCoords(elem) {
//     var box = elem.getBoundingClientRect();

//     var body = document.body;
//     var docEl = document.documentElement;

//     var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
//     var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

//     var clientTop = docEl.clientTop || body.clientTop || 0;
//     var clientLeft = docEl.clientLeft || body.clientLeft || 0;

//     var top = box.top + scrollTop - clientTop;
//     var left = box.left + scrollLeft - clientLeft;

//     return {
//         top: Math.round(top),
//         left: Math.round(left)
//     };
// }

// function edit_catalog(id, exterior, mode) {
//     document.getElementsByTagName('body')[0].classList.remove('modal-open');
//     exterior ? null : $('#cart_modal').modal('toggle');
//     close_modal();
//     OVERALL_MODE = exterior ? mode : true;
//     ACTUAL_CART_ITEM_EDIT = id;
//     $.ajax({
//         url: '/get_cart_item',
//         method: 'get',
//         dataType: 'json',
//         data: {
//             product_cart_id: id
//         },
//         success: function (data) {

//             product.data = data['source_data'];
//             product.product_id = data['source_data']['id'];
//             product.color_id = data['color']['id'];
//             product.size_id = data['size']['id'];

//             $.ajax({
//                 url: '/catalog/product/color/images',
//                 type: 'GET',
//                 dataType: 'json',
//                 data: {
//                     color_id: product.color_id
//                 },
//                 success: function (data_) {
//                     if (product.views.length === 0) {
//                         create_objects_array(data_);
//                     }

//                     for (var i = 0; i < data['logos'].length; i++) {
//                         var modified_view = find_in_custom(data['logos'][i]['product_image_id']);
//                         if (modified_view !== null) {
//                             modified_view.logo_id = data['logos'][i]['logo_id'];
//                             modified_view.x = parseFloat(data['logos'][i]['x']);
//                             modified_view.y = parseFloat(data['logos'][i]['y']);
//                             modified_view.multiplexer = parseFloat(data['logos'][i]['multiplexer']);
//                         }
//                     }

//                     for (var j = 0; j < data['emblems'].length; j++) {
//                         var modified_view = find_in_custom(data['emblems'][j]['product_image_id']);
//                         if (modified_view !== null) {
//                             modified_view.position_emblem_id = data['emblems'][j]['position_emblem_admin_id'];
//                         }
//                     }

//                     document.getElementById('modal-content-center').outerHTML = default_modal.outerHTML;
//                     load_viewer();
//                     load_view_1(product.data);

//                 },
//                 error: function (data) {

//                 }
//             });
//         },
//         error: function (data) {

//         }
//     });

//     var body = $("body");
//     body.addClass("modal-open");
//     body.css('overflow', 'hidden');
//     modal_quick.style.display = "block";
// }
// End Second Script

// Third Script
// var twist = false;

// function show_search() {
//     var elem = document.getElementById('search-box-drop');
//     var pos = (twist ? 70 : 0);
//     var id = setInterval(frame, 5);

//     function frame() {
//         if (pos === (twist ? 0 : 70)) {
//             twist = !twist;
//             clearInterval(id);
//         } else {
//             twist ? pos-- : pos++;
//             elem.style.top = pos + 'px';
//         }
//     }

// }
// End Third Script

// Forth Script

// End Forth Script

// Fifth Script

var default_modal = document.getElementById('modal-content-center').cloneNode(true);
var view_1 = document.getElementById('view_1').cloneNode(true);
var view_2 = document.getElementById('view_2').cloneNode(true);
var view_3 = document.getElementById('view_3').cloneNode(true);

var OVERALL_MODE = false;

// Get the modal
var modal_quick = document.getElementById('quick_view');
var modal_emblem = document.getElementById('modal-content-quick-m');

function close_modal() {
    product.remove();
    modal_quick.style.display = "none";
    $("body").removeClass("modal-open");
    $('body').css('overflow', 'auto');
    $('body').css('position', 'relative');
    OVERALL_MODE = false;
}

function close_emblem_modal() {
    modal_emblem.style.display = "none";
}

function ModifiedView(product_id, picture_id, color_id) {
    this.product_id = product_id;
    this.picture_id = picture_id;
    this.color_id = color_id;
    this.position_emblem_id = null;
    this.logo_id = null;
    this.x = null;
    this.y = null;
    this.multiplexer = 1;

    this.sendable_info = function () {
        return {
            product_id: this.product_id,
            picture_id: this.picture_id,
            color_id: this.color_id,
            position_emblem_id: this.position_emblem_id,
            logo_id: this.logo_id,
            x: this.x,
            y: this.y,
            multiplexer: this.multiplexer
        }
    };

    this.konva_elements = {
        logo: null,
        emblem: null,
        image: null
    };

    this.remove = function () {
        this.position_emblem_id = null;
        this.logo_id = null;
        this.x = null;
        this.y = null;
        this.multiplexer = 1;
        this.konva_elements.logo = null;
        this.konva_elements.emblem = null;
    }
}

var ACTUAL_VIEW = null;
var ACTUAL_LOGO = null;

var current_view = 1;

//MAIN LAYER
var LAYER = null;

//MAIN STAGE
var STAGE = null;
var stage_scale = 1;
var limit = 0;

var GROUP = null;
var current_pointer = 0;

// Get the modal
var modal_quick_m = document.getElementById('modal-content-quick-m');
var modal_base = document.getElementById('modal-content-center');

// Get the <span> element that closes the modal
var span_quick_m = document.getElementById('quick-view-close-m');

var TEMP_PRESET_HOLDER = null;

var UPDATABLE_VIEW = {
    id: null,
    view: null,
    parent: null
};

var UPDATABLE_EMBLEM = {
    x: null,
    y: null,
    multiplexer: null,
    src: null
};

function sendable_views(views) {
    var sendable_views = [];
    for (var t = 0; t < views.length; t++) {
        sendable_views.push(views[t].sendable_info());
    }
    return sendable_views;
}

//Main product
var product = {
    data: null,
    product_id: null,
    color_id: null,
    size_id: null,
    views: [],
    send_info: function () {
        return {
            data: this.data,
            product_id: this.product_id,
            color_id: this.color_id,
            size_id: this.size_id,
            views: sendable_views(this.views)
        }
    },
    remove: function () {
        this.data = null;
        this.product_id = null;
        this.color_id = null;
        this.size_id = null;
        this.views = [];
        current_pointer = 0;
        current_view = 1;
        LAYER = null;
        STAGE = null;
        stage_scale = 1;
        limit = 0;
        GROUP = null;
        ACTUAL_VIEW = null;
        ACTUAL_LOGO = null;
        UPDATABLE_VIEW = {
            id: null,
            view: null,
            parent: null
        };
        UPDATABLE_EMBLEM = {
            x: null,
            y: null,
            multiplexer: null,
            src: null
        };
        TEMP_PRESET_HOLDER = null;
    },
    clean: function () {
        this.views = [];
        current_pointer = 0;
        LAYER = null;
        STAGE = null;
        stage_scale = 1;
        limit = 0;
        GROUP = null;
        ACTUAL_VIEW = null;
        ACTUAL_LOGO = null;
        UPDATABLE_VIEW = {
            id: null,
            view: null,
            parent: null
        };
        UPDATABLE_EMBLEM = {
            x: null,
            y: null,
            multiplexer: null,
            src: null
        };
    },
    no_custom: function () {
        for (var t = 0; t < this.views.length; t++) {
            this.views[t].remove();
        }
    }
};

function fitStageIntoParentContainer() {
    var container = document.querySelector('#image-container');
    // now we need to fit stage into parent
    var containerWidth = container.offsetWidth;
    var containerHeight = container.offsetHeight;
    var cur = containerHeight;
    if (containerWidth < containerHeight) {
        cur = containerWidth;
    }
    // to do this we need to scale the stage
    limit = limit / stage_scale;
    var scale = cur / 500;
    stage_scale = scale;
    limit = limit * stage_scale;
    STAGE.width(500 * scale);
    STAGE.height(500 * scale);
    STAGE.scale({x: scale, y: scale});
    STAGE.draw();
}

// When the user clicks on <span> (x), close the modal
span_quick_m.onclick = function () {
    remove_modal_m()
};

function remove_modal_m() {
    modal_quick_m.style.display = "none";
    modal_base.className = 'modal-content_quick modal-content_base';
}

function send_variations() {
    modal_base.className += ' blur';
    modal_quick_m.style.display = "block";
}

function open_quick(pr, view) {
    $.ajax({
        type: "get",
        url: "/catalog/item/" + pr,
        data: {},
        success: function (data) {


            document.getElementById('modal-content-center').outerHTML = default_modal.outerHTML;

            product.remove();

            product.product_id = data.id;
            product.color_id = data.main_color.id;
            product.data = data;

            load_viewer();
            switch (view) {
                case 1:
                    load_view_1(data);
                    break;
                case 2:
                    load_view_2(data);
                    break;
                case 3:
                    load_view_3(data);
                    break;
            }

            return false
        },
        error: function (data) {
            return false
        }
    });
    var body = $("body");
    body.addClass("modal-open");
    body.css('overflow', 'hidden');
    modal_quick.style.display = "block";
}

function load_data_preset(color_id, logo_id, x, y, multiplexer, picture_id) {

    product.clean();
    product.color_id = color_id;

    TEMP_PRESET_HOLDER = {
        color_id: color_id,
        logo_id: logo_id,
        x: x,
        y: y,
        multiplexer: multiplexer,
        picture_id: picture_id
    };

    load_viewer();
}

function create_image_slider(views) {

    current_pointer = 0;
    var p1 = 0;
    var p2 = 0;

    limit = 500 * (views.length - 1) * -1 * stage_scale;

    GROUP = new Konva.Group({
        x: 0,
        y: 0,
        height: 500,
        width: 500 * views.length,
        draggable: true,
        dragBoundFunc: function (pos) {
            return {
                x: pos.x < 0 && pos.x > limit ? pos.x : this.getAbsolutePosition().x,
                y: this.getAbsolutePosition().y
            }
        }
    });
    LAYER.add(GROUP);

    GROUP.on('dragstart mousedown', function () {
        p1 = STAGE.getPointerPosition();
    });

    GROUP.on('mouseup dragend', function () {
        p2 = STAGE.getPointerPosition();
        if ((p2.x - p1.x) / stage_scale < -50) {
            var mover = -500 * (current_pointer + 1);
            var once = true;
            var lim = 500 * (views.length - 1) * -1;
            var animation_1 = new Konva.Animation(function (frame) {
                var x = GROUP.getX();
                if (x > mover && x > lim) {
                    if (x - (50 * frame.time / 1000) < mover) {
                        GROUP.move({x: mover - x, y: 0});
                        once ? current_pointer = current_pointer + 1 : null;
                        once = false;
                        animation_1.stop();
                    } else {
                        GROUP.move({x: -50 * frame.time / 1000, y: 0});
                        once ? current_pointer = current_pointer + 1 : null;
                        once = false;
                    }
                } else if (x < mover && x < 0) {
                    if (x + (50 * frame.time / 1000) > mover) {
                        GROUP.move({x: mover - x, y: 0});
                        once ? current_pointer = current_pointer + 1 : null;
                        once = false;
                        animation_1.stop();
                    } else {
                        GROUP.move({x: 50 * frame.time / 1000, y: 0});
                        once ? current_pointer = current_pointer + 1 : null;
                        once = false;
                    }
                } else {
                    animation_1.stop();
                }
            }, LAYER);
            animation_1.start();
        } else if ((p2.x - p1.x) / stage_scale > 50) {
            var mover = -500 * (current_pointer - 1);
            var once = true;
            var lim = 500 * (views.length - 1) * -1;
            var animation_2 = new Konva.Animation(function (frame) {
                var x = GROUP.getX();
                if (x < mover && x < 0) {
                    if (x + (50 * frame.time / 1000) > mover) {
                        GROUP.move({x: mover - x, y: 0});
                        once ? current_pointer = current_pointer - 1 : null;
                        once = false;
                        animation_2.stop();
                    } else {
                        GROUP.move({x: 50 * frame.time / 1000, y: 0});
                        once ? current_pointer = current_pointer - 1 : null;
                        once = false;
                    }
                } else if (x > mover && x > lim) {
                    if (x - (50 * frame.time / 1000) < mover) {
                        GROUP.move({x: mover - x, y: 0});
                        once ? current_pointer = current_pointer - 1 : null;
                        once = false;
                        animation_2.stop();
                    } else {
                        GROUP.move({x: -50 * frame.time / 1000, y: 0});
                        once ? current_pointer = current_pointer - 1 : null;
                        once = false;
                    }
                } else {
                    animation_2.stop();
                }
            }, LAYER);
            animation_2.start();
        } else {
            var mover = -500 * current_pointer;
            var x = GROUP.getX();
            if (x > mover) {
                var animation_3 = new Konva.Animation(function (frame) {
                    x = GROUP.getX();
                    if (x - (50 * frame.time / 1000) < mover) {
                        GROUP.move({x: mover - x, y: 0});
                        animation_3.stop();
                    } else if (x > mover) {
                        GROUP.move({x: -50 * frame.time / 1000, y: 0});
                    }
                }, LAYER);
                animation_3.start();
            } else if (x < mover) {
                var animation_4 = new Konva.Animation(function (frame) {
                    x = GROUP.getX();
                    if (x + (50 * frame.time / 1000) > mover) {
                        GROUP.move({x: mover - x, y: 0});
                        animation_4.stop();
                    } else if (x < mover) {
                        GROUP.move({x: 50 * frame.time / 1000, y: 0});
                    }
                }, LAYER);
                animation_4.start();
            }
        }
    });

    for (var i = 0; i < views.length; i++) {
        add_image_in_position(views[i].src, 'img' + i, 500 * i, GROUP, i);
    }

    LAYER.draw();
}

function add_image_in_position(url, id, x, group, i) {

    var view = product.views[i];


    if (TEMP_PRESET_HOLDER !== null) {

        if (view.picture_id === parseInt(TEMP_PRESET_HOLDER.picture_id)) {
            current_pointer = i;
            view.logo_id = TEMP_PRESET_HOLDER.logo_id;
            view.x = parseFloat(TEMP_PRESET_HOLDER.x);
            view.y = parseFloat(TEMP_PRESET_HOLDER.y);
            view.multiplexer = parseFloat(TEMP_PRESET_HOLDER.multiplexer);
        }
    }

    var img_grp = new Konva.Group({
        x: x,
        y: 0,
        width: 500,
        height: 500,
        draggable: false,
        name: 'grp' + i
    });
    group.add(img_grp);

    var img = new Konva.Image({
        x: 0,
        y: 0,
        width: 500,
        height: 500,
        draggable: false,
        name: id
    });
    img_grp.add(img);
    view.konva_elements.image = img;

    var image = new Image();
    image.onload = function () {
        img.image(image);
        LAYER.draw();
    };
    image.src = url;

    if (view.logo_id) {
        var logo = new Konva.Image({
            x: view.x,
            y: view.y,
            draggable: false,
            dragBoundFunc: function (pos) {
                return {
                    x: pos.x > 0 ? pos.x : this.getAbsolutePosition().x,
                    y: pos.y > 0 ? pos.y : this.getAbsolutePosition().y
                }
            }
        });
        img_grp.add(logo);
        view.konva_elements.logo = logo;

        logo.on('dragend', function () {
            view.x = logo.x();
            view.y = logo.y();
        });

        var imageLogo = new Image();
        imageLogo.onload = function () {
            logo.image(imageLogo);
            logo.setWidth(this.width);
            logo.setHeight(this.height);
            logo.scale({
                x: view.multiplexer,
                y: view.multiplexer
            });
            LAYER.draw()
        };

        $.ajax({
            url: '/catalog/product/logo?logo_id=' + view.logo_id,
            type: 'GET',
            dataType: 'text',
            data: {},
            success: function (data) {
                imageLogo.src = data
            },
            error: function (data) {

            }
        });
    }

    if (view.position_emblem_id) {

        $.ajax({
            url: '/catalog/product/emblem?emblem_id=' + view.position_emblem_id,
            type: 'GET',
            dataType: 'json',
            data: {},
            success: function (data) {
                var emblem = new Konva.Image({
                    x: data.x,
                    y: data.y
                });
                img_grp.add(emblem);
                view.konva_elements.emblem = emblem;

                var imageEmblem = new Image();
                imageEmblem.onload = function () {
                    emblem.image(imageEmblem);
                    emblem.setWidth(this.width);
                    emblem.setHeight(this.height);
                    emblem.scale({
                        x: data.multiplexer,
                        y: data.multiplexer
                    });
                    LAYER.draw();
                };

                imageEmblem.src = data.src;
            },
            error: function (data) {

            }
        });
    }
}

function create_objects_array(data) {
    for (var i = 0; i < data.length; i++) {
        product.views.push(new ModifiedView(product.data['id'], data[i]['id'], data[i]['color_id']))
    }
}

function find_in_custom(p_id) {
    var custom = null;
    for (var i = 0; i < product.views.length; i++) {
        if (product.views[i].picture_id.toString() === p_id.toString()) {
            custom = product.views[i];
        }
    }
    return custom;
}

function update_section() {

    var group = UPDATABLE_VIEW.parent;
    var view = UPDATABLE_VIEW.view;

    if (view.logo_id && current_view === 2) {

        var logo = new Konva.Image({
            x: view.x,
            y: view.y,
            draggable: true,
            dragBoundFunc: function (pos) {
                return {
                    x: pos.x > 0 ? pos.x : this.getAbsolutePosition().x,
                    y: pos.y > 0 ? pos.y : this.getAbsolutePosition().y
                }
            }
        });
        group.add(logo);
        view.konva_elements.logo = logo;

        logo.on('dragmove', function () {
            view.x = logo.x();
            view.y = logo.y();
        });

        var imageLogo = new Image();
        imageLogo.onload = function () {

            view.multiplexer = 150 / this.width;

            logo.image(imageLogo);
            logo.setWidth(this.width);
            logo.setHeight(this.height);
            logo.scale({
                x: view.multiplexer,
                y: view.multiplexer
            });

            view.x = 250 - logo.getClientRect().width / 2;
            view.y = 250 - logo.getClientRect().height / 2;

            logo.setX(view.x);
            logo.setY(view.y);

            LAYER.draw()
        };

        $.ajax({
            url: '/catalog/product/logo?logo_id=' + view.logo_id,
            type: 'GET',
            dataType: 'text',
            data: {},
            success: function (data) {
                imageLogo.src = data
            },
            error: function (data) {

            }
        });
    }

    if (view.position_emblem_id && current_view === 3) {
        view.konva_elements.emblem ? view.konva_elements.emblem.destroy() : null;

        var emblem = new Konva.Image({
            x: UPDATABLE_EMBLEM.x,
            y: UPDATABLE_EMBLEM.y
        });
        group.add(emblem);
        view.konva_elements.emblem = emblem;

        var imageEmblem = new Image();
        imageEmblem.onload = function () {
            emblem.image(imageEmblem);
            emblem.setWidth(this.width);
            emblem.setHeight(this.height);
            emblem.scale({
                x: UPDATABLE_EMBLEM.multiplexer,
                y: UPDATABLE_EMBLEM.multiplexer
            });
            LAYER.draw();
        };

        imageEmblem.src = UPDATABLE_EMBLEM.src;
    }
}

function load_viewer(_url_base, view, view_stationary) {
    _url_base = _url_base || null;

    if (view !== undefined && view !== null) {
        UPDATABLE_VIEW.id = view;
        UPDATABLE_VIEW.view = product.views[view];
        UPDATABLE_VIEW.parent = product.views[view].konva_elements.image.getParent();

        update_section();
    } else {
        if (_url_base === 'null') {
            _url_base = null;
        }

        var stageWidth = 500;
        var stageHeight = 500;

        STAGE = new Konva.Stage({
            container: 'image-container',
            width: stageWidth,
            height: stageHeight
        });
        LAYER = new Konva.Layer();
        STAGE.add(LAYER);
        zoomInFunction(LAYER, STAGE);

        $('#slide-right').unbind();
        $('#slide-right').on('click', function () {
            var mover = -500 * (current_pointer + 1);
            var once = true;
            var lim = 500 * (product.views.length - 1) * -1;
            var animation_1 = new Konva.Animation(function (frame) {
                var x = GROUP.getX();
                if (x > mover && x > lim && mover > lim - 500) {
                    if (x - (50 * frame.time / 1000) < mover) {
                        GROUP.move({x: mover - x, y: 0});
                        animation_1.stop();
                    } else {
                        GROUP.move({x: -50 * frame.time / 1000, y: 0});
                    }
                    once ? current_pointer = current_pointer + 1 : null;
                    once = false;
                } else {
                    animation_1.stop();
                }
            }, LAYER);
            animation_1.start();
        });

        $('#slide-left').unbind();
        $('#slide-left').on('click', function () {
            var mover = -500 * (current_pointer - 1);
            var once = true;
            var animation_2 = new Konva.Animation(function (frame) {
                var x = GROUP.getX();
                if (x < mover && x < 0 && mover < 500) {
                    if (x + (50 * frame.time / 1000) > mover) {
                        GROUP.move({x: mover - x, y: 0});
                        animation_2.stop();
                    } else {
                        GROUP.move({x: 50 * frame.time / 1000, y: 0});
                    }
                    once ? current_pointer = current_pointer - 1 : null;
                    once = false;
                } else {
                    animation_2.stop();
                }
            }, LAYER);
            animation_2.start();
        });

        $.ajax({
            url: '/catalog/product/color/images',
            type: 'GET',
            dataType: 'json',
            data: {
                color_id: product.color_id
            },
            success: function (data) {

                if (product.views.length === 0) {
                    create_objects_array(data);
                }
                create_image_slider(data);
                if (view_stationary && GROUP) {
                    GROUP.draggable(false);
                    GROUP.off('dragstart');
                    GROUP.off('mousedown');
                    GROUP.off('dragend');
                    GROUP.off('mouseup');
                }
            },
            error: function (data) {

            }
        });

        fitStageIntoParentContainer();
        window.addEventListener('resize', fitStageIntoParentContainer);
        $('#image-container').find('.konvajs-content').each(function (index) {
            $(this)['0'].style.position = null;
        })
    }
}

function load_view_3(product_, clicked) {

    current_view = 3;
    clicked = clicked || false;

    $("#slide-left").prop("disabled", true);
    $("#slide-right").prop("disabled", true);

    var actor = document.getElementById('actor');
    var new_element = actor.cloneNode(true);
    new_element.addEventListener("click", function () {
        load_view_1(product_);
    });
    new_element.innerHTML = '<i class="fa fa-chevron-left" aria-hidden="true"></i>';
    actor.parentNode.replaceChild(new_element, actor);

    document.getElementById('view_3').outerHTML = view_3.outerHTML;

    document.getElementById('view_1').style.display = 'none';
    document.getElementById('view_2').style.display = 'none';
    document.getElementById('view_3').style.display = 'block';
    close_emblem_modal();

    if (GROUP) {
        GROUP.draggable(false);
        GROUP.off('dragstart');
        GROUP.off('mousedown');
        GROUP.off('dragend');
        GROUP.off('mouseup');
    }

    for (var i = 0; i < product.views.length; i++) {
        var temp_view = product.views[i].konva_elements.logo;
        if (temp_view) {
            temp_view.draggable(false);
        }
    }

    $.ajax({
        url: '/catalog/product/emblems?product_id=' + product.product_id + '&color_id=' + product.color_id,
        type: 'GET',
        dataType: 'json',
        data: {},
        success: function (data) {


            var carousel_jq = $('ul#container-emblems');


            for (var i = 0; i < data.length; i++) {

                var selected = '';
                if (product.emblem_id === data[i].id) {
                    selected = 'selected_emblem';
                }



                carousel_jq.append('<li>' +
                    '<div id="emblem_btn_' + data[i].id + '" class="' + selected + '" onclick="load_data_emblems(' + data[i].id + ', ' + data[i].product_image_id + ')" style="cursor: pointer; margin: 4px; width: 100px; text-align: center">' +
                    '<div style=" background: #f1f1f1; padding-bottom: 10px;">' +
                    '<img  alt="Product image" style="margin: 5px;" height="50px" src="' + data[i].url + '">' +
                    '<div><h5 style="width: 100%; font-weight: bold;">' + data[i].title + '</h5></div>' +
                    '</div>' +
                    '<div><h5 style="width: 100%; color: #c2a5b2">+$' + data[i].price + '</h5></div>' +
                    '</div>' +
                    '</li>');
            }

            var jcarouselSelector = '.jcarousel';

            $(jcarouselSelector).reloadJcarousel();

            $('.jcarousel-control-prev').jcarouselControl({
                // Options go here
                target: '-=1'
            });
            $('.jcarousel-control-next').jcarouselControl({
                // Options go here
                target: '+=1'
            });
            $('div#preview_size_cr_carousel').jcarousel('reload');
        },
        error: function (data) {

        }
    });

    var iconShow = $("#icon-show-logos");
    var iconHide = $("#icon-hide-logos");
    var loader = $("#icon_loader-logos");

    iconShow.click(function () {
        loader.animate({
            height: 70
        }, 100, function () {
            loader.css({
                overflow: 'visible'
            });
        });
        iconShow.addClass(" hidden");
        iconHide.removeClass(" hidden");
    });

    iconHide.click(function () {
        loader.animate({
            height: 0
        }, 100, function () {
            loader.css({
                overflow: 'hidden'
            });
        });
        iconHide.addClass(" hidden");
        iconShow.removeClass(" hidden");
    });

    $('#quick_view, #general_p_content').animate({scrollTop: '0px'}, 500);
}

function load_view_2(product_) {
    current_view = 2;
    $("#slide-left").prop("disabled", true);
    $("#slide-right").prop("disabled", true);

    $.ajax({
        url: '/catalog/product/color/images',
        type: 'GET',
        dataType: 'json',
        data: {
            color_id: product.color_id
        },
        success: function (data) {

            if (product.views.length === 0) {
                create_objects_array(data);
            }
        },
        error: function (data) {

        }
    }).done(function () {

        ACTUAL_VIEW = product.views[current_pointer];
        ACTUAL_LOGO = ACTUAL_VIEW.konva_elements.logo;

        document.getElementById('view_2').outerHTML = view_2.outerHTML;

        document.getElementById('view_1').style.display = 'none';
        document.getElementById('view_3').style.display = 'none';
        document.getElementById('view_2').style.display = 'block';

        if (!product.data.emblemable) {
            document.getElementById('done-section-2').onclick = function () {
                addToCart();
            }
        }

        if (!product.data.movable) {
            document.getElementById('controllers').outerHTML = '';
            document.getElementById('bar').outerHTML = '';
            document.getElementById('jr-filler').innerHTML = document.getElementById('share-div').outerHTML;
            document.getElementById('share-div').outerHTML = '<div style="height: 60px"></div>';
        }

        var actor = document.getElementById('actor');
        var new_element = actor.cloneNode(true);
        new_element.addEventListener("click", function () {
            load_view_1(product_)
        });
        new_element.innerHTML = '<i class="fa fa-chevron-left" aria-hidden="true"></i>';
        actor.parentNode.replaceChild(new_element, actor);

        if (GROUP) {
            GROUP.draggable(false);
            GROUP.off('dragstart');
            GROUP.off('mousedown');
            GROUP.off('dragend');
            GROUP.off('mouseup');
        }

        for (var i = 0; i < product.views.length; i++) {
            var temp_view = product.views[i].konva_elements.logo;
            if (temp_view) {
                temp_view.draggable(true);
            }
        }

        $.ajax({
            url: '/catalog/product/logos?product_id=' + product.product_id,
            type: 'GET',
            dataType: 'json',
            data: {},
            success: function (data) {


                var carousel_jq = $('ul#container-logos');

                for (var i = 0; i < data.length; i++) {
                    carousel_jq.append('<li><img alt="Product image" src="' + data[i].picture + '" style="height: 70px;" id="' + data[i].id + '" onclick="load_data_logos(\'' + data[i].id + '\', ' + current_pointer + ')"></li>');
                }

                var jcarouselSelector = '.jcarousel';

                $(jcarouselSelector).reloadJcarousel();

                $('.jcarousel-control-prev').jcarouselControl({
                    // Options go here
                    target: '-=1'
                });
                $('.jcarousel-control-next').jcarouselControl({
                    // Options go here
                    target: '+=1'
                });
                $('div#preview_size_cr_carousel').jcarousel('reload');
            },
            error: function (data) {

            }
        });

        var iconShow = $("#icon-show-logos");
        var iconHide = $("#icon-hide-logos");
        var loader = $("#icon_loader-logos");

        iconShow.click(function () {
            loader.animate({
                height: 70
            }, 100, function () {
                loader.css({
                    overflow: 'visible'
                });
            });
            iconShow.addClass(" hidden");
            iconHide.removeClass(" hidden");
        });

        iconHide.click(function () {
            loader.animate({
                height: 0
            }, 100, function () {
                loader.css({
                    overflow: 'hidden'
                });
            });
            iconHide.addClass(" hidden");
            iconShow.removeClass(" hidden");
        });

        var anim_zoom_in = new Konva.Animation(function (frame) {

            if (ACTUAL_LOGO !== null) {
                ACTUAL_LOGO.scale({
                    x: ACTUAL_VIEW.multiplexer + 0.0005 * frame.timeDiff,
                    y: ACTUAL_VIEW.multiplexer + 0.0005 * frame.timeDiff
                });
                LAYER.draw();

                ACTUAL_VIEW.multiplexer = ACTUAL_VIEW.multiplexer + 0.0005 * frame.timeDiff;
            }
        }, LAYER);

        var anim_zoom_out = new Konva.Animation(function (frame) {
            if (ACTUAL_LOGO !== null) {

                ACTUAL_LOGO.scale({
                    x: ACTUAL_VIEW.multiplexer - 0.0005 * frame.timeDiff,
                    y: ACTUAL_VIEW.multiplexer - 0.0005 * frame.timeDiff
                });
                LAYER.draw();

                ACTUAL_VIEW.multiplexer = ACTUAL_VIEW.multiplexer - 0.0005 * frame.timeDiff;
            }
        }, LAYER);

        var anim_right = new Konva.Animation(function (frame) {
            if (ACTUAL_LOGO !== null && (ACTUAL_VIEW.x + ACTUAL_LOGO.getClientRect().width) < 500) {
                ACTUAL_LOGO.x(ACTUAL_LOGO.x() + (105 * frame.timeDiff / 1000));
                LAYER.draw();

                ACTUAL_VIEW.x = ACTUAL_LOGO.x();
                ACTUAL_VIEW.y = ACTUAL_LOGO.y();
            }
        }, LAYER);

        var anim_left = new Konva.Animation(function (frame) {
            if (ACTUAL_LOGO !== null && ACTUAL_VIEW.x > 0) {
                ACTUAL_LOGO.x(ACTUAL_LOGO.x() - (105 * frame.timeDiff / 1000));
                LAYER.draw();

                ACTUAL_VIEW.x = ACTUAL_LOGO.x();
                ACTUAL_VIEW.y = ACTUAL_LOGO.y();
            }
        }, LAYER);

        var anim_up = new Konva.Animation(function (frame) {
            if (ACTUAL_LOGO !== null && ACTUAL_VIEW.y > 0) {
                ACTUAL_LOGO.y(ACTUAL_LOGO.y() - (105 * frame.timeDiff / 1000));
                LAYER.draw();

                ACTUAL_VIEW.x = ACTUAL_LOGO.x();
                ACTUAL_VIEW.y = ACTUAL_LOGO.y();
            }
        }, LAYER);

        var anim_down = new Konva.Animation(function (frame) {
            if (ACTUAL_LOGO !== null && (ACTUAL_VIEW.y + ACTUAL_LOGO.getClientRect().height) < 500) {
                ACTUAL_LOGO.y(ACTUAL_LOGO.y() + (105 * frame.timeDiff / 1000));
                LAYER.draw();

                ACTUAL_VIEW.x = ACTUAL_LOGO.x();
                ACTUAL_VIEW.y = ACTUAL_LOGO.y();
            }
        }, LAYER);

        var btn_up = $("#up-btn");
        var btn_down = $("#down-btn");
        var btn_left = $("#left-btn");
        var btn_right = $("#right-btn");
        var btn_minus = $("#minus-btn");
        var btn_plus = $("#plus-btn");
        var btn_restart = $("#restart-btn");

        btn_minus.on('mousedown touchstart', function () {
            anim_zoom_out.start();
        });

        btn_minus.on('mouseup touchend', function () {
            anim_zoom_out.stop();
        });

        btn_plus.on('mousedown touchstart', function () {
            anim_zoom_in.start();
        });

        btn_plus.on('mouseup touchend', function () {
            anim_zoom_in.stop();
        });

        btn_up.on('mousedown touchstart', function () {
            anim_up.start();
        });

        btn_up.on('mouseup touchend', function () {
            anim_up.stop();
        });

        btn_down.on('mousedown touchstart', function () {
            anim_down.start();
        });

        btn_down.on('mouseup touchend', function () {
            anim_down.stop();
        });

        btn_left.on('mousedown touchstart', function () {
            anim_left.start();
        });

        btn_left.on('mouseup touchend', function () {
            anim_left.stop();
        });

        btn_right.on('mousedown touchstart', function () {
            anim_right.start();
        });

        btn_right.on('mouseup touchend', function () {
            anim_right.stop();
        });

        $('#quick_view, #general_p_content').animate({scrollTop: '0px'}, 500);


        if (OVERALL_MODE) {

            var delete_modify = '<button id="replacesable_button_edit" style="width: 49%; margin-top: 10px; float: left" class="btn-sp btn" onclick="delete_element()">DELETE\n' +
                '              </button>' +
                '              <button id="replacesable_button_edit" style="width: 49%; margin-top: 10px; float: right" class="btn-sp btn" onclick="modify_element()">UPDATE\n' +
                '              </button>';
            var btn3 = document.getElementById('done-section-2');
            btn3 ? (btn3.outerHTML = delete_modify) : '';
        }
    });
}

function change_source(id) {
    product.clean();
    product.color_id = id;
    load_viewer(null, null, true);
    load_colors(product.product_id);
}

function load_colors(id) {
    $.ajax({
        url: '/catalog/product/colors?product_id=' + id,
        method: 'get',
        dataType: 'json',
        success: function (data) {

            if (data.length > 1) {
                var div_color_container = $('div#checkboxes-color');
                div_color_container.html('');

                for (var i = 0; i < data.length; i++) {
                    if (data[i].id.toString() === product.color_id.toString()) {
                        var a = data[i].code_hex;
                        a = a.substr(1, 6);

                        var red = parseInt(a.substring(0, 2), 16);
                        var green = parseInt(a.substring(2, 4), 16);
                        var blue = parseInt(a.substring(4, 6), 16);

                        var color = (((red * 0.299 + green * 0.587 + blue * 0.114) > 186) ? '#000000' : '#ffffff');

                        div_color_container.append('<div onclick="change_source(\'' + data[i].id + '\')" style="border: solid black 1px; background: ' + data[i].code_hex + '; width: 17px; height: 17px; margin-right: 5px; margin-bottom: 7px; float: left; cursor: pointer">' +
                            '<div style="position: relative; width: 17px; height: 17px;" id="color-picker" class="">' +
                            '<i style="position: absolute; margin: auto; top: 0; bottom: 0; left: 0; right: 0; color: ' + color + '" class="fa fa-check-circle-o" aria-hidden="true"></i>' +
                            '</div>' +
                            '</div>');
                    } else {
                        div_color_container.append('<div onclick="change_source(\'' + data[i].id + '\')" style="border: solid black 1px; position: relative; background: ' + data[i].code_hex + '; width: 17px; height: 17px; margin-right: 5px; margin-bottom: 7px; float: left; cursor: pointer">' +
                            '<div id="color-picker" class="">' +

                            '</div>' +
                            '</div>');
                    }
                }
            } else {
                try {
                    document.getElementById('checkboxes-color').outerHTML = '';
                    document.getElementById('removable-color-title').outerHTML = '';
                } catch (ex) {
                }
            }
        },
        error: function () {

        }
    });
}

function load_data_logos(logo_id, view) {
    ACTUAL_VIEW = product.views[view];
    if (ACTUAL_VIEW.konva_elements.logo) {
        ACTUAL_VIEW.konva_elements.logo.destroy();
        LAYER.draw();
    }
    product.views[view].logo_id = logo_id;
    load_viewer(null, view);
    ACTUAL_LOGO = ACTUAL_VIEW.konva_elements.logo;
}

function get_view_by_image(id) {
    for (var r = 0; r < product.views.length; r++) {
        if (product.views[r].picture_id === parseInt(id)) {
            return {id: r, view: product.views[r]}
        }
    }
}

function load_data_emblems(emblem_id, product_picture_id) {

    $.ajax({
        url: '/catalog/product/emblem?emblem_id=' + emblem_id,
        type: 'GET',
        dataType: 'json',
        data: {},
        success: function (data) {
            UPDATABLE_EMBLEM = {
                x: data.x,
                y: data.y,
                multiplexer: data.multiplexer,
                src: data.src
            };

            var view = get_view_by_image(data.product_image_id);

            if (view.view.position_emblem_id === emblem_id) {

                $('#emblem_btn_' + emblem_id).removeClass('selected_emblem');

                view.view.position_emblem_id = null;
                view.view.konva_elements.emblem ? view.view.konva_elements.emblem.destroy() : null;
                LAYER.draw();

                if (view.id > current_pointer) {
                    current_pointer = view.id;
                    var mover = -500 * current_pointer;
                    var animation_1 = new Konva.Animation(function (frame) {
                        var x = GROUP.getX();
                        if (x > mover) {
                            if (x - (50 * frame.time / 1000) < mover) {
                                GROUP.move({x: mover - x, y: 0});
                                animation_1.stop();
                            } else {
                                GROUP.move({x: -50 * frame.time / 1000, y: 0});
                            }
                        }
                    }, LAYER);
                    animation_1.start();
                } else if (view.id < current_view) {
                    current_pointer = view.id;
                    var mover = -500 * (current_pointer);
                    var animation_2 = new Konva.Animation(function (frame) {
                        var x = GROUP.getX();
                        if (x < mover && x < 0) {
                            if (x + (50 * frame.time / 1000) > mover) {
                                GROUP.move({x: mover - x, y: 0});
                                animation_2.stop();
                            } else {
                                GROUP.move({x: 50 * frame.time / 1000, y: 0});
                            }
                        }
                    }, LAYER);
                    animation_2.start();
                }

            } else {

                $('#emblem_btn_' + emblem_id).addClass('selected_emblem');

                view.view.position_emblem_id = emblem_id;
                load_viewer(null, view.id);

                if (view.id > current_pointer) {
                    current_pointer = view.id;
                    var mover = -500 * current_pointer;
                    var animation_1 = new Konva.Animation(function (frame) {
                        var x = GROUP.getX();
                        if (x > mover) {
                            if (x - (50 * frame.time / 1000) < mover) {
                                GROUP.move({x: mover - x, y: 0});
                                animation_1.stop();
                            } else {
                                GROUP.move({x: -50 * frame.time / 1000, y: 0});
                            }
                        }
                    }, LAYER);
                    animation_1.start();
                } else if (view.id < current_view) {
                    current_pointer = view.id;
                    var mover = -500 * (current_pointer);
                    var animation_2 = new Konva.Animation(function (frame) {
                        var x = GROUP.getX();
                        if (x < mover && x < 0) {
                            if (x + (50 * frame.time / 1000) > mover) {
                                GROUP.move({x: mover - x, y: 0});
                                animation_2.stop();
                            } else {
                                GROUP.move({x: 50 * frame.time / 1000, y: 0});
                            }
                        }
                    }, LAYER);
                    animation_2.start();
                }
            }
        },
        error: function (data) {

        }
    });
}

function start_over() {
    product.no_custom();
    load_viewer();
}

function clear_bag() {

    swal({
        title: "Are you sure?",
        text: "You are about to clear your bag!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    }).then((willDelete) => {
        if (willDelete) {
            $.ajax({
                url: '/clear_bag',
                method: 'delete',
                data: {},
                dataType: 'json',
                success: function (data) {
                    swal("Bag cleared!", {
                        icon: "success",
                    }).then((action) => {
                        location.reload(action);
                    });
                },
                error: function (data) {
                }
            })
        }
    });


}

function modify_element() {
    $.ajax({
        url: '/remove_from_cart',
        type: 'delete',
        dataType: 'json',
        data: {
            item_id: ACTUAL_CART_ITEM_EDIT
        },
        success: function (data) {

            addToCart();
        },
        error: function (data) {

        }
    });
}

function delete_element(id, bb, ft) {
    $.ajax({
        url: '/remove_from_cart',
        type: 'delete',
        dataType: 'json',
        data: {
            item_id: ACTUAL_CART_ITEM_EDIT || id
        },
        success: function (data) {

            var _a = bb ? '' : location.reload();
            if (ft) {
                location.href = '/';
            }
        },
        error: function (data) {

        }
    });
}

function load_view_1(_product) {

    current_view = 1;
    document.getElementById('view_1').outerHTML = view_1.outerHTML;

    if (OVERALL_MODE) {

        var delete_modify = '<button id="replacesable_button_edit" style="width: 49%; margin-top: 10px; float: left" class="btn-sp btn" onclick="delete_element()">DELETE\n' +
            '              </button>' +
            '              <button id="replacesable_button_edit" style="width: 49%; margin-top: 10px; float: right" class="btn-sp btn" onclick="modify_element()">UPDATE\n' +
            '              </button>';
        var btn1 = document.getElementById('replacesable_button_edit');
        btn1 ? (btn1.outerHTML = delete_modify) : null;
        var btn2 = document.getElementById('replacesable_second_button_edit');
        btn2 ? (btn2.outerHTML = delete_modify) : null;
    }

    if (!product.data.customizable) {
        document.getElementById('customize_btn').outerHTML = '';
    }

    load_colors(_product.id);

    var actor = document.getElementById('actor');
    var new_element = actor.cloneNode(true);
    new_element.addEventListener("click", function () {
        close_modal()
    });
    new_element.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';
    actor.parentNode.replaceChild(new_element, actor);

    document.getElementById('view_1').style.display = 'block';
    document.getElementById('view_2').style.display = 'none';
    document.getElementById('view_3').style.display = 'none';
    close_emblem_modal();

    document.getElementById('product_title').innerHTML = _product.title;
    document.getElementById('product_price').innerHTML = '$' + _product.price;
    var description = document.getElementById('product_description').getElementsByTagName('span');
    description[0].innerHTML = _product.description.substr(0, 30);
    description[2].innerHTML = _product.description.substr(30);

    $("#slide-left").prop("disabled", false);
    $("#slide-right").prop("disabled", false);

    if (GROUP) {
        GROUP.draggable(true);

        GROUP.dragBoundFunc(function (pos) {
            return {
                x: pos.x < 0 && pos.x > limit ? pos.x : this.getAbsolutePosition().x,
                y: this.getAbsolutePosition().y
            }
        });

        var p1 = 0;
        var p2 = 0;

        GROUP.on('dragstart mousedown', function () {
            p1 = STAGE.getPointerPosition();
        });

        GROUP.on('dragend mouseup', function () {
            p2 = STAGE.getPointerPosition();
            if ((p2.x - p1.x) / stage_scale < -50) {
                var mover = -500 * (current_pointer + 1);
                var once = true;
                var lim = 500 * (product.views.length - 1) * -1;
                var animation_1 = new Konva.Animation(function (frame) {
                    var x = GROUP.getX();
                    if (x > mover && x > lim) {
                        if (x - (50 * frame.time / 1000) < mover) {
                            GROUP.move({x: mover - x, y: 0});
                            animation_1.stop();
                        } else {
                            GROUP.move({x: -50 * frame.time / 1000, y: 0});
                        }
                        once ? current_pointer = current_pointer + 1 : null;
                        once = false;
                    } else if (x < mover && x < 0) {
                        if (x + (50 * frame.time / 1000) > mover) {
                            GROUP.move({x: mover - x, y: 0});
                            animation_1.stop();
                        } else {
                            GROUP.move({x: 50 * frame.time / 1000, y: 0});
                        }
                        once ? current_pointer = current_pointer + 1 : null;
                        once = false;
                    } else {
                        animation_1.stop();
                    }
                }, LAYER);
                animation_1.start();
            } else if ((p2.x - p1.x) / stage_scale > 50) {
                var mover = -500 * (current_pointer - 1);
                var once = true;
                var lim = 500 * (product.views.length - 1) * -1;
                var animation_2 = new Konva.Animation(function (frame) {
                    var x = GROUP.getX();
                    if (x < mover && x < 0) {
                        if (x + (50 * frame.time / 1000) > mover) {
                            GROUP.move({x: mover - x, y: 0});
                            animation_2.stop();
                        } else {
                            GROUP.move({x: 50 * frame.time / 1000, y: 0});
                        }
                        once ? current_pointer = current_pointer - 1 : null;
                        once = false;
                    } else if (x > mover && x > lim) {
                        if (x - (50 * frame.time / 1000) < mover) {
                            GROUP.move({x: mover - x, y: 0});
                            animation_2.stop();
                        } else {
                            GROUP.move({x: -50 * frame.time / 1000, y: 0});
                        }
                        once ? current_pointer = current_pointer - 1 : null;
                        once = false;
                    } else {
                        animation_2.stop();
                    }
                }, LAYER);
                animation_2.start();
            } else {
                var mover = -500 * current_pointer;
                var x = GROUP.getX();
                if (x > mover) {
                    var animation_3 = new Konva.Animation(function (frame) {
                        x = GROUP.getX();
                        if (x - (50 * frame.time / 1000) < mover) {
                            GROUP.move({x: mover - x, y: 0});
                            animation_3.stop();
                        } else if (x > mover) {
                            GROUP.move({x: -50 * frame.time / 1000, y: 0});
                        }
                    }, LAYER);
                    animation_3.start();
                } else if (x < mover) {
                    var animation_4 = new Konva.Animation(function (frame) {
                        x = GROUP.getX();
                        if (x + (50 * frame.time / 1000) > mover) {
                            GROUP.move({x: mover - x, y: 0});
                            animation_4.stop();
                        } else if (x < mover) {
                            GROUP.move({x: 50 * frame.time / 1000, y: 0});
                        }
                    }, LAYER);
                    animation_4.start();
                }
            }
        });
    }

    for (var i = 0; i < product.views.length; i++) {
        var temp_view = product.views[i].konva_elements.logo;
        if (temp_view) {
            temp_view.draggable(false);
        }
    }

    //More text for description toggle
    var state = true;
    $("#more-toggle").on('click', function () {
        if (state) {
            $(this).text("Read less");
            $(".complete").show();
            $("#dots").hide();
        } else {
            $(this).text("Read more");
            $(".complete").hide();
            $("#dots").show();
        }
        state = !state;
    });

    $.ajax({
        url: '/catalog/product/sizes?product_id=' + _product.id,
        type: 'GET',
        dataType: 'json',
        data: {},
        success: function (data) {

            var carousel_jq = $('ul#container-sizes');
            carousel_jq.innerHTML = "";

            for (var i = 0; i < data.length; i++) {
                carousel_jq.append('<li><span style="font-size: 15px" id="' + data[i].id + '" onclick="changeSize(\'' + data[i].id + '\')" class="badge badge-size text_light ' + ((OVERALL_MODE && product.size_id === data[i].id) ? 'badge_selected' : '') + '">' + data[i].title + '</span></li>');
            }

            var jcarouselSelector = '.jcarousel';

            $(jcarouselSelector).reloadJcarousel();

            $('.jcarousel-control-prev').jcarouselControl({
                // Options go here
                target: '-=1'
            });
            $('.jcarousel-control-next').jcarouselControl({
                // Options go here
                target: '+=1'
            });
            $('div#preview_size_cr_carousel').jcarousel('reload');

        },
        error: function (data) {

        }
    });

    $.ajax({
        url: '/catalog/product/presets?product_id=' + _product.id,
        type: 'GET',
        dataType: 'json',
        data: {},
        success: function (data) {


            if (data.length > 0) {

                var carousel_jq = $('ul#container-presets');

                for (var i = 0; i < data.length; i++) {
                    carousel_jq.append('<li><div onclick="load_data_preset(\'' + data[i].color_id + '\', \'' + data[i].logo_id + '\', \'' + data[i].x + '\', \'' + data[i].y + '\', \'' + data[i].multiplexer + '\', \'' + data[i].picture_id + '\');" style="width: 70px; height: 70px" id="div_preview_' + data[i].id + '"></div></li>');
                    if (data[i].id === id_preset_temp) {
                        load_data_preset(data[i].color_id, data[i].logo_id, data[i].x, data[i].y, data[i].multiplexer, data[i].picture_id);
                        id_preset_temp = null;
                    }
                }

                for (var t = 0; t < data.length; t++) {
                    create_preview(data[t]);
                }

                var jcarouselSelector = '.jcarousel';

                $(jcarouselSelector).reloadJcarousel();

                $('.jcarousel-control-prev').jcarouselControl({
                    // Options go here
                    target: '-=1'
                });
                $('.jcarousel-control-next').jcarouselControl({
                    // Options go here
                    target: '+=1'
                });
                $('div#preview_preset_cr_carousel').jcarousel('reload');
            } else {
                $('.customizable_presets').each(function (i, element) {
                    element.outerHTML = '';
                })
            }
        },
        error: function (data) {

        }
    });

    function create_preview(preview) {
        var selector = 'div_preview_' + preview.id;
        var container = document.getElementById(selector);

        var stage = new Konva.Stage({
            container: selector,
            width: 70,
            height: 70,
            preventDefault: false
        });

        var layer = new Konva.Layer();
        
        layer.preventDefault(false);
        
        stage.add(layer);

        var baseImg = new Konva.Image({
            x: 0,
            y: 0,
            width: 70,
            height: 70,
            preventDefault: false
        });

        layer.add(baseImg);

        var logoImg = new Konva.Image({
            x: (70 * preview.x) / 500,
            y: (70 * preview.y) / 500,
            preventDefault: false
        });
        layer.add(logoImg);

        var imageBase = new Image();
        imageBase.onload = function () {
            baseImg.image(imageBase);
            layer.draw();
        };

        var imageLogo = new Image();
        imageLogo.onload = function () {
            logoImg.image(imageLogo);
            logoImg.setWidth(this.width);
            logoImg.setHeight(this.height);
            logoImg.scale({
                x: (70 * preview.multiplexer) / 500,
                y: (70 * preview.multiplexer) / 500
            });
            layer.draw()
        };
        
        zoomInFunction(layer, stage);
        
        $.ajax({
            url: '/catalog/product/color/main_image?color_id=' + preview.color_id,
            type: 'GET',
            dataType: 'json',
            data: {},
            success: function (data) {
                imageBase.src = data.picture
            },
            error: function (data) {

            }
        });

        $.ajax({
            url: '/catalog/product/logo?logo_id=' + preview.logo_id,
            type: 'GET',
            dataType: 'text',
            data: {},
            success: function (data) {
                imageLogo.src = data
            },
            error: function (data) {

            }
        });
    }

    var iconShow = $("#icon-show");
    var iconHide = $("#icon-hide");
    var loader = $("#icon_loader");

    iconShow.click(function () {
        loader.animate({
            height: 40
        }, 100, function () {
            loader.css({
                overflow: 'visible'
            });
        });
        iconShow.addClass(" hidden");
        iconHide.removeClass(" hidden");
    });

    iconHide.click(function () {
        loader.animate({
            height: 0
        }, 100, function () {
            loader.css({
                overflow: 'hidden'
            });
        });
        iconHide.addClass(" hidden");
        iconShow.removeClass(" hidden");
    });

    var logoShow = $("#icon-show-logo");
    var logoHide = $("#icon-hide-logo");
    var loader_logo = $("#icon_loader_logo");

    logoShow.click(function () {
        loader_logo.animate({
            height: 80
        }, 200, function () {
            loader_logo.css({
                overflow: 'visible'
            });
        });
        logoShow.addClass(" hidden");
        logoHide.removeClass(" hidden");
    });

    logoHide.click(function () {
        loader_logo.animate({
            height: 0
        }, 200, function () {
            loader_logo.css({
                overflow: 'hidden'
            });
        });
        logoHide.addClass(" hidden");
        logoShow.removeClass(" hidden");
    });
}

function addToCart() {

    if (product.size_id !== null) {

        $.ajax({
            type: "POST",
            url: "/add_cart",
            data: {
                product: product.send_info()
            },
            success: function (data, status, xhr) {
                modal_quick.style.display = "none";
                $("body").removeClass("modal-open");
                $('body').css('overflow', 'auto');
                $('body').css('position', 'relative');
                OVERALL_MODE = false;
                location.href = '/shopping_bag';
            },
            dataType: 'json'
        });
    } else {
        swal("Something went wrong", "Select a size for your product!", "error");
        load_view_1(product.data);
    }
}

function changeSize(id) {

    var spans = document.getElementById('container-sizes').getElementsByTagName('span');
    product.size_id = id;

    for (var i = 0; i < spans.length; i++) {
        if (spans[i].id === id) {
            $(spans[i]).addClass('badge_selected');
        } else {
            $(spans[i]).removeClass('badge_selected');
        }
    }
}

//Auto//


// End Fifth Script

// Sixth Script



// End Sixth Script

// Zoom in function
// function zoomInFunction(layer, stage) {
//     console.log("zoom in");
//     var zoomLevel = 2;
//     layer.on('mouseenter', function () {
//         layer.scale({
//             x: zoomLevel,
//             y: zoomLevel
//         });
//         layer.draw();
//     });

//     layer.on('mousemove', function (e) {
//         var pos = stage.getPointerPosition();
//         layer.x(-(pos.x));
//         layer.y(-(pos.y));
//         layer.draw();
//     });

//     layer.on('mouseleave', function () {
//         layer.x(0);
//         layer.y(0);
//         layer.scale({
//             x: 1,
//             y: 1
//         });
//         layer.draw();
//     });
//     console.log("end zoom in");
// }
// End Zoom in Function
