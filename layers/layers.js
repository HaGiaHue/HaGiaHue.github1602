var wms_layers = [];

var format_ThuyVan_0 = new ol.format.GeoJSON();
var features_ThuyVan_0 = format_ThuyVan_0.readFeatures(json_ThuyVan_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ThuyVan_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ThuyVan_0.addFeatures(features_ThuyVan_0);
var lyr_ThuyVan_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ThuyVan_0, 
                style: style_ThuyVan_0,
                interactive: true,
    title: 'ThuyVan<br />\
    <img src="styles/legend/ThuyVan_0_0.png" /> S.CAI BE<br />\
    <img src="styles/legend/ThuyVan_0_1.png" /> S.MY THO<br />\
    <img src="styles/legend/ThuyVan_0_2.png" /> S.NHA BE<br />\
    <img src="styles/legend/ThuyVan_0_3.png" /> S.TIEN GIANG<br />\
    <img src="styles/legend/ThuyVan_0_4.png" /> <br />'
        });
var format_RG_TIENGIANG_1 = new ol.format.GeoJSON();
var features_RG_TIENGIANG_1 = format_RG_TIENGIANG_1.readFeatures(json_RG_TIENGIANG_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RG_TIENGIANG_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RG_TIENGIANG_1.addFeatures(features_RG_TIENGIANG_1);
var lyr_RG_TIENGIANG_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RG_TIENGIANG_1, 
                style: style_RG_TIENGIANG_1,
                interactive: true,
    title: 'RG_TIENGIANG<br />\
    <img src="styles/legend/RG_TIENGIANG_1_0.png" /> 196 - 287<br />\
    <img src="styles/legend/RG_TIENGIANG_1_1.png" /> 287 - 596<br />\
    <img src="styles/legend/RG_TIENGIANG_1_2.png" /> 596 - 735<br />\
    <img src="styles/legend/RG_TIENGIANG_1_3.png" /> 735 - 1414<br />\
    <img src="styles/legend/RG_TIENGIANG_1_4.png" /> 1414 - 4655<br />'
        });
var format_Giao_Thong_2 = new ol.format.GeoJSON();
var features_Giao_Thong_2 = format_Giao_Thong_2.readFeatures(json_Giao_Thong_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Giao_Thong_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Giao_Thong_2.addFeatures(features_Giao_Thong_2);
var lyr_Giao_Thong_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Giao_Thong_2, 
                style: style_Giao_Thong_2,
                interactive: true,
    title: 'Giao_Thong<br />\
    <img src="styles/legend/Giao_Thong_2_0.png" /> DT817<br />\
    <img src="styles/legend/Giao_Thong_2_1.png" /> DT862<br />\
    <img src="styles/legend/Giao_Thong_2_2.png" /> DT864<br />\
    <img src="styles/legend/Giao_Thong_2_3.png" /> DT866<br />\
    <img src="styles/legend/Giao_Thong_2_4.png" /> DT868<br />\
    <img src="styles/legend/Giao_Thong_2_5.png" /> DT877<br />\
    <img src="styles/legend/Giao_Thong_2_6.png" /> DT879C<br />\
    <img src="styles/legend/Giao_Thong_2_7.png" /> QL1A<br />\
    <img src="styles/legend/Giao_Thong_2_8.png" /> QL30<br />\
    <img src="styles/legend/Giao_Thong_2_9.png" /> QL50<br />\
    <img src="styles/legend/Giao_Thong_2_10.png" /> <br />'
        });

lyr_ThuyVan_0.setVisible(true);lyr_RG_TIENGIANG_1.setVisible(true);lyr_Giao_Thong_2.setVisible(true);
var layersList = [lyr_ThuyVan_0,lyr_RG_TIENGIANG_1,lyr_Giao_Thong_2];
lyr_ThuyVan_0.set('fieldAliases', {'ISO': 'ISO', 'COUNTRY': 'COUNTRY', 'F_CODE_DES': 'F_CODE_DES', 'HYC_DESCRI': 'HYC_DESCRI', 'NAME': 'NAME', });
lyr_RG_TIENGIANG_1.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'NL_NAME_2': 'NL_NAME_2', 'VARNAME_2': 'VARNAME_2', 'DanSo': 'DanSo', 'DienTich': 'DienTich', 'MatDoDanSo': 'MatDoDanSo', 'Dien_Tich': 'Dien_Tich', 'Matdodan_1': 'Matdodan_1', });
lyr_Giao_Thong_2.set('fieldAliases', {'MED_DESCRI': 'MED_DESCRI', 'RTT_DESCRI': 'RTT_DESCRI', 'F_CODE_DES': 'F_CODE_DES', 'ISO': 'ISO', 'ISOCOUNTRY': 'ISOCOUNTRY', });
lyr_ThuyVan_0.set('fieldImages', {'ISO': 'TextEdit', 'COUNTRY': 'TextEdit', 'F_CODE_DES': 'TextEdit', 'HYC_DESCRI': 'TextEdit', 'NAME': 'TextEdit', });
lyr_RG_TIENGIANG_1.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'ID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'DanSo': 'TextEdit', 'DienTich': 'TextEdit', 'MatDoDanSo': 'TextEdit', 'Dien_Tich': 'TextEdit', 'Matdodan_1': 'TextEdit', });
lyr_Giao_Thong_2.set('fieldImages', {'MED_DESCRI': 'TextEdit', 'RTT_DESCRI': 'TextEdit', 'F_CODE_DES': 'TextEdit', 'ISO': 'TextEdit', 'ISOCOUNTRY': 'TextEdit', });
lyr_ThuyVan_0.set('fieldLabels', {'ISO': 'inline label', 'COUNTRY': 'inline label', 'F_CODE_DES': 'inline label', 'HYC_DESCRI': 'inline label', 'NAME': 'inline label', });
lyr_RG_TIENGIANG_1.set('fieldLabels', {'ID_0': 'inline label', 'ISO': 'inline label', 'NAME_0': 'inline label', 'ID_1': 'inline label', 'NAME_1': 'inline label', 'ID_2': 'inline label', 'NAME_2': 'inline label', 'TYPE_2': 'inline label', 'ENGTYPE_2': 'inline label', 'NL_NAME_2': 'inline label', 'VARNAME_2': 'inline label', 'DanSo': 'inline label', 'DienTich': 'inline label', 'MatDoDanSo': 'inline label', 'Dien_Tich': 'inline label', 'Matdodan_1': 'inline label', });
lyr_Giao_Thong_2.set('fieldLabels', {'MED_DESCRI': 'inline label', 'RTT_DESCRI': 'inline label', 'F_CODE_DES': 'inline label', 'ISO': 'inline label', 'ISOCOUNTRY': 'inline label', });
lyr_Giao_Thong_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});