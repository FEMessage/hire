const fs = require('fs')

const reg = /!\[\S*\]\((.*?)\)/g
const template = '<v-img src="$1" width="740" provider="none" />'
const fileName = 'README.md'

const file = fs.readFileSync(fileName, {encoding: 'utf8'})
const newFile = file.replace(reg, template)

fs.writeFileSync(fileName, newFile, {encoding: 'utf8'})
