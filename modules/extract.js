export function createExtractWidget() {
  $.widget("custom.extract", {
    options: {
      background: "#6750a4"
    },
    _create: function () {
      $("<h2>Extract Widget</h2>")
        .insertBefore(this.element)
        .addClass("text-center");
      this._createDraggableResizableBox();
    },

    _createDraggableResizableBox: function () {
      var $draggableBox = $("<div class='inner-box'></div>").appendTo(
        this.element
      );

      $draggableBox.css("background-color", this.options.background);

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
      var $element = this.element.find(".inner-box");
      var width = $element.width();
      var height = $element.height();

      this._trigger("dimensionsUpdated", null, { width, height });
    },

    _updateCoordinates: function () {
      var $element = this.element.find(".inner-box");
      var position = $element.position();

      this._trigger("coordinatesUpdated", null, {
        left: position.left,
        top: position.top
      });
    },
    _setOption: function (key, value) {
      this._super(key, value);
    },

    _destroy: function () {
      this.element.find(".inner-box").draggable("destroy");
      this.element.find(".inner-box").resizable("destroy");
    }
  });
}
