#!/usr/bin/env node

const auditory = require('@projectlint/auditory-plugins')
const {cli, parseArgs} = require('@projectlint/cli')

const params = require('./package.json')


const extraArguments =
[
  ['--configLevel', {
    choices: ['strict', 'recommeded'],
    default: 'recommended',
    dest: 'configLevel'
  }],
  ['--strict', {
    action: 'storeConst',
    constant: 'strict',
    dest: 'configLevel'
  }]
]

const {configs, format, options, rules} = auditory(parseArgs({extraArguments, params}))

cli(rules, configs, format, options)
