var wms_layers = [];

var format_ADMINISTRASIKECAMATAN_AR_50K_0 = new ol.format.GeoJSON();
var features_ADMINISTRASIKECAMATAN_AR_50K_0 = format_ADMINISTRASIKECAMATAN_AR_50K_0.readFeatures(json_ADMINISTRASIKECAMATAN_AR_50K_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIKECAMATAN_AR_50K_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIKECAMATAN_AR_50K_0.addFeatures(features_ADMINISTRASIKECAMATAN_AR_50K_0);
var lyr_ADMINISTRASIKECAMATAN_AR_50K_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ADMINISTRASIKECAMATAN_AR_50K_0, 
                style: style_ADMINISTRASIKECAMATAN_AR_50K_0,
                interactive: true,
    title: 'ADMINISTRASIKECAMATAN_AR_50K<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_0_0.png" /> <br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_0_1.png" /> ABUNGTINGGI<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_0_2.png" /> BAHUGA<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_0_3.png" /> BANJIT<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_0_4.png" /> BARADATU<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_0_5.png" /> BELITANGJAYA<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_0_6.png" /> BLAMBANGANUMPU<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_0_7.png" /> BUANAPEMACA<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_0_8.png" /> BUAYBAHUGA<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_0_9.png" /> BUAYMADANG<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_0_10.png" /> BUAYMADANG TIMUR<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_0_11.png" /> BUAYPEMACA<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_0_12.png" /> BUAYPEMUKAPELIUNG<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_0_13.png" /> BUKITKEMUNING<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_0_14.png" /> BUMIAGUNG<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_0_15.png" /> BUNGAMAYANG<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_0_16.png" /> GUNUNGAGUNG<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_0_17.png" /> GUNUNGLABUHAN<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_0_18.png" /> GUNUNGTERANG<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_0_19.png" /> HULU SUNGKAI<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_0_20.png" /> JAYAPURA<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_0_21.png" /> KASUI<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_0_22.png" /> MARTAPURA<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_0_23.png" /> MESUJIMAKMUR<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_0_24.png" /> MUARASUNGKAI<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_0_25.png" /> NEGARABATIN<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_0_26.png" /> NEGERIAGUNG<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_0_27.png" /> NEGERIBESAR<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_0_28.png" /> PAGARDEWA<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_0_29.png" /> PAKUANRATU<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_0_30.png" /> REBANGTANGKAS<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_0_31.png" /> SUMBERJAYA<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_0_32.png" /> SUNGKAI BARAT<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_0_33.png" /> SUNGKAI TENGAH<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_0_34.png" /> SUNGKAI UTARA<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_0_35.png" /> TULANGBAWANG TENGAH<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_0_36.png" /> TULANGBAWANG UDIK<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_0_37.png" /> WAYTUBA<br />'
        });
var format_LAYANANKESEHATAN_PT_50K_1 = new ol.format.GeoJSON();
var features_LAYANANKESEHATAN_PT_50K_1 = format_LAYANANKESEHATAN_PT_50K_1.readFeatures(json_LAYANANKESEHATAN_PT_50K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LAYANANKESEHATAN_PT_50K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LAYANANKESEHATAN_PT_50K_1.addFeatures(features_LAYANANKESEHATAN_PT_50K_1);
var lyr_LAYANANKESEHATAN_PT_50K_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LAYANANKESEHATAN_PT_50K_1, 
                style: style_LAYANANKESEHATAN_PT_50K_1,
                interactive: true,
                title: '<img src="styles/legend/LAYANANKESEHATAN_PT_50K_1.png" /> LAYANANKESEHATAN_PT_50K'
            });
var format_RUMAHSAKIT_PT_50K_2 = new ol.format.GeoJSON();
var features_RUMAHSAKIT_PT_50K_2 = format_RUMAHSAKIT_PT_50K_2.readFeatures(json_RUMAHSAKIT_PT_50K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUMAHSAKIT_PT_50K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUMAHSAKIT_PT_50K_2.addFeatures(features_RUMAHSAKIT_PT_50K_2);
var lyr_RUMAHSAKIT_PT_50K_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RUMAHSAKIT_PT_50K_2, 
                style: style_RUMAHSAKIT_PT_50K_2,
                interactive: true,
                title: '<img src="styles/legend/RUMAHSAKIT_PT_50K_2.png" /> RUMAHSAKIT_PT_50K'
            });
var format_ARENAOLAHRAGA_PT_50K_3 = new ol.format.GeoJSON();
var features_ARENAOLAHRAGA_PT_50K_3 = format_ARENAOLAHRAGA_PT_50K_3.readFeatures(json_ARENAOLAHRAGA_PT_50K_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ARENAOLAHRAGA_PT_50K_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARENAOLAHRAGA_PT_50K_3.addFeatures(features_ARENAOLAHRAGA_PT_50K_3);
var lyr_ARENAOLAHRAGA_PT_50K_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ARENAOLAHRAGA_PT_50K_3, 
                style: style_ARENAOLAHRAGA_PT_50K_3,
                interactive: true,
                title: '<img src="styles/legend/ARENAOLAHRAGA_PT_50K_3.png" /> ARENAOLAHRAGA_PT_50K'
            });
var format_STASIUNKA_PT_50K_4 = new ol.format.GeoJSON();
var features_STASIUNKA_PT_50K_4 = format_STASIUNKA_PT_50K_4.readFeatures(json_STASIUNKA_PT_50K_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_STASIUNKA_PT_50K_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_STASIUNKA_PT_50K_4.addFeatures(features_STASIUNKA_PT_50K_4);
var lyr_STASIUNKA_PT_50K_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_STASIUNKA_PT_50K_4, 
                style: style_STASIUNKA_PT_50K_4,
                interactive: true,
                title: '<img src="styles/legend/STASIUNKA_PT_50K_4.png" /> STASIUNKA_PT_50K'
            });

lyr_ADMINISTRASIKECAMATAN_AR_50K_0.setVisible(true);lyr_LAYANANKESEHATAN_PT_50K_1.setVisible(true);lyr_RUMAHSAKIT_PT_50K_2.setVisible(true);lyr_ARENAOLAHRAGA_PT_50K_3.setVisible(true);lyr_STASIUNKA_PT_50K_4.setVisible(true);
var layersList = [lyr_ADMINISTRASIKECAMATAN_AR_50K_0,lyr_LAYANANKESEHATAN_PT_50K_1,lyr_RUMAHSAKIT_PT_50K_2,lyr_ARENAOLAHRAGA_PT_50K_3,lyr_STASIUNKA_PT_50K_4];
lyr_ADMINISTRASIKECAMATAN_AR_50K_0.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'LCODE': 'LCODE', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_LAYANANKESEHATAN_PT_50K_1.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LCODE': 'LCODE', 'REMARK': 'REMARK', 'TPLYST': 'TPLYST', });
lyr_RUMAHSAKIT_PT_50K_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LCODE': 'LCODE', 'REMARK': 'REMARK', 'Foto': 'Foto', 'Alamat': 'Alamat', });
lyr_ARENAOLAHRAGA_PT_50K_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'LCODE': 'LCODE', });
lyr_STASIUNKA_PT_50K_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'LCODE': 'LCODE', 'Gambar': 'Gambar', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_0.set('fieldImages', {'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'LCODE': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_LAYANANKESEHATAN_PT_50K_1.set('fieldImages', {'NAMOBJ': '', 'LCODE': '', 'REMARK': '', 'TPLYST': '', });
lyr_RUMAHSAKIT_PT_50K_2.set('fieldImages', {'NAMOBJ': 'TextEdit', 'LCODE': 'TextEdit', 'REMARK': 'TextEdit', 'Foto': 'ExternalResource', 'Alamat': 'TextEdit', });
lyr_ARENAOLAHRAGA_PT_50K_3.set('fieldImages', {'NAMOBJ': '', 'REMARK': '', 'LCODE': '', });
lyr_STASIUNKA_PT_50K_4.set('fieldImages', {'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'LCODE': 'TextEdit', 'Gambar': 'ExternalResource', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_0.set('fieldLabels', {'NAMOBJ': 'no label', 'REMARK': 'no label', 'LCODE': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_LAYANANKESEHATAN_PT_50K_1.set('fieldLabels', {'NAMOBJ': 'no label', 'LCODE': 'no label', 'REMARK': 'no label', 'TPLYST': 'no label', });
lyr_RUMAHSAKIT_PT_50K_2.set('fieldLabels', {'NAMOBJ': 'no label', 'LCODE': 'no label', 'REMARK': 'no label', 'Foto': 'no label', 'Alamat': 'no label', });
lyr_ARENAOLAHRAGA_PT_50K_3.set('fieldLabels', {'NAMOBJ': 'no label', 'REMARK': 'no label', 'LCODE': 'no label', });
lyr_STASIUNKA_PT_50K_4.set('fieldLabels', {'NAMOBJ': 'no label', 'REMARK': 'no label', 'LCODE': 'no label', 'Gambar': 'no label', });
lyr_STASIUNKA_PT_50K_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});