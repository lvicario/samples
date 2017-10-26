
                          Grunt File : Grunt the javascript task runner

  What is it?
  -----------

  Automation, performing repetitive tasks like minification, compilation, unit testing and linting.

  The Latest Version
  ------------------

  Details of the latest version can be found on the Grunt the javascript task runner
  server project page under <http://gruntjs.com/>.
  Latest Version.
  Stable: v0.4.5 (npm)
  Development: v0.4.6 (github)

  Why use Grunt?
  -------------

  The Grunt ecosystem is huge and it's growing every day. With literally hundreds of plugins to choose from, you can use Grunt to automate just about anything with a minimum of effort. If someone hasn't already built what you need, authoring and publishing your own Grunt plugin to npm is a breeze. 

  Getting Started
  ------------

  Read the Getting Started guide <http://gruntjs.com/getting-started> for instructions on using Grunt in your projects. Once you've done that, check out a Sample Gruntfile <http://gruntjs.com/sample-gruntfile> and learn more about Configuring Tasks <http://gruntjs.com/configuring-tasks>.

  How To Use?
  ------------
  1. Open the package.json.
  2. Open a Command line/CMD. <dir>/gruntfile/
  3. Install the following plugins.
    - To install plugins : npm install grunt-contrib-concat grunt-contrib-uglify grunt-contrib-jshint grunt-contrib-sass grunt-contrib-imagemin grunt-contrib-watch --save-dev

    "grunt-contrib-sass": "~0.9.2",
    "load-grunt-tasks": "~3.1.0",
    "grunt-contrib-watch": "~0.6.1",
    "grunt-csscomb": "~3.0.0",
    "grunt-contrib-uglify": "~0.5.1",
    "grunt": "~0.4.5",
    "grunt-contrib-concat": "~0.4.0",
    "grunt-contrib-imagemin": "~0.9.4",
    "grunt-contrib-csslint": "~0.4.0",
    "grunt-contrib-jshint": "~0.11.1",
    "grunt-contrib-clean": "~0.6.0"

    
  4. Run 
      "concatenation" -         <ex. grunt concat>
      "image minify"-           <ex. grunt imagemin>
      "sass"-                   <ex. grunt sass>
      "javascript minify"-      <ex. grunt uglify>
      "watch sass and uglify "- <ex. grunt watch>