ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([69.005137, 34.460623, 69.130688, 34.527367]);
var wms_layers = [];


        var lyr_ESRIWorldImagery_0 = new ol.layer.Tile({
            'title': ' ESRI World Imagery',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_outsid_naheya_1 = new ol.format.GeoJSON();
var features_outsid_naheya_1 = format_outsid_naheya_1.readFeatures(json_outsid_naheya_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_outsid_naheya_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_outsid_naheya_1.addFeatures(features_outsid_naheya_1);
var lyr_outsid_naheya_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_outsid_naheya_1, 
                style: style_outsid_naheya_1,
                popuplayertitle: 'outsid_naheya',
                interactive: true,
                title: '<img src="styles/legend/outsid_naheya_1.png" /> outsid_naheya'
            });
var format_RingRoad_2 = new ol.format.GeoJSON();
var features_RingRoad_2 = format_RingRoad_2.readFeatures(json_RingRoad_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_RingRoad_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RingRoad_2.addFeatures(features_RingRoad_2);
var lyr_RingRoad_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RingRoad_2, 
                style: style_RingRoad_2,
                popuplayertitle: 'Ring Road',
                interactive: true,
                title: '<img src="styles/legend/RingRoad_2.png" /> Ring Road'
            });
var format_Sub_road_3 = new ol.format.GeoJSON();
var features_Sub_road_3 = format_Sub_road_3.readFeatures(json_Sub_road_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Sub_road_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sub_road_3.addFeatures(features_Sub_road_3);
var lyr_Sub_road_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sub_road_3, 
                style: style_Sub_road_3,
                popuplayertitle: 'Sub_road',
                interactive: false,
                title: '<img src="styles/legend/Sub_road_3.png" /> Sub_road'
            });
var format_busstop_4 = new ol.format.GeoJSON();
var features_busstop_4 = format_busstop_4.readFeatures(json_busstop_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_busstop_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_busstop_4.addFeatures(features_busstop_4);
var lyr_busstop_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_busstop_4, 
                style: style_busstop_4,
                popuplayertitle: 'busstop',
                interactive: true,
                title: '<img src="styles/legend/busstop_4.png" /> busstop'
            });

lyr_ESRIWorldImagery_0.setVisible(true);lyr_outsid_naheya_1.setVisible(true);lyr_RingRoad_2.setVisible(true);lyr_Sub_road_3.setVisible(true);lyr_busstop_4.setVisible(true);
var layersList = [lyr_ESRIWorldImagery_0,lyr_outsid_naheya_1,lyr_RingRoad_2,lyr_Sub_road_3,lyr_busstop_4];
lyr_outsid_naheya_1.set('fieldAliases', {'Id': 'Id', });
lyr_RingRoad_2.set('fieldAliases', {'Id': 'Id', });
lyr_Sub_road_3.set('fieldAliases', {'LEFT_FID': 'LEFT_FID', 'RIGHT_FID': 'RIGHT_FID', 'Width': 'Width', });
lyr_busstop_4.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', });
lyr_outsid_naheya_1.set('fieldImages', {'Id': 'Range', });
lyr_RingRoad_2.set('fieldImages', {'Id': '', });
lyr_Sub_road_3.set('fieldImages', {'LEFT_FID': 'TextEdit', 'RIGHT_FID': 'TextEdit', 'Width': '', });
lyr_busstop_4.set('fieldImages', {'Id': 'Range', 'Name': 'TextEdit', });
lyr_outsid_naheya_1.set('fieldLabels', {'Id': 'no label', });
lyr_RingRoad_2.set('fieldLabels', {'Id': 'no label', });
lyr_Sub_road_3.set('fieldLabels', {'LEFT_FID': 'no label', 'RIGHT_FID': 'no label', 'Width': 'no label', });
lyr_busstop_4.set('fieldLabels', {'Id': 'no label', 'Name': 'inline label - visible with data', });
lyr_busstop_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});