var wordspacename = "adoninhthuan";
var domaingeoserver = "http://localhost:8080/geoserver/adoninhthuan";
var functionlayer = {
    addRasterLayer: function (layerid) {

        var url = "/" + wordspacename + "/wms?bbox={bbox-epsg-3857}&crs=epsg%3a3857&styles=" + style + "&format=image/png&service=wms&version=1.3.0&request=getmap&srs=epsg:3857&transparent=true&width=256&height=256&layers=" + wordspacename + ":" + layerid;

        map.addLayer({
            'id': layerid,
            'type': 'raster',
            'source': {
                'type': 'raster',
                'tiles': [domaingeoserver + url],
                'tileSize': 256
            },
            'paint': {
                'raster-opacity': 1
            }
        });
    },
    addVectorLayer: function (layerid, sourcelayer, typelayer, textfield, color, filters, size, imagename) {

        const vectorLayerUrl = `${domaingeoserver}/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=${wordspacename}:${sourcelayer}&STYLE=&TILEMATRIX=EPSG:900913:{z}&TILEMATRIXSET=EPSG:900913&FORMAT=application/vnd.mapbox-vector-tile&TILECOL={x}&TILEROW={y}`;
        var mapicon_url = "/Images/img_layer/";
        const filter = filters || ["all"];
        var bigsize = 0.7 ;
        // Tạo và thêm lớp vector dựa trên typelayer
        let vectorLayer;
        switch (typelayer) {
            case "symbol":
                if (!window["map"].hasImage(imagename || layerid)) {
                    window["map"].loadImage(mapicon_url + (imagename || layerid) + ".png", (error, image) => {
                        if (error) throw error;
                        window["map"].addImage(imagename || layerid, image);
                    });
                }
                vectorLayer = {
                    "id": layerid,
                    "type": "symbol",
                    'source': {
                        'type': 'vector',
                        'tiles': [vectorLayerUrl],
                    },
                    "source-layer": sourcelayer,
                    'layout': {
                        "visibility": "visible",
                        'icon-image': imagename || layerid,
                        'icon-size': bigsize,
                        'text-field': ['get', 'ten'],  
                        'text-size': 11,
                        'text-offset': [0, 1.5],
                    },
                    "filter": filter,
                    "minzoom": 14,
                    'maxzoom': 24,
                };
                map.addLayer(vectorLayer);
                break;
            case "line":
                vectorLayer = {
                    "id": layerid,
                    "type": "line",
                    'source': {
                        'type': 'vector',
                        'tiles': [vectorLayerUrl]
                    },
                    "source-layer": sourcelayer,
                    "paint": {
                        "line-color": color,
                        "line-width": size ,
                    },
                    'layout': {
                        "visibility": "visible",
                    },
                    "filter": filter,
                };
                map.addLayer(vectorLayer);
    
                // Thêm layer symbol để hiển thị tên cho line
                const symbolLayer = {
                    "id": layerid + "-labels",
                    "type": "symbol",
                    'source': {
                        'type': 'vector',
                        'tiles': [vectorLayerUrl]
                    },
                    "source-layer": sourcelayer,
                    'layout': {
                        "text-field": ['get', 'ten'],
                        "text-size": 11,
                        'text-offset': [0, 0.9],
                        "symbol-placement": "line",
                        "text-rotation-alignment": "map",
                        "visibility": "visible",
                    },
                    "paint": {
                        "text-color": "#000000",
                    },
                    "filter": filter,
                };
                map.addLayer(symbolLayer);
                break;
            case "fill":
                vectorLayer = {
                    "id": layerid,
                    "type": "fill",
                    'source': {
                        'type': 'vector',
                        'tiles': [vectorLayerUrl]
                    },
                    "source-layer": sourcelayer,
                    "paint": {
                        "fill-color": color,
                        "fill-opacity": 0.5,
                    },
                    'layout': {
                        "visibility": "visible",
                    },
                    "filter": filter,
                };
                map.addLayer(vectorLayer);
                break;
            case "circle":
                vectorLayer = {
                    "id": layerid,
                    "type": "circle",
                    'source': {
                        'type': 'vector',
                        'tiles': [vectorLayerUrl]
                    },
                    "source-layer": sourcelayer,
                    'layout': {
                        "visibility": "visible"
                    },
                    'paint': {
                        'circle-radius': size || 3 ,
                        'circle-color': color || "#0d8ff0",
                    },
                    "filter": filter,
                };
                map.addLayer(vectorLayer);
                break;
            default:
                console.error("Unsupported layer type:", typelayer);
                return;
        }
    },
    addVectorNenLayer: function (layerid, sourcelayer, typelayer){
        const vectorLayerUrl = `${domaingeoserver}/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=${wordspacename}:${sourcelayer}&STYLE=&TILEMATRIX=EPSG:900913:{z}&TILEMATRIXSET=EPSG:900913&FORMAT=application/vnd.mapbox-vector-tile&TILECOL={x}&TILEROW={y}`;
        var minzm , maxzm;
        // 1 Tỉnh , 2 Huyện , 3 Xã
        if(typelayer == 1){
            minzm = 5;
            maxzm = 9;
        }
        if(typelayer == 2){
            minzm = 7;
            maxzm = 10.5;
        }
        if(typelayer == 3){
            minzm = 10;
            maxzm = 24;
        }
        
        vectorLayer = {
            "id": layerid,
            "type": "line",
            'source': {
                'type': 'vector',
                'tiles': [vectorLayerUrl]
            },
            "source-layer": sourcelayer,
            "paint": {
                "line-color": '#000000',
                "line-width": 0.5,
                "line-dasharray": [10, 3],
            },
            'layout': {
                "visibility": "visible",
            },
            'minzoom' : minzm,
            'maxzoom' : maxzm, 
        };
        map.addLayer(vectorLayer);
    },
    flytoLayer: function (sourcelayer, bienhoi1, dieukien1, bienhoi2, dieukien2) {
        var locchinh = '';
        var locbosung = '';
        if (bienhoi1 != null && dieukien1 != null) {
            locchinh = `&CQL_FILTER=${bienhoi1}='${dieukien1}'`;
        }
        if (bienhoi2 != null && dieukien2 != null) {
            locbosung = `AND ${bienhoi2}='${dieukien2}'`;
        }

        const url = `${domaingeoserver}/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=${wordspacename}:${sourcelayer}&outputFormat=application/json${locchinh}${locbosung}`;

        //console.log(url);

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.features.length > 0) {
                    const features = data.features;

        // Hệ tọa độ phẳng (Projected Coordinate System) mà bạn đang sử dụng (ví dụ: EPSG:3857)
                    const sourceProj = 'EPSG:3857'; // Thay đổi nếu cần thiết
        // Hệ tọa độ địa lý (Geographic Coordinate System)
                    const destProj = 'EPSG:4326';

        // Chuyển đổi tọa độ của feature đầu tiên
        var firstCoord;
        var geometryType = features[0].geometry.type;
        if (geometryType === 'Point') {
            firstCoord = features[0].geometry.coordinates;
        } else if (geometryType === 'LineString' || geometryType === 'MultiLineString') {
            firstCoord = features[0].geometry.coordinates[0];
        } else if (geometryType === 'Polygon') {
            firstCoord = features[0].geometry.coordinates[0][0];
        } else if (geometryType === 'MultiPolygon' ) {
            firstCoord = features[0].geometry.coordinates[0][0][0];
        }

        // Chuyển đổi tọa độ nếu cần thiết
        if (sourceProj !== destProj) {
            firstCoord = proj4(sourceProj, destProj, firstCoord);
        }
            
        map.flyTo({
            center: firstCoord,
            zoom: 17,
            essential: true
        });
    } else {
                    console.log("No features found");
    }
    })
            .catch(error => {
                console.error("Error fetching data:", error);
    });
    },
    createWindowPopup:function (id, name, t, l, h, w, minimize) {
                if (!minimize) {
                    minimize = false;
                }
                try {
                    $("#" + id).PopupWindow("destroy");
                } catch (e) {
                }

                jQuery("#" + id).PopupWindow({
                    // popup title
                    title: name,
                    // modal mode
                    modal: false,
                    // auto open on page load
                    autoOpen: true,
                    // animation speed
                    animationTime: 300,
                    // custom css classes
                    customClass: "boxkhobaivattu",
                    // custom action buttons
                    buttons: {
                        maximize: true,
                        collapse: false,
                        minimize: minimize,
                        close: true
                    },
                    // button's position
                    buttonsPosition: "right",
                    // custom button text
                    buttonsTexts: {
                        maximize: "Phóng to",
                        unmaximize: "Khôi phục",
                        minimize: "Thu nhỏ",
                        unminimize: "Mở rộng",
                        collapse: "Thu gọn",
                        uncollapse: "Đầy đủ",
                        close: "Đóng"
                    },
                    // draggable options
                    draggable: true,
                    dragOpacity: 0.6,
                    // resizable options
                    resizable: true,
                    resizeOpacity: 0.6,
                    // enable status bar
                    statusBar: false,
                    // top position
                    top: t,
                    // left position
                    left: l,
                    // height / width
                    height: h,
                    width: w,
                    maxHeight: undefined,
                    maxWidth: undefined,
                    minHeight: 100,
                    minWidth: 200,
                    collapsedWidth: undefined,
                    // always keep in viewport
                    keepInViewport: true,
                    // enable mouse move events
                    mouseMoveEvents: true
                });
                setTimeout(function () {
                    $(".popupwindow_container").find(".popupwindow_overlay").css("z-index", "");
                    $(".popupwindow_container").css("z-index", "9999");
                }, 100);
            }
}


