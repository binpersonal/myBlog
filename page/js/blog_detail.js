//文章详情，内容部分
var blogDetail = new Vue({
    el: "#blog_detail",
    data: {
        title: "",
        content: "",
        ctime: "",
        tags: "",
        views: ""
    },
    computed: {

    },
   created() {
        // 获取到关键字 详情页数
       var searchUrlParams = location.search.indexOf("?") > -1 ? location.search.split("?")[1].split("&") : "";

       if(searchUrlParams == "") {
           console.log(2)
           return;
       }
        var bid = -1;
        for (var i = 0; i < searchUrlParams.length; i++) {
            if (searchUrlParams[i].split("=")[0] == 'bid') {
                try {
                    bid = parseInt(searchUrlParams[i].split("=")[1]);
                } catch (e) {
                    console.log(e);
                }
            }
        }
        axios({
            method:'get',
            url: "/queryBlogById?bid=" + bid,
        }).then(res => {
            var result = res.data.data[0];
            blogDetail.title = result.title;
            blogDetail.content = result.content;
            blogDetail.ctime = result.ctime;
            blogDetail.tags = result.tags;
            blogDetail.views = result.view;
        }).catch(res => {
            console.log(res)
        })
   }
});

//发表评论
var sendComment = new Vue({
    el: "#send_comment",
    data: {
        vcode: "",
        rightCode: ""
    },
    computed: {

        // changeCode: function() {
        //     return function() {
        //         axios({
        //             method: "get",
        //             url: "/queryRandomCode"
        //         }).then(function(resp) {
        //             console.log(resp);
        //             sendComment.vcode = resp.data.data.data;
        //             sendComment.rightCode = resp.data.data.text;
        //         });
        //     }
        // },
        //发送评论
        sendComment: function() {
            return function () {
            //    对某遍文章进行评论
                var searchUrlParams = location.search.indexOf("?") > -1 ? location.search.split("?")[1].split("&") : "";

                if(searchUrlParams == "") {
                    console.log(2)
                    return;
                }
                var bid = -1;
                for (var i = 0; i < searchUrlParams.length; i++) {
                    if (searchUrlParams[i].split("=")[0] == 'bid') {
                        try {
                            bid = parseInt(searchUrlParams[i].split("=")[1]);
                        } catch (e) {
                            console.log(e);
                        }
                    }
                };

                //回复别人
                // var reply = document.getElementById("comment_reply").value;
                // var replyName = document.getElementById("comment_reply_name").value;
                // var name = document.getElementById("comment_name").value;
                // var email = document.getElementById("comment_email").value;
                // var content = document.getElementById("comment_content").value;
                axios({
                    method: "get",
                    url: "/addComment?bid=" + bid + "&parent=" + reply + "&userName=" + name + "&email=" + email + "&content=" + content + "&parentName=" + replyName
                }).then(function(resp) {
                    alert(resp.data.msg);
                });

            }
        }
    },
    created: function() {
        // this.changeCode();
    },
    methods: {
        //清空
        reset: function() {
            console.log(11)
            document.getElementById("comment_reply").value="";
            document.getElementById("comment_reply_name").value="";
            document.getElementById("comment_name").value="";
            document.getElementById("comment_email").value="";
            document.getElementById("comment_content").value="";
        }
    }

});
