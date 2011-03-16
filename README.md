# Simple Slides v1.0

## What is Simple Slides

Simple Slides is a simple jQuery plugin that generates a slideshow 

Simple Slides works best with a group of images /or/ panes that are all the size size

## How to use

'Installing' this plugin is very simple

### Requirements

First off as this is a jQuery plugin, jQuery must already be installed onto your page.
jQuery version *1.0* or *above* is currently required.

### Adding files

The files js/simpleslides-1.0.js and css/simpleslides-1.0.css need to be added to the relative folders within the web pages folders.

### Include Files

The files will need to be included into the HTML file to work.
Just add:-

`<script type="text/javascript" src="js/simpleslides-1.0.js"></script>`
`<link rel="stylesheet" type="text/css" href="css/simpleslides-1.0.css" />`

to the HTML head section.

### Setup Gallery

Now as the plugin is actually installed the slides can be added to the page.

First is the actual gallery window which will display all of the slides one by one.

Simply add:-
`<div class="gallery"></div>`

(Feel free to style the CSS for this class. Just remember to keep he name the same or it will no work.)

### Adding Buttons

To progress though the slides there needs to be atleast 1 button on the page with the class name nextimg
Theres also an optional back button called backimg

Example:-

`<a class="backimg">&#171;Back</a>`
`<a class="nextimg">Next&#187;</a>`

(and again, feel free to style these but they must retain their class names)

### The Slides

There can be as many, or as few images as you like within gallery.
To add an image simply add the line:-

`<li class="galleryitem"><img src="images/9.jpg" alt="Photo 5"/></li>`

Anywhere on the page, editing the image url and alternative text

The plugin Looks for all HTML within the `<li class="galleryitem"> </li>` tags. And hides them all through CSS. Images work best within the list items, but you could in theory use videos and other elements.

## Tips

The FIRST galleryitem on the page will automatically be loaded into the gallery on runtime. 

You can put an alternative image and link within the gallery div for browsers that have javascript disabled

## Licence

Simple Slides may be used by anyone for any purpose, in both a personal and commercial 
website or product. 

If you use this plugin we would like to ask you to give credit where its due - If not at the very least, leave the description within the JS file intact.

## Credits

Simple Slides was created by the [Co Snap](http://cosnap.co.uk/) team.

Individuals
Craig Rood [Website](http://craigrood.com/)
Sam Stefan [Website](http://samsefan.co.uk/)