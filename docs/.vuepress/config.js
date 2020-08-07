module.exports = {
    title: '随心笔记',
    description: 'XuMinJun boke',
    head: [
        ['link', {
            rel: 'icon',
            href: `/favicon.ico`
        }]
    ],

    themeConfig: {
        nav: [ // 导航栏配置
            {
                text: '首页',
                link: '/'
            },
            {
                text: 'Vue知识',
                items: [
                    { text: '软技能', link: '/' },
                    { text: 'webgl', link: '/' }
                ]
            },
            {
                text: 'Nodejs',

            },
            {
                text: '微博',
                link: 'https://baidu.com'
            }
        ],
        "sidebar": {
            '/views/': [
                '',
                {
                    title: 'vue教程',
                    collapsable: true, // 不可折叠
                    children: ['view/vueStu', 'view/set', 'view/ref',
                        'view/vue3', 'view/vuex', 'view/vuecli'
                    ]
                },
                {
                    title: 'node教程',
                    collapsable: true, // 不可折叠
                    children: ['node/express', 'node/curd']
                },
                {
                    title: 'webpack教程',
                    collapsable: true, // 不可折叠
                    children: ['webpack/webpack']
                },
                {
                    title: 'vuePress教程',
                    collapsable: true, // 不可折叠
                    children: ['vuePress/vuePress']
                }
            ],

        },

    },
    dest: './docs/.vuepress/dist',
    ga: '',
    evergreen: true,
    sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 3, // 侧边栏显示2级
}