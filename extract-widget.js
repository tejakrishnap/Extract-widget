$.widget("custom.extract", {
  _create: function () {
    $("<h2>Extract Widget</h2>")
      .insertBefore(this.element)
      .addClass("text-center");
    this._createDraggableResizableBox();
  },

  _createDraggableResizableBox: function () {
    var $draggableBox = $("<div id='inner-box'></div>")
      .css({
        width: "50px",
        height: "50px",
        backgroundColor: "#6750a4",
        position: "absolute"
      })
      .appendTo(this.element);

    $draggableBox.draggable({
      containment: this.element,
      drag: this._updateCoordinates.bind(this)
    });

    $draggableBox.resizable({
      handles: "se",
      resize: this._updateDimensions.bind(this)
    });
  },

  _updateDimensions: function () {
    var $element = $("#inner-box");
    var $width = $("#width");
    var $height = $("#height");

    var width = $element.width();
    var height = $element.height();

    $width.text(width);
    $height.text(height);
  },

  _updateCoordinates: function () {
    var $element = $("#inner-box");
    var $xCoordinate = $("#x-coordinate");
    var $yCoordinate = $("#y-coordinate");

    var position = $element.position();

    $xCoordinate.text(position.left);
    $yCoordinate.text(position.top);
  },
  _setOption: function (key, value) {
    this._super(key, value);
  },

  _destroy: function () {
    $("#inner-box").draggable("destroy");
    $("#inner-box").resizable("destroy");
  }
});

$("#extract-widget").extract();
