(function (factory, window) {

  // define an AMD module that relies on 'leaflet'
  if (typeof define === 'function' && define.amd) {
    define(['leaflet'], factory);

    // define a Common JS module that relies on 'leaflet'
  } else if (typeof exports === 'object') {
    module.exports = factory(require('leaflet'));
  }

  // attach your plugin to the global 'L' variable
  if (typeof window !== 'undefined' && window.L) {
    window.L.ArrowPath = factory(L);
  }
}(function (L) {

  L.SVG.include({
    _updateStyle: function (layer) {
      var path = layer._path;
      var options = layer.options;

      if (!path || !options.fill) {
        return;
      }

      let fillColor = options.fillColor;
      if (typeof fillColor == "object" && fillColor.type.match(/^linearGradient|radialGradient/)) {
        // linearGradient、radialGradient
        this._addGradient(layer);
      } else {
        path.setAttribute('fill', options.fillColor || options.color);
      }

    },

    _addGradient: function (layer) {
      var path = layer._path;
      var colorOption = layer.options.fillColor;

      if (!this._defs) {
        this._defs = L.SVG.create('defs');
        this._container.appendChild(this._defs);
      }
      if(!this._gradient) {
        this._gradient = L.SVG.create(colorOption.type);
        this._gradient.setAttribute('id', 'gradient');
        let stopColors = colorOption.stopColors;

        for(let i = 0, len = stopColors.length; i < len; i ++) {
          let num = i + 1;
          this[`_stop`+num] = L.SVG.create('stop');
          this[`_stop`+num].setAttribute('offset', num === 1 ? '0%' : num === len ? '100%' : (100/len*num)+'%');
          this[`_stop`+num].setAttribute('stop-color', stopColors[i]);
          this._gradient.appendChild(this[`_stop`+num]);
        }

        this._gradient.setAttribute('x1', '0%');
        this._gradient.setAttribute('y1', '0%');
        this._gradient.setAttribute('x2', '100%');
        this._gradient.setAttribute('y2', '0%');
        this._defs.appendChild(this._gradient);

        path.setAttribute('fill', "url(#gradient)");
      }
    }
  })

}, window));


