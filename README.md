# Doto

> A to-do utility for source comments.

## Requires

* [Node.js](http://nodejs.org)
* [NPM - Node Package Manager](http://npmjs.org)

## Dependencies

* [Clii](http://github.com/ecarter/clii) - simple command line interface utility

## Install

    $ git clone https://github.com/ecarter/doto.git
    $ cd doto && npm install
    $ npm link    # optional

## Test

Testing done with [Mocha](http://visionmedia.github.com/mocha)

    $ npm test

## Getting Started

    $ doto

      Usage: doto

        -h, --help              this help menu
        -v, --version           show version number
        -s, --search [path]     Search directory files
        -f, --file [name]       Export TODOs to file
        -i, --ignore <files>    Exclude from search
        -p, --pattern <regexp>  Match regular expression


      Examples:

      # basic

        doto -sf ./lib TODO.md

      # ignore files ( comma separated, no space )

        doto -sfi ./lib TODO.md node_modules,test,docs

    # match patterns

      doto -sfp ./lib Tasks.md "^(.*)//sTask?:?(.*)$"

[Example TODO.md](https://github.com/ecarter/doto/blob/master/TODO.md)

## Licensing

> MIT License
> 
> Copyright (C) 2012 Erin Carter <hi@dnvsfn.com> ( <http://github.com/ecarter> )
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

