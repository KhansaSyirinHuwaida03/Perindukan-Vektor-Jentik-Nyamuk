var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_adm_pasirkaliki_2 = new ol.format.GeoJSON();
var features_adm_pasirkaliki_2 = format_adm_pasirkaliki_2.readFeatures(json_adm_pasirkaliki_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_adm_pasirkaliki_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_adm_pasirkaliki_2.addFeatures(features_adm_pasirkaliki_2);
var lyr_adm_pasirkaliki_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_adm_pasirkaliki_2, 
                style: style_adm_pasirkaliki_2,
                popuplayertitle: "adm_pasirkaliki",
                interactive: true,
                title: '<img src="styles/legend/adm_pasirkaliki_2.png" /> adm_pasirkaliki'
            });
var format_UTMVektorAedes_3 = new ol.format.GeoJSON();
var features_UTMVektorAedes_3 = format_UTMVektorAedes_3.readFeatures(json_UTMVektorAedes_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UTMVektorAedes_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UTMVektorAedes_3.addFeatures(features_UTMVektorAedes_3);
var lyr_UTMVektorAedes_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UTMVektorAedes_3, 
                style: style_UTMVektorAedes_3,
                popuplayertitle: "UTM Vektor Aedes!",
                interactive: true,
                title: '<img src="styles/legend/UTMVektorAedes_3.png" /> UTM Vektor Aedes!'
            });
var format_Buffered_4 = new ol.format.GeoJSON();
var features_Buffered_4 = format_Buffered_4.readFeatures(json_Buffered_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffered_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffered_4.addFeatures(features_Buffered_4);
var lyr_Buffered_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffered_4, 
                style: style_Buffered_4,
                popuplayertitle: "Buffered",
                interactive: true,
                title: '<img src="styles/legend/Buffered_4.png" /> Buffered'
            });
var format_TitikPerindukanVektor_KhansaSyirin_5 = new ol.format.GeoJSON();
var features_TitikPerindukanVektor_KhansaSyirin_5 = format_TitikPerindukanVektor_KhansaSyirin_5.readFeatures(json_TitikPerindukanVektor_KhansaSyirin_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikPerindukanVektor_KhansaSyirin_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikPerindukanVektor_KhansaSyirin_5.addFeatures(features_TitikPerindukanVektor_KhansaSyirin_5);
var lyr_TitikPerindukanVektor_KhansaSyirin_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikPerindukanVektor_KhansaSyirin_5, 
                style: style_TitikPerindukanVektor_KhansaSyirin_5,
                popuplayertitle: "Titik Perindukan Vektor_Khansa Syirin",
                interactive: true,
                title: '<img src="styles/legend/TitikPerindukanVektor_KhansaSyirin_5.png" /> Titik Perindukan Vektor_Khansa Syirin'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_adm_pasirkaliki_2.setVisible(true);lyr_UTMVektorAedes_3.setVisible(true);lyr_Buffered_4.setVisible(true);lyr_TitikPerindukanVektor_KhansaSyirin_5.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_OpenStreetMap_1,lyr_adm_pasirkaliki_2,lyr_UTMVektorAedes_3,lyr_Buffered_4,lyr_TitikPerindukanVektor_KhansaSyirin_5];
lyr_adm_pasirkaliki_2.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'CIMAHI_ADM': 'CIMAHI_ADM', 'CIMAHI_A_1': 'CIMAHI_A_1', 'KECAMATAN': 'KECAMATAN', 'KELURAHAN': 'KELURAHAN', 'RW': 'RW', 'RT': 'RT', });
lyr_UTMVektorAedes_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Buffered_4.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_TitikPerindukanVektor_KhansaSyirin_5.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_adm_pasirkaliki_2.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'CIMAHI_ADM': 'TextEdit', 'CIMAHI_A_1': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KELURAHAN': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_UTMVektorAedes_3.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Buffered_4.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_TitikPerindukanVektor_KhansaSyirin_5.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_adm_pasirkaliki_2.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'CIMAHI_ADM': 'no label', 'CIMAHI_A_1': 'no label', 'KECAMATAN': 'no label', 'KELURAHAN': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_UTMVektorAedes_3.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Buffered_4.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_TitikPerindukanVektor_KhansaSyirin_5.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_TitikPerindukanVektor_KhansaSyirin_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});