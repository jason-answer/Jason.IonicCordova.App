angular.module('starter.directive', [])

.directive("appMap", function () {
    return {
        restrict: "E",
        replace: true,
        template: "<div id='allMap'></div>",
        scope: {
            center: "=",		// Center point on the map (e.g. <code>{ latitude: 10, longitude: 10 }</code>).
            markers: "=",	   // Array of map markers (e.g. <code>[{ lat: 10, lon: 10, name: "hello" }]</code>).
            width: "@",		 // Map width in pixels.
            height: "@",		// Map height in pixels.
            zoom: "@",		  // Zoom level (one is totally zoomed out, 25 is very much zoomed in).
            zoomControl: "@",   // Whether to show a zoom control on the map.
            scaleControl: "@",   // Whether to show scale control on the map.
            address: "@"
        },
        link: function (scope, element, attrs) {
            var map = new BMap.Map("allmap");    // 创建Map实例
            map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
            map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
            map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
            map.enableScrollWheelZoom(true);
        }
    };
});