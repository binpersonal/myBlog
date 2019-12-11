 // 随机标签
var randomTags = new Vue({
        el: '#random_tags',
        data: {
            tags: []
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
            axios({
                methods: 'get',
                url: "/queryRandomTags"
            }).then(res => {
                console.log(res,21);
                var tags = res.data.data;
                var result = [];
                for (var i in tags) {
                    var temp = {};
                    temp.tag = tags[i].tag;
                    temp.path = '/blog_details.html?bid=' +  tags[i].id;
                    result.push(temp);
                }
                randomTags.tags = result;
                console.log(randomTags.tags,123)

            }).catch(res => {
                console.log(res)
            })

        }
    })
 // 最近热门
var newHot = new Vue({
        el: "#new_hot",
        data: {
            hotList: [],
        },
    computed: {
        getHotList: function () {
            return function () {
                axios({
                    methods: 'get',
                    url: '/queryBlogNewHot',
                }).then(res => {
                    // console.log(res,1);
                    var data = res.data.data
                    var result = [];

                    for (var i = 0; i < data.length; i++) {
                        var temp = {};
                        temp.title = data[i].title;
                        temp.path = '/blog_details.html?bid=' +  data[i].id;
                        result.push(temp);
                    }
                    newHot.hotList = result;
                    // console.log(newHot.hotList,2)
                }).catch(err => {
                    console.log(err)
                })
            }
        }
    },
    created() {
            console.log(this,12)
            this.getHotList();
    },
})
 // 最新评论
var newComments = new Vue({
    el: "#new_comments",
    data: {
        newComponent: [
        //     {
        //     name: '',
        //     content: '',
        //     time: ''
        // }
        ]
    },
    created () {
        axios({
            methods:'get',
            url:'/queryNewComments'
        }).then(res => {
            console.log(res,11110);
            newComments.newComponent = res.data.data;
            console.log( res.data.data,' res.data.data.comments')
        })
    }
})

 //底部
var footer = new Vue({
    el: '#footer',
    data: {
        footerList:[]
    },
    created() {
        axios({
            methods: 'get',
            url: "/queryRandomTags"
        }).then(res => {
            console.log(res,"footer");
            var tags = res.data.data;
            var result = [];
            for (var i in tags) {
                var temp = {};
                temp.tag = tags[i].tag;
                temp.path = '/blog_details.html?bid=' +  tags[i].id;
                result.push(temp);
            }
            footer.footerList = result;
            console.log(footer.footerList,'111footer')

        }).catch(res => {
            console.log(res)
        })
    },
    methods: {

    }
})
