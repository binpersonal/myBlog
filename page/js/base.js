// 随机标签
var randomTags = new Vue({
        el: '#random_tags',
        data: {
            tags: ["payphone", "javascript", "css", "java", "html", "jquery", "vue", "javascript", "css", "java", "html", "jquery", "vue", "javascript", "css", "java", "html", "jquery", "vue", "javascript", "css", "java", "html", "jquery", "vue"]
        },
        computed: {
            // 随机颜色
            randomColor() {
                return function() {
                    var red = Math.random() * 255;
                    var green = Math.random() * 255;
                    var blue = Math.random() * 255;
                    return "rgb(" + red + "," + green + "," + blue + ")";
                }
            },
            // 随机大小
            randomSize() {
                return function() {
                    var size = (Math.random() * 20 + 12) + 'px';
                    return size;
                }
            }

        },

        created() {

        }
    })
    // 文章列表
var articalList = new Vue({
        el: "#article_list",
        data: {
            articalList: [{
                    title: '使用Nginx反向代理部署laravel和history模式的Vue项目',
                    content: '我们以在我本地的开发环境为例，windows7+nginx+Vue+Laravel5，假设我想使用的域名是zh30.com。想达成的我们以在我本地的开发环境为例，windows7+我们以在我本地的开发环境为例，windows7+我们以在我本地的开发环境为例，windows7+效果：我们想直接访问时使用Vue开发的单页面应用index.html，做为我们的前台交互，且在Vue中使用history路由模式。后台和接口使用laravel框架进行开发，所以想使用zh30.com/admin 来访问后台管理，接口交互想使用zh30.com/api/xxx。第一步，本地解析hosts，zh30.com指向到127.0kjbbkbk',
                    ctime: '2019.10.10'
                },
                {
                    title: 'Vue history模式编译后nginx无法访问的问题',
                    content: 'Vue的项目，使用history路由模式相比hash模式来说，url会比较美观。但新手在把项目编译后并使用nginx配置访问时，点击其它页时会空白，F12查看请求，返回304，并且提示“We’re sorry but xxxxxx doesn’t work properly without JavaScript enabled. Please enable it to continue。我解决的方法是首先在nginx里要正确配置好了urlrewrite：location /',
                    ctime: '2019.10.19'
                },
                {
                    title: '屏蔽nPlayer视频广告',
                    content: 'nPlayer免费版在播放视频前后都会加上长达十几秒的广告，又没钱买收费版，所以就得找办法屏蔽广告。之前我使用某火箭图标的App时，发现它可以通过配置自定义规则来屏蔽指定的请求，且成功用于“车来了”App的广告屏蔽。所以用它来屏蔽nPlayer的广告估计也行，毕竟大同小异，大同小异。使用Stream来记录请求，打开nPlayer观看视频，出现广告后，回到Stream查看日志。经多次尝试，凭经验el5，假设我想使用的域名是zh30.com。想达成的我们以在我本地的开发环境为例，windows7+我们以在我本地的开发环境为例，windows7+我们以在我本地的开发环境为例，windows7+效果：我们想直接访问时使用Vue开发的单页面应用index.html，做为我们的前台交互，且在Vue中使用history路由模式。后台和接口使用laravel框架进行开发，所以想使用zh30.com/admin 来访问后台管理，接口交互想使用zh30.com/api/xxx。第一步，本地解析hosts，zh30.com指向到127.0kjbbkbk',
                    ctime: '2019.10.10'
                },
                {
                    title: 'php 验证身份证号',
                    content: '转载，PHP验证身份证号的正确性，使用了正则验证身份证号中的省市数据、出生日期，验证尾号识别码。private function is_idcard($vStr) {        $vCity = array',
                    ctime: '2019.11.1'
                },
                {
                    title: '平安拼团80块的beatsx',
                    content: '最近到处都在发平安拼团活动，80块的BeatsX耳机到手，第一次用这么高逼格的耳机，手感很不错，戴着略丑，音质还行，发平安拼团活动，80块的BeatsX耳机到手，第一次用这么高逼格的耳机，手感很不错，戴着略丑，音质还行，发平安拼团活动，80块的BeatsX耳机到手，第一次用这么高逼格的耳机，手感很不错，戴着略丑，音质还行，发平安拼团活动，80块的BeatsX耳机到手，第一次用这么高逼格的耳机，手感很不错，戴着略丑，音质还行，发平安拼团活动，80块的BeatsX耳机到手，第一次用这么高逼格的耳机，手感很不错，戴着略丑，音质还行，发平安拼团活动，80块的BeatsX耳机到手，第一次用这么高逼格的耳机，手感很不错，戴着略丑，音质还行，发平安拼团活动，80块的BeatsX耳机到手，第一次用这么高逼格的耳机，手感很不错，戴着略丑，音质还行，发平安拼团活动，80块的BeatsX耳机到手，第一次用这么高逼格的耳机，手感很不错，戴着略丑，音质还行，发平安拼团活动，80块的BeatsX耳机到手，第一次用这么高逼格的耳机，手感很不错，戴着略丑，音质还行，发平安拼团活动，80块的BeatsX耳机到手，第一次用这么高逼格的耳机，手感很不错，戴着略丑，音质还行，发平安拼团活动，80块的BeatsX耳机到手，第一次用这么高逼格的耳机，手感很不错，戴着略丑，音质还行，',
                    ctime: '2019.11.10'
                }
            ]
        }
    })
    // 最近热门
var newHot = new Vue({
        el: "#new_hot",
        data: {
            hotList: [{
                    path: '/',
                    title: '使用码云git的webh使用码云git的webhook实现生产环境代'
                },
                {
                    path: '/',
                    title: '使用码云git的webh使用码云git的webhook实现生产环境代'
                },
                {
                    path: '/',
                    title: '使用码云git的webh使用码云git的webhook实现生产环境代'
                },
                {
                    path: '/',
                    title: '使用码云git的webh使用码云git的webhook实现生产环境代'
                },
                {
                    path: '/',
                    title: '使用码云git的webh使用码云git的webhook实现生产环境代'
                },
                {
                    path: '/',
                    title: '使用码云git的webh使用码云git的webhook实现生产环境代'
                },
                {
                    path: '/',
                    title: '使用码云git的webh使用码云git的webhook实现生产环境代'
                },
                {
                    path: '/',
                    title: '使用码云git的webh使用码云git的webhook实现生产环境代'
                },
                {
                    path: '/',
                    title: '使用码云git的webh使用码云git的webhook实现生产环境代'
                }
            ],

        }
    })
    // 最新评论
var newComments = new Vue({
    el: "#new_comments",
    data: {
        newComponent: [{
            name: 'rep',
            content: '受不了比方说乐山大佛流口水的能力斯柯达解放南路',
            time: '1'
        }, {
            name: 'rep',
            content: '受不了比方说乐山大佛流口水的能力斯柯达解放南路',
            time: '1'
        }, {
            name: 'rep',
            content: '受不了比方说乐山大佛流口水的能力斯柯达解放南路',
            time: '5'
        }, {
            name: 'rep',
            content: '受不了比方说乐山大佛流口水的能力斯柯达解放南路',
            time: '3'
        }, {
            name: 'rep',
            content: '受不了比方说乐山大佛流口水的能力斯柯达解放南路受不了比方说乐山大佛流口水的能力斯柯达解放南路',
            time: '2'
        }, {
            name: 'rep',
            content: '受不了比方说乐山大佛流口水的能力斯柯达解放南路',
            time: '1'
        }, {
            name: 'rep',
            content: '受不了比方说乐山大佛流口水的能力斯柯达解放南路',
            time: '1'
        }, {
            name: 'rep',
            content: '受不了比方说乐山大佛流口水的能力斯柯达解放南路',
            time: '1'
        }]
    }
})