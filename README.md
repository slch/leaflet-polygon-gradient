## Introduction

A plugin to extend the Polygon Object to fill SVG Path element with gradient color.

## Demo

[demo](https://hugemountain.github.io/leaflet-polygon-gradient/example/index.html)

## npm




## options

```
fillColor: "linearGradient(angle, stopColor1 offset, stopColor2 20%, ………………)",
angle: Control the gradient direction
stopColor: The stop-color attribute of <stop> tags
offset: The offset attribute of <stop> tags


fillColor: "radialGradient(cx, cy, r, fx, fy, stopColor1 offset, stopColor2, stopColor3, ………………)",

cx,cy,r: Define styles of the outermost circle 
fx,fy: Define styles of the innermost circle 
stopColor: The stop-color attribute of <stop> tags
offset: The offset attribute of <stop> tags

```


## Usage

```
L.geoJSON(states, {
    style: function(feature) {
        return {
            color: "#ff0000",
            // fillColor: "#00ff00",
            // fillColor: "linearGradient(90deg, red, yellow, blue, orange)",
            // fillColor: "radialGradient(50%, 50%, 50%, 50%, 50%, red, yellow, blue, orange)",
            fillOpacity: 1
        };
    }
}).addTo(map);

```

## Reference Document

[polygon-fillPattern](https://github.com/cloudybay/leaflet-polygon-fillPattern)



