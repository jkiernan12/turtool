# TurTool 🐢

Turing School command line tool: open up front-end lessons and project specs.

## Description

Why spend five minutes doing something manually when you can spend five hours automating it? That was my mantra when working on this mini-project. I was sick and tired of searching for lesson plans and project specs, so I decided to waste a day writing a command line tool that did it for me. Of course, I had the pleasure of learning a little about command line libraries (Commander and Inquirer) and web scraping along the way. Maybe not a total waste of time???

## Getting Started

### Installing

* Clone down the repo
* Navigate into the local repo, and enter `npm init -g`
* Rejoice

### Executing program

* Pull up lessons with `turtool l KEYWORD`  or `turtool lesson KEYWORD`
* Pull up projects with `turtool p KEYWORD` or `turtool project KEYWORD`
* Ex: `turtool p rancid` or `turtool lesson sass`

## Tech

* Node & NPM
* CLI libraries
  * [Commander](https://github.com/tj/commander.js)
  * [Inquirer](https://github.com/SBoudrias/Inquirer.js)
* DOM navigation/traversal libraries
  * [HTML Parser 2](https://github.com/fb55/htmlparser2)
  * [CSS-select](https://github.com/fb55/css-select)
  * [dom-serializer](https://github.com/cheeriojs/dom-serializer)
* HTTP request
  * [Got](https://github.com/sindresorhus/got)
