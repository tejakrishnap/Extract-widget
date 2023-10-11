import { createExtractWidget } from "./modules/extract.js";

$(document).ready(function () {
  createExtractWidget();
  $("#extract-widget").extract();
  $("#extract-widget-2").extract();
});
