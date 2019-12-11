var blogList = new Vue({
    el: '#blog_list',
    data: {
        blogLists: []
    },
    created () {
        axios({
            methods:'get',
            url:'/queryAllBlog'
        }).then(res => {
            // console.log(res,112121 + "queryAllBlog")
            for (var i = 0 ; i < res.data.data.length ; i ++) {
                res.data.data[i].link = "/blog_details.html?bid=" + res.data.data[i].id;
            }
            blogList.blogLists = res.data.data;
            console.log(blogList.blogLists,'q')
        })
    }
})