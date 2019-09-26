leaflet notes

**一、地图加载**

1、范围相同

2、起算原点相同

3、切片类型相同

Zoomoffset 偏移：-2 该叠加底图从第2级开始加载第一级地图


二、arcgis服务静态切片包含动态地图的能力
    
    注意:放缩到最小比例尺后不会再放大
    
 三、leaflet动态服务改变zindex
 
 如果图层是Raster还是Vector。
 
 对于从Path继承的图层，例如Polylines，Polygons等使用 bringToFront
 
 layer.bringToFront()
 对于TileLayers（以及从TileLayers继承的图层类型）使用 setZIndex
 
 layer.setZIndex(<number>)
