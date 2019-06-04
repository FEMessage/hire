let glob = require('glob')
let markdownFiles = glob.sync('*.md').filter(file => file != 'README.md').map(file => '/' + file)

module.exports = {
  title: '前端招聘',
  description: '前端招聘，有意愿做开源组件、成为组件开发者(developer), 能给我们提Pull Request的优先(可以不做题，不走寻常路😎)',
  head: [
    ['link', {rel: 'icon', href: 'https://avatars3.githubusercontent.com/u/39977793?s=200&v=4'}]
  ],
  base: '/hire/',
  themeConfig: {
    repo: 'FEMessage/hire',
    editLinks: true,
    editLinkText: '帮助我们完善此页面',
    sidebar: markdownFiles
  },
  // 站点配置
  plugins: []
} 
