import { createExtractWidget } from "./modules/extract.js";

var infoSection = $(".info");

function displayDimensions(width, height) {
  infoSection.find(".width").text(width);
  infoSection.find(".height").text(height);
}

function displayCoordinates(left, top) {
  infoSection.find(".x-coordinate").text(left);
  infoSection.find(".y-coordinate").text(top);
}

$(document).ready(function () {
  createExtractWidget();
  $("#extract-widget").extract(
    {
      dimensionsUpdated: function (event, data) {
        displayDimensions(data.width, data.height);
      }
    },
    "option",
    { background: "yellow" }
  );

  $("#extract-widget-2").extract({
    coordinatesUpdated: function (event, data) {
      displayCoordinates(data.left, data.top);
    }
  });
});
