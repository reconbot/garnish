#!/usr/bin/env node
var garnish = require('../')
var argv = require('minimist')(process.argv.slice(2))

argv.level = argv.level || argv.l
process.stdin.resume()
process.stdin.setEncoding('utf8')
process.stdin
    .pipe(garnish(argv))
    .pipe(process.stdout)