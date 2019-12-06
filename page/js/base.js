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