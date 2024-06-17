    
mapboxgl.accessToken = 'pk.eyJ1IjoiYWNjdXdlYXRoZXItaW5jIiwiYSI6ImNqeGtxeDc4ZDAyY2czcnA0Ym9ubzh0MTAifQ.HjSuXwG2bI05yFYmc0c9lw';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    zoom: 12,
    center: [108.979324, 11.602108],
});

map.on('style.load', function() {
    // layer lớp nền
    functionlayer.addVectorNenLayer('district-layer','bgmap_district_odaninhthuan',2);
    functionlayer.addVectorNenLayer('commune-layer','bgmap_commune_odaninhthuan',3);
    functionlayer.addVectorNenLayer('province-layer','bgmap_province_odaninhthuan',1);
    // layer hệ thống thoát nước mưa
        // cải tạo kênh tấn tài
        functionlayer.addVectorLayer('kenh-tantai', 'iw_canal', 'line', null, '#DB5347', ["==", 'duan_ref', "d1ed5711-db87-4ff8-8d22-b248e464b25f"], 2, null);
        functionlayer.addVectorLayer('coc-tantai', 'iw_coc', 'symbol', null, null , ['==', 'duan_ref', 'd1ed5711-db87-4ff8-8d22-b248e464b25f'], null, 'layer_coc');
        functionlayer.addVectorLayer('cong-tantai', 'iw_irrigation_sewer', 'symbol', null, null , ['==', 'duan_ref', 'd1ed5711-db87-4ff8-8d22-b248e464b25f'], null, 'layer_cong');
        functionlayer.addVectorLayer('hoga-tantai', 'iw_hoga', 'symbol', null, null, ["==", ["get", "thuockenh"], "TT6"], null, 'layer_hoga');
        // cải tạo kênh chà là
        functionlayer.addVectorLayer('kenh-chala', 'iw_canal', 'line', null, '#DB5347', ["==", 'duan_ref', "f80f5fcf-0d70-4840-a3a3-119c47f7986d"], 2, null);
        // Cải tạo kênh Đông Nam
        functionlayer.addVectorLayer('kenh-dongnam', 'iw_canal', 'line', null, '#DB5347', ["==", 'duan_ref', "5b97f8fc-bf56-4332-91ec-e04f14a99685"], 2, null);
        // Cải tạo kênh Nhị Phước
        functionlayer.addVectorLayer('kenh-nhiphuoc', 'iw_canal', 'line', null, '#DB5347', ["==", 'duan_ref', "d795c8b6-8c61-408c-9b12-6fedf87518a2"], 2, null);
        // Cải tạo kênh th05
        functionlayer.addVectorLayer('kenh-th5', 'iw_canal', 'line', null, '#DB5347', ["==", 'ten', "Kênh TH5"], 2, null);
        functionlayer.addVectorLayer('cong-th5', 'iw_irrigation_sewer', 'symbol', null, null , ['==', 'duan_ref', '50c2ed36-9f8e-4c62-92d1-78a755fc32f1'], null, 'layer_cong');
        
        // xay dung ho dieu hoa trung tam
        functionlayer.addVectorLayer('hotrungtam', 'iw_reservoir', 'fill', null, '#75cff0', ["==", ["get", "ten"], "Hồ Trung Tâm"], 2, null);
        functionlayer.addVectorLayer('congtrungtam', 'iw_irrigation_sewer', 'symbol', null, null, ["==","thuocho", "Hồ Trung Tâm"], null, 'layer_cong');
        // cai tap ho dong hai
        functionlayer.addVectorLayer('hodonghai', 'iw_reservoir', 'fill', null, '#75cff0', ["==", ["get", "ten"], "Hồ Đông Hải"], 2, null);
        functionlayer.addVectorLayer('congdonghai', 'iw_irrigation_sewer', 'symbol', null, null , ['all', ["==","thuocho", "Hồ Đông Hải"] , ["==","loaicongten", "Cống xả"] ], null, 'layer_cong');
        functionlayer.addVectorLayer('hoga-hodonghai', 'iw_hoga', 'symbol', null, null, ["==", ["get", "duan_ref"], "34fa83a6-3c32-4adf-a0ff-a55c8b8858b0"], null, 'layer_hoga');
        // Xây dựng các tuyến cống cấp 2 chống ngập úng
        functionlayer.addVectorLayer('congchongngaplutcap2', 'iw_irrigation_sewer', 'line', null, '#c37f7f', ["==","capcong", "Cấp 2"], 2, null);
        functionlayer.addVectorLayer('congchongngapluthoga', 'iw_irrigation_sewer', 'symbol', null, null , ["==","capcong", "Cấp 2"], null, 'layer_hoga');

    // layer xây dựng hệ thống thu gom nước thải
        // Tuyến cống bao kênh Tấn Tài
        functionlayer.addVectorLayer('ho-ga-tantai', 'iw_hoga', 'symbol', null, null , ["==", ["get", "duan_ref"], "4de45510-4c5c-407c-ad50-3469a341961f"], null , 'layer_hoga');
        functionlayer.addVectorLayer('cong-bao-tantai', 'iw_irrigation_sewer', 'line', null, '#DB5347', ["==", ["get", "duan_ref"], "4de45510-4c5c-407c-ad50-3469a341961f"], 2, null);
        // Tuyến cống bao kênh Chà là
        functionlayer.addVectorLayer('cong-bao-chala', 'iw_irrigation_sewer', 'line', null, '#DB5347', ["==", ["get", "ten"], "Tuyến cống Chà Là"], 2, null);
        functionlayer.addVectorLayer('ho-ga-bao-chala', 'iw_hoga', 'symbol', null, null, ["==", ["get", "duan_ref"], "9df31015-17ce-4145-8ff9-7695c83b5650"], null , 'layer_hoga');
        functionlayer.addVectorLayer('cong-bao-3-chala', 'iw_irrigation_sewer', 'symbol', null, null,['all',  ["==", ["get", "capcong"], "Cấp 3"] , ["==", ["get", "duan_ref"], "9df31015-17ce-4145-8ff9-7695c83b5650"]],null, 'layer_cong');
        // tuyến cống bao kênh Nhị Phước
        functionlayer.addVectorLayer('cong-bao-nhiphuoc', 'iw_irrigation_sewer', 'line', null, '#DB5347', ["==", ["get", "ten"], "Tuyến cống Nhị Phước"], 2, null);
        functionlayer.addVectorLayer('ho-ga-nhiphuoc', 'iw_hoga', 'symbol', null, null , ["==", ["get", "ten"], "Hố ga Nhị Phước"], null , 'layer_hoga');
        //mạng lưới thu gom nước thải
            // phường Đồng Hải
        functionlayer.addVectorLayer('tuyen-cong-donghai', 'iw_irrigation_sewer', 'line', null, '#DB5347', ["==", ["get", "ten"], "Tuyến công Đông Hải"], 2, null);
        functionlayer.addVectorLayer('ho-ga-phuongdonghai', 'iw_hoga', 'symbol', null, null , ["==", ["get", "ten"], "Hố ga C3 Đông Hải"],  null , 'layer_hoga');
            // Hồ Đồng Hải
        functionlayer.addVectorLayer('tuyen-cong-hodonghai', 'iw_irrigation_sewer', 'line', null, '#DB5347', ['all' , ["==", ["get", "ten"], "Cống bao"], ["==", ["get", "thuocho"], "Hồ Đông Hải"]], 2, null);
        functionlayer.addVectorLayer('ho-ga-hodonghai', 'iw_hoga', 'symbol', null, null , ["==", ["get", "duan_ref"], "3573f303-11d2-4b69-9626-b5b8ce92b844"], null , 'layer_hoga');
        // Cống áp lực HPDE
        functionlayer.addVectorLayer('tuyen-cong-hpde', 'iw_irrigation_sewer', 'line', null, '#DB5347', ["==", ["get", "duan_ref"], "abcb545c-1621-4958-a538-70a5f717f675"], 2, null);
        // Nhà máy sử lý nước thải Phan Rang - Tháp Chàm
        functionlayer.addVectorLayer('nha-may-nt', 'iw_nhamayxulynuocthai', 'symbol', null, null , null , 2, 'layer_nhamay');
        // giếng tách nước thải
        functionlayer.addVectorLayer('gieng-tach-nc-thai', 'iw_gieng', 'symbol', null, null , null , 2, 'layer_gieng');
        // bơm nước thải
        functionlayer.addVectorLayer('bom-nc-thai', 'iw_pump_station', 'symbol', null, null , ["==", ["get", "tinh_id"], "58"] , 2, 'layer_trambom');

    //Hệ thống kết nối đô thị
        functionlayer.addVectorLayer('tim-duong', 'iw_timduong', 'line', null, '#aab9c9', null , 2, null);

        functionlayer.addVectorLayer('vuot-noi', 'iw_vuotnoi', 'fill', null, '#8ba5c1', null , 2, null);

        functionlayer.addVectorLayer('boviahe','iw_boviaviahe','line', null, '#c47583', ["==", ["get", "loaigeom"], "polygon"], 2, null);
        functionlayer.addVectorLayer('viahe','iw_boviaviahe','line', null, '#8ea4a1', ["==", ["get", "loaigeom"], "line"], 2, null);

        //thoát nước mưa
        functionlayer.addVectorLayer('cong-thoat-nm', 'iw_irrigation_sewer', 'line', null, '#c37f7f' , ["==", ["get", "duan_ref"], "99bdce55-09ae-4dd7-a654-ffcc0deed782"], 2 , null);
        functionlayer.addVectorLayer('hoga-thoat-nm', 'iw_hoga', 'symbol', null, null , ["==", ["get", "duan_ref"], "99bdce55-09ae-4dd7-a654-ffcc0deed782"], null, 'layer_hoga');
        //thoat nuoc thai
        functionlayer.addVectorLayer('cong-thoat-nt', 'iw_irrigation_sewer', 'line', null, '#c37f7f' , ["==", ["get", "duan_ref"], "ca05715f-632f-419f-afca-c3066898534e"], 2, null);
        functionlayer.addVectorLayer('hoga-thoat-nt', 'iw_hoga', 'symbol', null, null , ["==", ["get", "duan_ref"], "ca05715f-632f-419f-afca-c3066898534e"], null, 'layer_hoga');
        

        functionlayer.addVectorLayer('duong-ong', 'iw_duongong', 'line', null, '#c37f7f', null , 2, null);
        functionlayer.addVectorLayer('cong-cap-nc', 'iw_irrigation_sewer', 'symbol', null, null , ["==", ["get", "duan_ref"], "0b4942a8-0a66-4823-88a0-a9087e9ea493"], null , 'layer_cong');
        functionlayer.addVectorLayer('tru-cuu-hoa-nc', 'iw_trucuuhoa', 'symbol', null, null , null , 2, 'layer_trucuuhoa');
        
        functionlayer.addVectorLayer('ho-tham-cnkt', 'iw_irrigation_sewer', 'symbol', null, null, ["all",["==", ["get", "loaicongten"], "Hố thăm"] , ["==", ["get", "duan_ref"], "9a4aba0a-dc35-4dd2-8ab3-7531b394e58b"]], null , 'layer_hotham');
        functionlayer.addVectorLayer('tuyen-cong-cnkt', 'iw_irrigation_sewer', 'line', null, '#c37f7f', ["all",["==", ["get", "loaicongten"], "Cống dạng tuyến"] , ["==", ["get", "duan_ref"], "9a4aba0a-dc35-4dd2-8ab3-7531b394e58b"]], 2, null);

        functionlayer.addVectorLayer('ho-trong-cay', 'iw_hotrongcay', 'symbol', null, null , null , null, 'layer_hotrongcay');

        functionlayer.addVectorLayer('duong-chieu-sang', 'iw_denchieusang', 'line', null, '#f4c32e', ["==", ["get", "loaiden"], "1"] , 2, null);
        functionlayer.addVectorLayer('tru-chieu-sang', 'iw_denchieusang', 'symbol', null, null , ["==", ["get", "loaiden"], "2"] , null, 'layer_truden');
        functionlayer.addVectorLayer('tram-chieu-sang', 'iw_denchieusang', 'symbol', null, null , ["==", ["get", "loaiden"], "4"] , null, 'layer_trambienap');
        functionlayer.addVectorLayer('tu-dien-chieu-sang', 'iw_denchieusang', 'symbol', null, null , ["==", ["get", "loaiden"], "3"] , null, 'layer_tudien');


    // layer hệ thống quan trắc
    functionlayer.addVectorLayer('quan-trac-diem-ngap', 'iw_diemngap', 'circle', null, '#a3a3a3', null , 3, null);
    
    
});


$(document).ready(function() {
    $('#style-selector img').on('click', function() {
        var newStyle = $(this).data('style');
        $('#style-selector img').removeClass('selected');
        $(this).addClass('selected');
        $('#current-style img').attr('src', $(this).attr('src'));
        $('#current-style img').data('style', newStyle);
        if (newStyle.startsWith('http')) {
            map.setStyle({
                "version": 8,
                "sources": {
                    "esri-basemap": {
                        "type": "raster",
                        "tiles": [
                            `${newStyle}/tile/{z}/{y}/{x}`
                        ],
                        "tileSize": 256
                    }
                },
                "layers": [
                    {
                        "id": "esri-basemap",
                        "type": "raster",
                        "source": "esri-basemap"
                    }
                ]
            });
        } else {
            map.setStyle(newStyle);
        }
    });

    // Initially set the first style as selected
    $('#current-style img').first().addClass('selected');
});


function isNullOrEmpty(value) {
    return value === undefined || value === null || value === '';
}
function setLayerVisibilitycb(layerId, isVisible) {
    const labelLayerId = layerId + "-labels";
    const labelLayer = map.getLayer(labelLayerId);
    if (labelLayer) {
        map.setLayoutProperty(labelLayerId, 'visibility', isVisible ? 'visible' : 'none');
    }
    if(!isNullOrEmpty(layerId)){
        map.setLayoutProperty(layerId, 'visibility', isVisible ? 'visible' : 'none');
    }else{
    }
}

// checkbox , toggle layer
// với bậc 4
$(document).ready(function() {
    $('.accordion-4').each(function() {
        var $accordion = $(this);
        
        $accordion.find('.great-grandma').change(function() {
            var isChecked = $(this).is(':checked');
            $accordion.find('.grandma, .parent, .child').prop('checked', isChecked);
            // ẩn layer
            $accordion.find('.grandma, .parent, .child').each(function() {
                setLayerVisibilitycb($(this).data('layer'),isChecked);
            });
            //
        });

        $accordion.find('.grandma').change(function() {
            var isChecked = $(this).is(':checked');
            $(this).closest('.grandma-container').siblings('.parent-container').find('.parent, .child').prop('checked', isChecked);
            // ẩn layer
            $(this).closest('.grandma-container').siblings('.parent-container').find('.parent, .child').each(function() {
                setLayerVisibilitycb($(this).data('layer'),isChecked);
            });
            //
            if (isChecked) {
                $accordion.find('.great-grandma').prop('checked', true);
            } else {
                var allGrandmasUnchecked = $accordion.find('.grandma').length === $accordion.find('.grandma:not(:checked)').length;
                if (allGrandmasUnchecked) {
                    $accordion.find('.great-grandma').prop('checked', false);
                }
            }
        });

        $accordion.find('.parent').change(function() {
            var isChecked = $(this).is(':checked');
            $(this).siblings('.child-container').find('.child').prop('checked', isChecked);
            // ẩn layer
            $(this).siblings('.child-container').find('.child').each(function() {
                setLayerVisibilitycb($(this).data('layer'),isChecked);
            });
            //
            if (isChecked) {
                $(this).closest('.grandma-container').find('.grandma').prop('checked', true);
                $accordion.find('.great-grandma').prop('checked', true);
            } else {
                var allParentsUnchecked = $(this).closest('.parent-container').find('.parent').length === $(this).closest('.parent-container').find('.parent:not(:checked)').length;
                if (allParentsUnchecked) {
                    $(this).closest('.grandma-container').find('.grandma').prop('checked', false);
                    var allGrandmasUnchecked = $accordion.find('.grandma').length === $accordion.find('.grandma:not(:checked)').length;
                    if (allGrandmasUnchecked) {
                        $accordion.find('.great-grandma').prop('checked', false);
                    }
                }
            }
        });

        $accordion.find('.child').change(function() {
            // ẩn layer
            var isChecked = $(this).is(':checked');
            setLayerVisibilitycb($(this).data('layer'),isChecked);
            //

            var $childContainer = $(this).closest('.child-container');
            var allSiblingsUnchecked = $childContainer.find('.child').length === $childContainer.find('.child:not(:checked)').length;
            if ($(this).is(':checked')) {
                $childContainer.siblings('.parent').prop('checked', true);
                $childContainer.closest('.grandma-container').find('.grandma').prop('checked', true);
                $accordion.find('.great-grandma').prop('checked', true);
            } else if (allSiblingsUnchecked) {
                $childContainer.siblings('.parent').prop('checked', false);

                var allParentsUnchecked = $childContainer.closest('.parent-container').find('.parent').length === $childContainer.closest('.parent-container').find('.parent:not(:checked)').length;
                if (allParentsUnchecked) {
                    $childContainer.closest('.grandma-container').find('.grandma').prop('checked', false);

                    var allGrandmasUnchecked = $accordion.find('.grandma').length === $accordion.find('.grandma:not(:checked)').length;
                    if (allGrandmasUnchecked) {
                        $accordion.find('.great-grandma').prop('checked', false);
                    }
                }
            }
        });
    });
});


// với bậc 3

$(document).ready(function() {
    $('.accordion-3').each(function() {
        var $accordion = $(this);
        
        $accordion.find('.grandma').change(function() {
            var isChecked = $(this).is(':checked');
            $accordion.find('.parent, .child').prop('checked', isChecked);
            // ẩn layer
            $accordion.find('.parent, .child').each(function() {
                setLayerVisibilitycb($(this).data('layer'),isChecked);
            });
            //
        });

        $accordion.find('.parent').change(function() {
            var isChecked = $(this).is(':checked');

            $(this).closest('.parent-container').siblings('.child-container').find('.child').prop('checked', isChecked);
            // ẩn layer
            $(this).closest('.parent-container').siblings('.child-container').find('.child').each(function() {
                setLayerVisibilitycb($(this).data('layer'),isChecked);
            });
            //
            if (isChecked) {
                $accordion.find('.grandma').prop('checked', true);
            } else {
                var allParentsUnchecked = $accordion.find('.parent').length === $accordion.find('.parent:not(:checked)').length;
                if (allParentsUnchecked) {
                    $accordion.find('.grandma').prop('checked', false);
                }
            }
        });

        $accordion.find('.child').change(function() {
            // ẩn layer
            var isChecked = $(this).is(':checked');
            setLayerVisibilitycb($(this).data('layer'),isChecked);
            //
            var $childContainer = $(this).closest('.child-container');
            var allSiblingsUnchecked = $childContainer.find('.child').length === $childContainer.find('.child:not(:checked)').length;

            if ($(this).is(':checked')) {
                $childContainer.siblings('.parent-container').find('.parent').prop('checked', true);
                $accordion.find('.grandma').prop('checked', true);
            } else if (allSiblingsUnchecked) {
                $childContainer.siblings('.parent-container').find('.parent').prop('checked', false);

                var allParentsUnchecked = $accordion.find('.parent').length === $accordion.find('.parent:not(:checked)').length;
                if (allParentsUnchecked) {
                    $accordion.find('.grandma').prop('checked', false);
                }
            }
        });
    });
});

function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
};

var hoverTimeout;

// Tạo popup
var popup = new mapboxgl.Popup({
    closeButton: true,
    closeOnClick: true
});

// Xử lý sự kiện hover
map.on('mouseenter', 'ho-ga-tantai', function (e) {
    // Thay đổi cursor khi hover vào layer
    map.getCanvas().style.cursor = 'pointer';
    hoverTimeout = setTimeout(function() {
    // Lấy tọa độ và mô tả từ feature
    var coordinates = e.features[0].geometry.coordinates.slice();
    var infor = e.features[0].properties;

    // Thiết lập nội dung và vị trí cho popup
    popup.setLngLat(coordinates)
        .setHTML( 
                        "<table class='popup-table'>" +
                        "<tr><th colspan='2'><strong>" + infor.ten + "</strong></th></tr>" +
                        "<tr><td>Thuộc kênh:</td><td>" + infor.thuockenh + "</td></tr>" +
                        "<tr><td>Gói thầu:</td><td>" + infor.goithau + "</td></tr>" +
                        "<tr><td>Loại hố ga:</td><td>" + infor.loaihoga + "</td></tr>" +
                        "</table>"
                  )
        .addTo(map);
    },800);
});
map.on('mouseleave', 'ho-ga-tantai', function() {
    map.getCanvas().style.cursor = '';
    clearTimeout(hoverTimeout);
});

map.on('mouseenter', 'ho-ga-bao-chala', function (e) {

    map.getCanvas().style.cursor = 'pointer';
    hoverTimeout = setTimeout(function() {

    var coordinates = e.features[0].geometry.coordinates.slice();
    var infor = e.features[0].properties;

    popup.setLngLat(coordinates)
        .setHTML( 
                        "<table class='popup-table'>" +
                        "<tr><th colspan='2'><strong>" + infor.ten + "</strong></th></tr>" +
                        "<tr><td>Chiều cao:</td><td>" + infor.chieucao + "</td></tr>" +
                        "<tr><td>Loại hố ga:</td><td>" + infor.loaihoga + "</td></tr>" +
                        "</table>"
                  )
        .addTo(map);
    },800);
});
map.on('mouseleave', 'ho-ga-bao-chala', function() {
    map.getCanvas().style.cursor = '';
    clearTimeout(hoverTimeout);
});

map.on('mouseenter', 'ho-ga-nhiphuoc', function (e) {

    map.getCanvas().style.cursor = 'pointer';
    hoverTimeout = setTimeout(function() {

    var coordinates = e.features[0].geometry.coordinates.slice();
    var infor = e.features[0].properties;

    popup.setLngLat(coordinates)
        .setHTML( 
                        "<table class='popup-table'>" +
                        "<tr><th colspan='2'><strong>" + infor.ten + "</strong></th></tr>" +
                        "<tr><td>Thuộc kênh:</td><td>" + infor.thuockenh + "</td></tr>" +
                        "<tr><td>Gói thầu:</td><td>" + infor.goithau + "</td></tr>" +
                        "<tr><td>Chiều cao:</td><td>" + infor.chieucao + "</td></tr>" +
                        "<tr><td>Cao độ mặt đất:</td><td>" + infor.caodomatdat + "</td></tr>" +
                        "<tr><td>Loại hố ga:</td><td>" + infor.loaihoga + "</td></tr>" +
                        "</table>"
                  )
        .addTo(map);
    },800);
});
map.on('mouseleave', 'ho-ga-nhiphuoc', function() {
    map.getCanvas().style.cursor = '';
    clearTimeout(hoverTimeout);
});

map.on('mouseenter', 'ho-ga-phuongdonghai', function (e) {

    map.getCanvas().style.cursor = 'pointer';
    hoverTimeout = setTimeout(function() {

    var coordinates = e.features[0].geometry.coordinates.slice();
    var infor = e.features[0].properties;
    

    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }


    popup.setLngLat(coordinates)
        .setHTML( 
                        "<table class='popup-table'>" +
                        "<tr><th colspan='2'><strong>" + infor.ten + "</strong></th></tr>" +
                        "<tr><td>Thuộc kênh:</td><td>" + infor.thuockenh + "</td></tr>" +
                        "<tr><td>Gói thầu:</td><td>" + infor.goithau + "</td></tr>" +
                        "<tr><td>Chiều cao:</td><td>" + infor.chieucao + "</td></tr>" +
                        "<tr><td>Loại hố ga:</td><td>" + infor.loaihoga + "</td></tr>" +
                        "</table>"
                  )
        .addTo(map);
    },800);
});
map.on('mouseleave', 'ho-ga-phuongdonghai', function() {
    map.getCanvas().style.cursor = '';
    clearTimeout(hoverTimeout);
});

map.on('mouseenter', 'ho-ga-hodonghai', function (e) {

    map.getCanvas().style.cursor = 'pointer';
    hoverTimeout = setTimeout(function() {

    var coordinates = e.features[0].geometry.coordinates.slice();
    var infor = e.features[0].properties;
    

    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }


    popup.setLngLat(coordinates)
        .setHTML( 
                        "<table class='popup-table'>" +
                        "<tr><th colspan='2'><strong>" + infor.ten + "</strong></th></tr>" +
                        "<tr><td>Thuộc hồ:</td><td>" + infor.thuocho + "</td></tr>" +
                        "<tr><td>Gói thầu:</td><td>" + infor.goithau + "</td></tr>" +
                        "<tr><td>Loại hố ga:</td><td>" + infor.loaihoga + "</td></tr>" +
                        "</table>"
                  )
        .addTo(map);
    },800);
});
map.on('mouseleave', 'ho-ga-hodonghai', function() {
    map.getCanvas().style.cursor = '';
    clearTimeout(hoverTimeout);
});

map.on('mouseenter', 'ho-ga-phuongdonghai', function (e) {

    map.getCanvas().style.cursor = 'pointer';
    hoverTimeout = setTimeout(function() {

    var coordinates = e.features[0].geometry.coordinates.slice();
    var infor = e.features[0].properties;
    

    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }


    popup.setLngLat(coordinates)
        .setHTML( 
                        "<table class='popup-table'>" +
                        "<tr><th colspan='2'><strong>" + infor.ten + "</strong></th></tr>" +
                        "<tr><td>Thuộc kênh:</td><td>" + infor.thuockenh + "</td></tr>" +
                        "<tr><td>Gói thầu:</td><td>" + infor.goithau + "</td></tr>" +
                        "<tr><td>Chiều cao:</td><td>" + infor.chieucao + "</td></tr>" +
                        "<tr><td>Loại hố ga:</td><td>" + infor.loaihoga + "</td></tr>" +
                        "</table>"
                  )
        .addTo(map);
    },800);
});
map.on('mouseleave', 'ho-ga-phuongdonghai', function() {
    map.getCanvas().style.cursor = '';
    clearTimeout(hoverTimeout);
});

map.on('mouseenter', 'cong-bao-tantai', function (e) {

    map.getCanvas().style.cursor = 'pointer';
    hoverTimeout = setTimeout(function() {

    var coordinates = e.features[0].geometry.coordinates.slice();
    var infor = e.features[0].properties;

    popup.setLngLat(e.lngLat)
        .setHTML( 
                        "<table class='popup-table'>" +
                        "<tr><th colspan='2'><strong>" + infor.ten + "</strong></th></tr>" +
                        "<tr><td>Kích thước:</td><td>" + infor.kichthuoc + "</td></tr>" +
                        "<tr><td>Thuộc kênh:</td><td>" + infor.thuockenh + "</td></tr>" +
                        "<tr><td>Gói thầu:</td><td>" + infor.goithau + "</td></tr>" +
                        "<tr><td>Điểm đầu:</td><td>" + infor.diemdau + "</td></tr>" +
                        "<tr><td>Điểm cuối:</td><td>" + infor.diemcuoi + "</td></tr>" +
                        "</table>"
                  )
        .addTo(map);
    },800);
});
map.on('mouseleave', 'cong-bao-tantai', function() {
    map.getCanvas().style.cursor = '';
    clearTimeout(hoverTimeout);
});

map.on('mouseenter', 'cong-bao-chala', function (e) {

    map.getCanvas().style.cursor = 'pointer';
    hoverTimeout = setTimeout(function() {

    var coordinates = e.features[0].geometry.coordinates.slice();
    var infor = e.features[0].properties;

    popup.setLngLat(e.lngLat)
        .setHTML( 
                        "<table class='popup-table'>" +
                        "<tr><th colspan='2'><strong>" + infor.ten + "</strong></th></tr>" +
                        "<tr style='border-bottom: 1px solid;'><td>Vị trí:</td><td>" + infor.vitri + "</td></tr>" +
                        "<tr><td>Kích thước:</td><td>" + infor.kichthuoc + "</td></tr>" +
                        "<tr><td>Gói thầu:</td><td>" + infor.goithau + "</td></tr>" +
                        "<tr><td>Điểm đầu:</td><td>" + infor.diemdau + "</td></tr>" +
                        "<tr><td>Điểm cuối:</td><td>" + infor.diemcuoi + "</td></tr>" +
                        "</table>"
                  )
        .addTo(map);
    },800);
});
map.on('mouseleave', 'cong-bao-chala', function() {
    map.getCanvas().style.cursor = '';
    clearTimeout(hoverTimeout);
});

map.on('mouseenter', 'cong-bao-3-chala', function (e) {

    map.getCanvas().style.cursor = 'pointer';
    hoverTimeout = setTimeout(function() {

    var coordinates = e.features[0].geometry.coordinates.slice();
    var infor = e.features[0].properties;
    

    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }


    popup.setLngLat(coordinates)
        .setHTML( 
                        "<table class='popup-table'>" +
                        "<tr><th colspan='2'><strong>" + infor.ten + "</strong></th></tr>" +
                        "<tr><td>Kích thước:</td><td>" + infor.kichthuoc + "</td></tr>" +
                        "<tr><td>Thuộc kênh:</td><td>" + infor.thuockenh + "</td></tr>" +
                        "<tr><td>Gói thầu:</td><td>" + infor.goithau + "</td></tr>" +
                        "</table>"
                  )
        .addTo(map);
    },800);
});
map.on('mouseleave', 'cong-bao-3-chala', function() {
    map.getCanvas().style.cursor = '';
    clearTimeout(hoverTimeout);
});

map.on('mouseenter', 'cong-bao-nhiphuoc', function(e) {
    map.getCanvas().style.cursor = 'pointer';
    hoverTimeout = setTimeout(function() {

    var coordinates = e.features[0].geometry.coordinates.slice();
    var infor = e.features[0].properties;

    popup.setLngLat(e.lngLat)
        .setHTML(
            "<table class='popup-table'>" +
            "<tr><th colspan='2'><strong>" + infor.ten + "</strong></th></tr>" +
            "<tr><td>Kích thước:</td><td>" + infor.kichthuoc + "</td></tr>" +
            "<tr><td>Gói thầu:</td><td>" + infor.goithau + "</td></tr>" +
            "</table>"
        )
        .addTo(map);
    },800);
});
map.on('mouseleave', 'cong-bao-nhiphuoc', function() {
    map.getCanvas().style.cursor = '';
    clearTimeout(hoverTimeout);
});

map.on('mouseenter', 'tuyen-cong-donghai', function(e) {
    map.getCanvas().style.cursor = 'pointer';
    hoverTimeout = setTimeout(function() {

    var coordinates = e.features[0].geometry.coordinates.slice();
    var infor = e.features[0].properties;

    popup.setLngLat(e.lngLat)
        .setHTML(
            "<table class='popup-table'>" +
            "<tr><th colspan='2'><strong>" + infor.ten + "</strong></th></tr>" +
            "<tr><td>Kích thước:</td><td>" + infor.kichthuoc + "</td></tr>" +
            "<tr><td>Gói thầu:</td><td>" + infor.goithau + "</td></tr>" +
            "</table>"
        )
        .addTo(map);
    },800);
});
map.on('mouseleave', 'tuyen-cong-donghai', function() {
    map.getCanvas().style.cursor = '';
    clearTimeout(hoverTimeout);
});

map.on('mouseenter', 'tuyen-cong-hodonghai', function(e) {
    map.getCanvas().style.cursor = 'pointer';
    hoverTimeout = setTimeout(function() {

    var coordinates = e.features[0].geometry.coordinates.slice();
    var infor = e.features[0].properties;

    popup.setLngLat(e.lngLat)
        .setHTML(
            "<table class='popup-table'>" +
            "<tr><th colspan='2'><strong>" + infor.ten + "</strong></th></tr>" +
            "<tr><td>Thuộc hồ:</td><td>" + infor.thuocho + "</td></tr>" +
            "<tr><td>Gói thầu:</td><td>" + infor.goithau + "</td></tr>" +
            "</table>"
        )
        .addTo(map);
    },800);
});
map.on('mouseleave', 'tuyen-cong-hodonghai', function() {
    map.getCanvas().style.cursor = '';
    clearTimeout(hoverTimeout);
});

map.on('mouseenter', 'tuyen-cong-hpde', function(e) {
        map.getCanvas().style.cursor = 'pointer';
        hoverTimeout = setTimeout(function() {
            var coordinates = e.features[0].geometry.coordinates.slice();
            var infor = e.features[0].properties;

            popup.setLngLat(e.lngLat)
                .setHTML(
                    "<table class='popup-table'>" +
                    "<tr><th colspan='2'><strong>" + infor.ten + "</strong></th></tr>" +
                    "<tr style='border-bottom: 1px solid;'><td>Vị trí:</td><td>" + infor.vitri + "</td></tr>" +
                    "<tr><td>Kích thước:</td><td>" + infor.kichthuoc + "</td></tr>" +
                    "<tr><td>Gói thầu:</td><td>" + infor.goithau + "</td></tr>" +
                    "<tr><td>Điểm đầu:</td><td>" + infor.diemdau + "</td></tr>" +
                    "<tr><td>Điểm cuối:</td><td>" + infor.diemcuoi + "</td></tr>" +
                    "</table>"
                )
                .addTo(map);
        },800);
});
map.on('mouseleave', 'tuyen-cong-hpde', function() {
    map.getCanvas().style.cursor = '';
    clearTimeout(hoverTimeout);
});

map.on('mouseenter', 'nha-may-nt', function(e) {
        map.getCanvas().style.cursor = 'pointer';
        
        hoverTimeout = setTimeout(function() {
            var coordinates = e.features[0].geometry.coordinates.slice();
            var infor = e.features[0].properties;

            popup.setLngLat(coordinates)
                .setHTML(
                    "<table class='popup-table'>" +
                    "<tr><th colspan='2'><strong>" + infor.ten + "</strong></th></tr>" +
                    "<tr><td>Vị trí:</td><td>" + infor.vitri + "</td></tr>" +
                    "<tr><td>Hiện Trạng:</td><td>" + infor.hientrang + "</td></tr>" +
                    "</table>"
                )
                .addTo(map);
        }, 800);
});
map.on('mouseleave', 'nha-may-nt', function() {
    map.getCanvas().style.cursor = '';
    clearTimeout(hoverTimeout);
});

map.on('mouseenter', 'gieng-tach-nc-thai', function(e) {
    map.getCanvas().style.cursor = 'pointer';
        
    hoverTimeout = setTimeout(function() {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var infor = e.features[0].properties;

        popup.setLngLat(coordinates)
            .setHTML(
                "<table class='popup-table'>" +
                "<tr><th colspan='2'><strong>" + infor.ten + "</strong></th></tr>" +
                "<tr><td>Thuộc kênh:</td><td>" + infor.thuockenh + "</td></tr>" +
                "<tr><td>Gói thầu:</td><td>" + infor.goithau + "</td></tr>" +
                "</table>"
            )
            .addTo(map);
    }, 800);
});
map.on('mouseleave', 'gieng-tach-nc-thai', function() {
    map.getCanvas().style.cursor = '';
    clearTimeout(hoverTimeout);
});


map.on('mouseenter', 'bom-nc-thai', function(e) {
    map.getCanvas().style.cursor = 'pointer';
        
    hoverTimeout = setTimeout(function() {
        var infor = e.features[0].properties;

        popup.setLngLat(e.lngLat)
            .setHTML(
                "<table class='popup-table'>" +
                "<tr><th colspan='2'><strong>" + infor.ten + "</strong></th></tr>" +
                "<tr style='border-bottom: 1px solid;'><td>Vị trí:</td><td>" + infor.vitri + "</td></tr>" +
                "<tr><td>Gói thầu:</td><td>" + infor.goithau + "</td></tr>" +
                "<tr><td>Cống áp lực:</td><td>" + infor.congapluc + "</td></tr>" +
                "<tr><td>Lưu lượng:</td><td>" + infor.luuluongtt + "</td></tr>" +
                "<tr><td>Cột áp:</td><td>" + infor.cotap + "</td></tr>" +
                "<tr><td>Công suất thiết kế:</td><td>" + infor.congsuattk + "</td></tr>" +
                "</table>"
            )
            .addTo(map);
    }, 800);
});
map.on('mouseleave', 'bom-nc-thai', function() {
    map.getCanvas().style.cursor = '';
    clearTimeout(hoverTimeout);
});

map.on('mouseenter', 'cong-thoat-nm', function(e) {
    map.getCanvas().style.cursor = 'pointer';
        
    hoverTimeout = setTimeout(function() {
        var infor = e.features[0].properties;

        popup.setLngLat(e.lngLat)
            .setHTML(
                "<table class='popup-table'>" +
                "<tr><th colspan='2'><strong>" + infor.ten + "</strong></th></tr>" +
                "<tr><td>Tên đường:</td><td>" + infor.tenduong + "</td></tr>" +
                "<tr><td>Gói thầu:</td><td>" + infor.goithau + "</td></tr>" +
                "<tr><td>Chiều cao:</td><td>" + infor.chieucao + "</td></tr>" +
                "</table>"
            )
            .addTo(map);
    }, 800);
});
map.on('mouseleave', 'cong-thoat-nm', function() {
    map.getCanvas().style.cursor = '';
    clearTimeout(hoverTimeout);
});

// cho layer dạng line bbb
map.on('mouseenter', 'cong-thoat-nt', function(e) {
    map.getCanvas().style.cursor = 'pointer';
        
    hoverTimeout = setTimeout(function() {
        var infor = e.features[0].properties;

        popup.setLngLat(e.lngLat)
            .setHTML(
                "<table class='popup-table'>" +
                "<tr><th colspan='2'><strong>" + infor.ten + "</strong></th></tr>" +
                "<tr><td>Tên đường:</td><td>" + infor.tenduong + "</td></tr>" +
                "<tr><td>Gói thầu:</td><td>" + infor.goithau + "</td></tr>" +
                "<tr><td>Vật liệu:</td><td>" + infor.vatlieu + "</td></tr>" +
                "</table>"
            )
            .addTo(map);
    }, 800);
});
map.on('mouseleave', 'cong-thoat-nt', function() {
    map.getCanvas().style.cursor = '';
    clearTimeout(hoverTimeout);
});
///
map.on('mouseenter', 'hoga-thoat-nm', function(e) {
    map.getCanvas().style.cursor = 'pointer';
        
    hoverTimeout = setTimeout(function() {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var infor = e.features[0].properties;

        popup.setLngLat(coordinates)
            .setHTML(
                "<table class='popup-table'>" +
                "<tr><th colspan='2'><strong>" + infor.ten + "</strong></th></tr>" +
                "<tr><td>Tên đường:</td><td>" + infor.tenduong + "</td></tr>" +
                "<tr><td>Kết cấu:</td><td>" + infor.ketcau + "</td></tr>" +
                "<tr><td>Gói thầu:</td><td>" + infor.goithau + "</td></tr>" +
                "<tr><td>Cao độ mặt đất:</td><td>" + infor.caodomatdat + "</td></tr>" +
                "<tr><td>Cao độ đáy cống:</td><td>" + infor.caododaycong + "</td></tr>" +
                "<tr><td>Cao độ đáy ga:</td><td>" + infor.caododayga + "</td></tr>" +
                "</table>"
            )
            .addTo(map);
    }, 800);
});
map.on('mouseleave', 'hoga-thoat-nm', function() {
    map.getCanvas().style.cursor = '';
    clearTimeout(hoverTimeout);
});

// cho layer dạng symbol aaa
map.on('mouseenter', 'hoga-thoat-nt', function(e) {
    map.getCanvas().style.cursor = 'pointer';
        
    hoverTimeout = setTimeout(function() {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var infor = e.features[0].properties;

        popup.setLngLat(coordinates)
            .setHTML(
                "<table class='popup-table'>" +
                "<tr><th colspan='2'><strong>" + infor.ten + "</strong></th></tr>" +
                "<tr><td>Tên đường:</td><td>" + infor.tenduong + "</td></tr>" +
                "<tr><td>Kết cấu:</td><td>" + infor.ketcau + "</td></tr>" +
                "<tr><td>Gói thầu:</td><td>" + infor.goithau + "</td></tr>" +
                "<tr><td>Cao độ mặt đất:</td><td>" + infor.caodomatdat + "</td></tr>" +
                "<tr><td>Cao độ đáy cống:</td><td>" + infor.caododaycong + "</td></tr>" +
                "<tr><td>Cao độ đáy ga:</td><td>" + infor.caododayga + "</td></tr>" +
                "<tr><td>Loại hố ga:</td><td>" + infor.loaihoga + "</td></tr>" +
                "</table>"
            )
            .addTo(map);
    }, 800);
});
map.on('mouseleave', 'hoga-thoat-nt', function() {
    map.getCanvas().style.cursor = '';
    clearTimeout(hoverTimeout);
});
///

map.on('mouseenter', 'duong-ong', function(e) {
    map.getCanvas().style.cursor = 'pointer';
        
    hoverTimeout = setTimeout(function() {
        var infor = e.features[0].properties;

        popup.setLngLat(e.lngLat)
            .setHTML(
                "<table class='popup-table'>" +
                "<tr><th colspan='2'><strong>" + infor.ten + "</strong></th></tr>" +
                "<tr><td>Tên đường:</td><td>" + infor.tenduong + "</td></tr>" +
                "</table>"
            )
            .addTo(map);
    }, 800);
});
map.on('mouseleave', 'duong-ong', function() {
    map.getCanvas().style.cursor = '';
    clearTimeout(hoverTimeout);
});

map.on('mouseenter', 'cong-cap-nc', function(e) {
    map.getCanvas().style.cursor = 'pointer';
        
    hoverTimeout = setTimeout(function() {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var infor = e.features[0].properties;

        popup.setLngLat(coordinates)
            .setHTML(
                "<table class='popup-table'>" +
                "<tr><th colspan='2'><strong>" + infor.ten + "</strong></th></tr>" +
                "<tr><td>Tên đường:</td><td>" + infor.tenduong + "</td></tr>" +
                "<tr><td>Gói thầu:</td><td>" + infor.goithau + "</td></tr>" +
                "</table>"
            )
            .addTo(map);
    }, 800);
});
map.on('mouseleave', 'cong-cap-nc', function() {
    map.getCanvas().style.cursor = '';
    clearTimeout(hoverTimeout);
});


map.on('mouseenter', 'tru-cuu-hoa-nc', function(e) {
    map.getCanvas().style.cursor = 'pointer';
        
    hoverTimeout = setTimeout(function() {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var infor = e.features[0].properties;

        popup.setLngLat(coordinates)
            .setHTML(
                "<table class='popup-table'>" +
                "<tr><th colspan='2'><strong>" + infor.ten + "</strong></th></tr>" +
                "<tr><td>Tên đường:</td><td>" + infor.tenduong + "</td></tr>" +
                "<tr><td>Kích thước:</td><td>" + infor.kichthuoc + "</td></tr>" +
                "<tr><td>Gói thầu:</td><td>" + infor.goithau + "</td></tr>" +
                "</table>"
            )
            .addTo(map);
    }, 800);
});
map.on('mouseleave', 'tru-cuu-hoa-nc', function() {
    map.getCanvas().style.cursor = '';
    clearTimeout(hoverTimeout);
});

map.on('mouseenter', 'ho-tham-cnkt', function(e) {
    map.getCanvas().style.cursor = 'pointer';
        
    hoverTimeout = setTimeout(function() {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var infor = e.features[0].properties;

        popup.setLngLat(coordinates)
            .setHTML(
                "<table class='popup-table'>" +
                "<tr><th colspan='2'><strong>" + infor.ten + "</strong></th></tr>" +
                "<tr><td>Tên đường:</td><td>" + infor.tenduong + "</td></tr>" +
                "<tr><td>Gói thầu:</td><td>" + infor.goithau + "</td></tr>" +
                "</table>"
            )
            .addTo(map);
    }, 800);
});
map.on('mouseleave', 'ho-tham-cnkt', function() {
    map.getCanvas().style.cursor = '';
    clearTimeout(hoverTimeout);
});


map.on('mouseenter', 'tuyen-cong-cnkt', function(e) {
    map.getCanvas().style.cursor = 'pointer';
        
    hoverTimeout = setTimeout(function() {
        var infor = e.features[0].properties;

        popup.setLngLat(e.lngLat)
            .setHTML(
                "<table class='popup-table'>" +
                "<tr><th colspan='2'><strong>" + infor.ten + "</strong></th></tr>" +
                "<tr><td>Tên đường:</td><td>" + infor.tenduong + "</td></tr>" +
                "<tr><td>Gói thầu:</td><td>" + infor.goithau + "</td></tr>" +
                "</table>"
            )
            .addTo(map);
    }, 800);
});
map.on('mouseleave', 'tuyen-cong-cnkt', function() {
    map.getCanvas().style.cursor = '';
    clearTimeout(hoverTimeout);
});


map.on('mouseenter', 'ho-trong-cay', function(e) {
    map.getCanvas().style.cursor = 'pointer';
        
    hoverTimeout = setTimeout(function() {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var infor = e.features[0].properties;

        popup.setLngLat(coordinates)
            .setHTML(
                "<table class='popup-table'>" +
                "<tr><th colspan='2'><strong>" + infor.ten + "</strong></th></tr>" +
                "<tr><td>Tên đường:</td><td>" + infor.tenduong + "</td></tr>" +
                "<tr><td>Kích thước:</td><td>" + infor.kichthuoc + "</td></tr>" +
                "<tr><td>Gói thầu:</td><td>" + infor.goithau + "</td></tr>" +
                "<tr><td>Vật liệu:</td><td>" + infor.vatlieu + "</td></tr>" +
                "<tr><td>Loại cây:</td><td>" + infor.loaicay + "</td></tr>" +
                "</table>"
            )
            .addTo(map);
    }, 800);
});
map.on('mouseleave', 'ho-trong-cay', function() {
    map.getCanvas().style.cursor = '';
    clearTimeout(hoverTimeout);
});


map.on('mouseenter', 'duong-chieu-sang', function(e) {
    map.getCanvas().style.cursor = 'pointer';
        
    hoverTimeout = setTimeout(function() {
        var infor = e.features[0].properties;

        popup.setLngLat(e.lngLat)
            .setHTML(
                "<table class='popup-table'>" +
                "<tr><th colspan='2'><strong>" + infor.ten + "</strong></th></tr>" +
                "<tr><td>Tên đường:</td><td>" + infor.tenduong + "</td></tr>" +
                "<tr><td>Gói thầu:</td><td>" + infor.goithau + "</td></tr>" +
                "<tr><td>Loại:</td><td>" + infor.loai + "</td></tr>" +
                "</table>"
            )
            .addTo(map);
    }, 800);
});
map.on('mouseleave', 'duong-chieu-sang', function() {
    map.getCanvas().style.cursor = '';
    clearTimeout(hoverTimeout);
});


map.on('mouseenter', 'tram-chieu-sang', function(e) {
    map.getCanvas().style.cursor = 'pointer';
        
    hoverTimeout = setTimeout(function() {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var infor = e.features[0].properties;

        popup.setLngLat(coordinates)
            .setHTML(
                "<table class='popup-table'>" +
                "<tr><th colspan='2'><strong>" + infor.ten + "</strong></th></tr>" +
                "<tr><td>Tên đường:</td><td>" + infor.tenduong + "</td></tr>" +
                "<tr><td>Gói thầu:</td><td>" + infor.goithau + "</td></tr>" +
                "<tr><td>Loại:</td><td>" + infor.loai + "</td></tr>" +
                "</table>"
            )
            .addTo(map);
    }, 800);
});
map.on('mouseleave', 'tram-chieu-sang', function() {
    map.getCanvas().style.cursor = '';
    clearTimeout(hoverTimeout);
});


map.on('mouseenter', 'tru-chieu-sang', function(e) {
    map.getCanvas().style.cursor = 'pointer';
        
    hoverTimeout = setTimeout(function() {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var infor = e.features[0].properties;

        popup.setLngLat(coordinates)
            .setHTML(
                "<table class='popup-table'>" +
                "<tr><th colspan='2'><strong>" + infor.ten + "</strong></th></tr>" +
                "<tr><td>Tên đường:</td><td>" + infor.tenduong + "</td></tr>" +
                "<tr><td>Gói thầu:</td><td>" + infor.goithau + "</td></tr>" +
                "<tr><td>Loại:</td><td>" + infor.loai + "</td></tr>" +
                "</table>"
            )
            .addTo(map);
    }, 800);
});
map.on('mouseleave', 'tru-chieu-sang', function() {
    map.getCanvas().style.cursor = '';
    clearTimeout(hoverTimeout);
});


map.on('mouseenter', 'tu-dien-chieu-sang', function(e) {
    map.getCanvas().style.cursor = 'pointer';
        
    hoverTimeout = setTimeout(function() {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var infor = e.features[0].properties;

        popup.setLngLat(coordinates)
            .setHTML(
                "<table class='popup-table'>" +
                "<tr><th colspan='2'><strong>" + infor.ten + "</strong></th></tr>" +
                "<tr><td>Tên đường:</td><td>" + infor.tenduong + "</td></tr>" +
                "<tr><td>Gói thầu:</td><td>" + infor.goithau + "</td></tr>" +
                "<tr><td>Đóng ngắt:</td><td>" + infor.dongngat + "</td></tr>" +
                "</table>"
            )
            .addTo(map);
    }, 800);
});
map.on('mouseleave', 'tu-dien-chieu-sang', function() {
    map.getCanvas().style.cursor = '';
    clearTimeout(hoverTimeout);
});


map.on('mouseenter', 'kenh-tantai', function(e) {
    map.getCanvas().style.cursor = 'pointer';
        
    hoverTimeout = setTimeout(function() {
        var infor = e.features[0].properties;

        popup.setLngLat(e.lngLat)
            .setHTML(
                "<table class='popup-table'>" +
                "<tr><th colspan='2'><strong>" + infor.ten + "</strong></th></tr>" +
                "<tr><td>Kích thước:</td><td>" + infor.kichthuoc + "</td></tr>" +
                "<tr><td>Gói thầu:</td><td>" + infor.goithau + "</td></tr>" +
                "<tr><td>Điểm đầu:</td><td>" + infor.diemdau + "</td></tr>" +
                "<tr><td>Điểm cuối:</td><td>" + infor.diemcuoi + "</td></tr>" +
                "<tr><td>Hiện trạng:</td><td>" + infor.hientrang + "</td></tr>" +
                "</table>"
            )
            .addTo(map);
    }, 800);
});
map.on('mouseleave', 'kenh-tantai', function() {
    map.getCanvas().style.cursor = '';
    clearTimeout(hoverTimeout);
});


map.on('mouseenter', 'coc-tantai', function(e) {
    map.getCanvas().style.cursor = 'pointer';
        
    hoverTimeout = setTimeout(function() {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var infor = e.features[0].properties;

        popup.setLngLat(coordinates)
            .setHTML(
                "<table class='popup-table'>" +
                "<tr><th colspan='2'><strong>" + infor.ten + "</strong></th></tr>" +
                "<tr><td>Thuộc kênh:</td><td>" + infor.thuockenh + "</td></tr>" +
                "<tr><td>Gói thầu:</td><td>" + infor.goithau + "</td></tr>" +
                "</table>"
            )
            .addTo(map);
    }, 800);
});
map.on('mouseleave', 'coc-tantai', function() {
    map.getCanvas().style.cursor = '';
    clearTimeout(hoverTimeout);
});


map.on('mouseenter', 'cong-tantai', function(e) {
    map.getCanvas().style.cursor = 'pointer';
        
    hoverTimeout = setTimeout(function() {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var infor = e.features[0].properties;

        popup.setLngLat(coordinates)
            .setHTML(
                "<table class='popup-table'>" +
                "<tr><th colspan='2'><strong>" + infor.ten + "</strong></th></tr>" +
                "<tr><td>Thuộc kênh:</td><td>" + infor.thuockenh + "</td></tr>" +
                "</table>"
            )
            .addTo(map);
    }, 800);
});
map.on('mouseleave', 'cong-tantai', function() {
    map.getCanvas().style.cursor = '';
    clearTimeout(hoverTimeout);
});


map.on('mouseenter', 'hoga-tantai', function(e) {
    map.getCanvas().style.cursor = 'pointer';
        
    hoverTimeout = setTimeout(function() {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var infor = e.features[0].properties;

        popup.setLngLat(coordinates)
            .setHTML(
                "<table class='popup-table'>" +
                "<tr><th colspan='2'><strong>" + infor.ten + "</strong></th></tr>" +
                "<tr><td>Thuộc kênh:</td><td>" + infor.thuockenh + "</td></tr>" +
                "<tr><td>Gói thầu:</td><td>" + infor.goithau + "</td></tr>" +
                "</table>"
            )
            .addTo(map);
    }, 800);
});
map.on('mouseleave', 'hoga-tantai', function() {
    map.getCanvas().style.cursor = '';
    clearTimeout(hoverTimeout);
});


map.on('mouseenter', 'kenh-chala', function(e) {
    map.getCanvas().style.cursor = 'pointer';
        
    hoverTimeout = setTimeout(function() {
        var infor = e.features[0].properties;

        popup.setLngLat(e.lngLat)
            .setHTML(
                "<table class='popup-table'>" +
                "<tr><th colspan='2'><strong>" + infor.ten + "</strong></th></tr>" +
                "<tr><td>Kích thước:</td><td>" + infor.kichthuoc + "</td></tr>" +
                "<tr><td>Gói thầu:</td><td>" + infor.goithau + "</td></tr>" +
                "<tr><td>Điểm đầu:</td><td>" + infor.diemdau + "</td></tr>" +
                "<tr><td>Điểm cuối:</td><td>" + infor.diemcuoi + "</td></tr>" +
                "<tr><td>Hiện trạng:</td><td>" + infor.hientrang + "</td></tr>" +
                "</table>"
            )
            .addTo(map);
    }, 800);
});
map.on('mouseleave', 'kenh-chala', function() {
    map.getCanvas().style.cursor = '';
    clearTimeout(hoverTimeout);
});

map.on('mouseenter', 'kenh-dongnam', function(e) {
    map.getCanvas().style.cursor = 'pointer';
        
    hoverTimeout = setTimeout(function() {
        var infor = e.features[0].properties;

        popup.setLngLat(e.lngLat)
            .setHTML(
                "<table class='popup-table'>" +
                "<tr><th colspan='2'><strong>" + infor.ten + "</strong></th></tr>" +
                "<tr><td>Kích thước:</td><td>" + infor.kichthuoc + "</td></tr>" +
                "<tr><td>Gói thầu:</td><td>" + infor.goithau + "</td></tr>" +
                "<tr><td>Điểm đầu:</td><td>" + infor.diemdau + "</td></tr>" +
                "<tr><td>Điểm cuối:</td><td>" + infor.diemcuoi + "</td></tr>" +
                "<tr><td>Hiện trạng:</td><td>" + infor.hientrang + "</td></tr>" +
                "</table>"
            )
            .addTo(map);
    }, 800);
});
map.on('mouseleave', 'kenh-dongnam', function() {
    map.getCanvas().style.cursor = '';
    clearTimeout(hoverTimeout);
});


map.on('mouseenter', 'kenh-nhiphuoc', function(e) {
    map.getCanvas().style.cursor = 'pointer';
        
    hoverTimeout = setTimeout(function() {
        var infor = e.features[0].properties;

        popup.setLngLat(e.lngLat)
            .setHTML(
                "<table class='popup-table'>" +
                "<tr><th colspan='2'><strong>" + infor.ten + "</strong></th></tr>" +
                "<tr><td>Kích thước:</td><td>" + infor.kichthuoc + "</td></tr>" +
                "<tr><td>Gói thầu:</td><td>" + infor.goithau + "</td></tr>" +
                "<tr><td>Điểm đầu:</td><td>" + infor.diemdau + "</td></tr>" +
                "<tr><td>Điểm cuối:</td><td>" + infor.diemcuoi + "</td></tr>" +
                "<tr><td>Hiện trạng:</td><td>" + infor.hientrang + "</td></tr>" +
                "</table>"
            )
            .addTo(map);
    }, 800);
});
map.on('mouseleave', 'kenh-nhiphuoc', function() {
    map.getCanvas().style.cursor = '';
    clearTimeout(hoverTimeout);
});


map.on('mouseenter', 'kenh-th5', function(e) {
    map.getCanvas().style.cursor = 'pointer';
        
    hoverTimeout = setTimeout(function() {
        var infor = e.features[0].properties;

        popup.setLngLat(e.lngLat)
            .setHTML(
                "<table class='popup-table'>" +
                "<tr><th colspan='2'><strong>" + infor.ten + "</strong></th></tr>" +
                "<tr><td>Kích thước:</td><td>" + infor.kichthuoc + "</td></tr>" +
                "<tr><td>Gói thầu:</td><td>" + infor.goithau + "</td></tr>" +
                "<tr><td>Điểm đầu:</td><td>" + infor.diemdau + "</td></tr>" +
                "<tr><td>Điểm cuối:</td><td>" + infor.diemcuoi + "</td></tr>" +
                "<tr><td>Hiện trạng:</td><td>" + infor.hientrang + "</td></tr>" +
                "</table>"
            )
            .addTo(map);
    }, 800);
});
map.on('mouseleave', 'kenh-th5', function() {
    map.getCanvas().style.cursor = '';
    clearTimeout(hoverTimeout);
});

map.on('mouseenter', 'cong-th5', function(e) {
    map.getCanvas().style.cursor = 'pointer';
        
    hoverTimeout = setTimeout(function() {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var infor = e.features[0].properties;

        popup.setLngLat(coordinates)
            .setHTML(
                "<table class='popup-table'>" +
                "<tr><th colspan='2'><strong>" + infor.ten + "</strong></th></tr>" +
                "<tr><td>Kích thước:</td><td>" + infor.kichthuoc + "</td></tr>" +
                "<tr><td>Thuộc kênh:</td><td>" + infor.thuockenh + "</td></tr>" +
                "<tr><td>Gói thầu:</td><td>" + infor.goithau + "</td></tr>" +
                "</table>"
            )
            .addTo(map);
    }, 800);
});
map.on('mouseleave', 'cong-th5', function() {
    map.getCanvas().style.cursor = '';
    clearTimeout(hoverTimeout);
});


map.on('mouseenter', 'congtrungtam', function(e) {
    map.getCanvas().style.cursor = 'pointer';
        
    hoverTimeout = setTimeout(function() {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var infor = e.features[0].properties;

        popup.setLngLat(coordinates)
            .setHTML(
                "<table class='popup-table'>" +
                "<tr><th colspan='2'><strong>" + infor.ten + "</strong></th></tr>" +
                "<tr><td>Kích thước:</td><td>" + infor.kichthuoc + "</td></tr>" +
                "<tr><td>Thuộc hồ:</td><td>" + infor.thuocho + "</td></tr>" +
                "<tr><td>Gói thầu:</td><td>" + infor.goithau + "</td></tr>" +
                "</table>"
            )
            .addTo(map);
    }, 800);
});
map.on('mouseleave', 'congtrungtam', function() {
    map.getCanvas().style.cursor = '';
    clearTimeout(hoverTimeout);
});


map.on('mouseenter', 'congdonghai', function(e) {
    map.getCanvas().style.cursor = 'pointer';
        
    hoverTimeout = setTimeout(function() {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var infor = e.features[0].properties;

        popup.setLngLat(coordinates)
            .setHTML(
                "<table class='popup-table'>" +
                "<tr><th colspan='2'><strong>" + infor.ten + "</strong></th></tr>" +
                "<tr><td>Kích thước:</td><td>" + infor.kichthuoc + "</td></tr>" +
                "<tr><td>Thuộc hồ:</td><td>" + infor.thuocho + "</td></tr>" +
                "<tr><td>Gói thầu:</td><td>" + infor.goithau + "</td></tr>" +
                "</table>"
            )
            .addTo(map);
    }, 800);
});
map.on('mouseleave', 'congdonghai', function() {
    map.getCanvas().style.cursor = '';
    clearTimeout(hoverTimeout);
});

map.on('mouseenter', 'hoga-hodonghai', function(e) {
    map.getCanvas().style.cursor = 'pointer';
        
    hoverTimeout = setTimeout(function() {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var infor = e.features[0].properties;

        popup.setLngLat(coordinates)
            .setHTML(
                "<table class='popup-table'>" +
                "<tr><th colspan='2'><strong>" + infor.ten + "</strong></th></tr>" +
                "<tr><td>Thuộc hồ:</td><td>" + infor.thuocho + "</td></tr>" +
                "<tr><td>Gói thầu:</td><td>" + infor.goithau + "</td></tr>" +
                "</table>"
            )
            .addTo(map);
    }, 800);
});
map.on('mouseleave', 'hoga-hodonghai', function() {
    map.getCanvas().style.cursor = '';
    clearTimeout(hoverTimeout);
});




map.on('mouseenter', 'congchongngaplutcap2', function(e) {
    map.getCanvas().style.cursor = 'pointer';
        
    hoverTimeout = setTimeout(function() {
        var infor = e.features[0].properties;

        popup.setLngLat(e.lngLat)
            .setHTML(
                "<table class='popup-table'>" +
                "<tr><th colspan='2'><strong>" + infor.ten + "</strong></th></tr>" +
                "<tr style='border-bottom: 1px solid;'><td>Vị trí:</td><td>" + infor.vitri + "</td></tr>" +
                "<tr><td>Kích thước:</td><td>" + infor.kichthuoc + "</td></tr>" +
                "<tr><td>Gói thầu:</td><td>" + infor.goithau + "</td></tr>" +
                "<tr><td>Điểm đầu:</td><td>" + infor.diemdau + "</td></tr>" +
                "<tr><td>Điểm cuối:</td><td>" + infor.diemcuoi + "</td></tr>" +
                "</table>"
            )
            .addTo(map);
    }, 800);
});
map.on('mouseleave', 'congchongngaplutcap2', function() {
    map.getCanvas().style.cursor = '';
    clearTimeout(hoverTimeout);
});


map.on('mouseenter', 'congchongngapluthoga', function(e) {
    map.getCanvas().style.cursor = 'pointer';
        
    hoverTimeout = setTimeout(function() {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var infor = e.features[0].properties;

        popup.setLngLat(coordinates)
            .setHTML(
                "<table class='popup-table'>" +
                "<tr><th colspan='2'><strong>" + infor.ten + "</strong></th></tr>" +
                "<tr><td>Gói thầu:</td><td>" + infor.goithau + "</td></tr>" +
                "<tr><td>Loại hố ga:</td><td>" + infor.loaihoga + "</td></tr>" +
                "</table>"
            )
            .addTo(map);
    }, 800);
});
map.on('mouseleave', 'congchongngapluthoga', function() {
    map.getCanvas().style.cursor = '';
    clearTimeout(hoverTimeout);
});



