export function createExtractWidget() {
  $.widget("custom.extract", {
    _create: function () {
      $("<h2>Extract Widget</h2>")
        .insertBefore(this.element)
        .addClass("text-center");
      this._createDraggableResizableBox();
      this._bindInfoSection();
    },

    _createDraggableResizableBox: function () {
      var $draggableBox = $("<div class='inner-box'></div>").appendTo(
        this.element
      );

      $draggableBox.draggable({
        containment: this.element,
        drag: this._updateCoordinates.bind(this)
      });

      $draggableBox.resizable({
        handles: "se",
        resize: this._updateDimensions.bind(this)
      });
    },

    _bindInfoSection: function () {
      var infoSection = $(".info");
      this.xCoordinateElement = infoSection.find(".x-coordinate");
      this.yCoordinateElement = infoSection.find(".y-coordinate");
      this.widthElement = infoSection.find(".width");
      this.heightElement = infoSection.find(".height");
    },

    _updateDimensions: function () {
      var $element = this.element.find(".inner-box");
      var width = $element.width();
      var height = $element.height();

      this.widthElement.text(width);
      this.heightElement.text(height);
    },

    _updateCoordinates: function () {
      var $element = this.element.find(".inner-box");
      var position = $element.position();

      this.xCoordinateElement.text(position.left);
      this.yCoordinateElement.text(position.top);
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
