var everyday = new Vue({
    el: "#every_day",
    data: {
        content: ''
    },
    computed: {
        randomcolor() {
            // return setTimeout(() => {
            return function() {
                    var red = Math.random() * 255;
                    var green = Math.random() * 255;
                    var blue = Math.random() * 255;
                    return "rgb(" + red + ", " + green + ", " + blue + ")";
                }
                // }, 300)
        },
        getContent() {
            return this.content
        }
    },
    created () {
        axios({
            method: "get",
            url: "/queryEveryDay"
        }).then(function(res) {
            // console.log(everyday)
            everyday.content = res.data.data[0].content;
            // console.log(res.data.data[0].content);
            // console.log(res)
        }).catch(function (resp) {
            console.log("请求失败");
        });
    }
});

// 文章列表
var articalList = new Vue({
    el: "#article_list",
    data: {
        articleList: [],
        pageNumList:[],
        page:1,
        pagesize:5,
        count:100
    },
    computed:{
        //点击翻页
        jumpTo:function () {
            return function(page) {
                this.getPage(page, this.pagesize);
                console.log(page,this.pagesize)
            }
        },

        getPage: function () {
            return function (page, pagesize) {
                axios({
                    method: "get",
                    url: "/queryBlogByPage?page=" + (page - 1) + "&pagesize=" + pagesize
                }).then(function(resp) {
                    // console.log(resp)
                    var result = resp.data.data;
                    var list = []
                    for (var i in result) {
                        var temp = {};
                        temp.title = result[i].title;
                        temp.content = result[i].content;
                        temp.view = result[i].view;
                        temp.tags = result[i].tags;
                        temp.ctime = result[i].ctime;
                        temp.id = result[i].id;
                        temp.link = "/blog_details.html?bid=" + result[i].id;
                        list.push(temp)
                    }
                    articalList.articleList = list;
                    articalList.page = page;
                }).catch(err => {
                    console.log(err,'err')
                });
                axios({
                    methods:'get',
                    url:'/queryBlogCount',   //用来请求总页数，翻页专用
                }).then(res => {
                    console.log(res)
                    articalList.count = res.data.data[0].count;
                    this.generatePageTool;
                }).catch(err => {
                    console.log(err);

                })

            }
        },
        generatePageTool: function() {
            var nowPage = this.page;
            var pageSize = this.pagesize;
            var totalCount = this.count;
            var result = [];
            result.push({ text: "首页", page: 1 });
            if (nowPage > 2) {
                result.push({ text: nowPage - 2, page: nowPage - 2 });
            }
            if (nowPage > 1) {
                result.push({ text: nowPage - 1, page: nowPage - 1 });
            }
            result.push({ text: nowPage, page: nowPage });
            if (nowPage + 1 <= (totalCount + pageSize - 1) / pageSize) {
                result.push({ text: nowPage + 1, page: nowPage + 1 });
            }
            if (nowPage + 2 <= (totalCount + pageSize - 1) / pageSize) {
                result.push({ text: nowPage + 2, page: nowPage + 2 });
            }
            console.log(111112)

            result.push({ text: "末页", page: parseInt((totalCount + pageSize - 1) / pageSize) });
            console.log(11111)
            this.pageNumList = result;
            return result;
            console.log(result,112)
        }

    },
    created () {
        this.getPage(this.page,this.pagesize);
    }
})
