# Extract Widget

The Extract Widget is a JavaScript widget built using jQuery and jQuery UI that allows you to create draggable and resizable boxes on a web page. This README provides an overview of how to use the widget and integrate it into your project.

## Getting Started

To use the Extract Widget in your project, follow these steps:

1. Include the necessary JavaScript and CSS files in your HTML file's `<head>` section:

   ```html
   <link rel="stylesheet" href="index.css" />
   <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
   <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.13.2/jquery-ui.min.js"></script>
   <script type="module" src="index.js"></script>
2. Run `npm install`
3. Run `npm run start`. This will start the server.

## Usage

The Extract Widget allows you to create draggable and resizable boxes within the designated container. The Info Section displays the position and dimensions of the box as you interact with it.

To create a new Extract Widget, add a <div> element with a unique ID to your HTML.

The shared Info Section will automatically display values for all Extract Widgets on the page.

## Customization
You can customize the Extract Widget by modifying the JavaScript code in "index.js." The code is structured to allow for easy customization of widget behavior and appearance.

## Dependencies
jQuery: https://jquery.com/
jQuery UI: https://jqueryui.com/
License
This project is licensed under the MIT License - see the LICENSE.md file for details.
