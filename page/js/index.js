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
            console.log(res.data.data[0].content);
            console.log(res)
        }).catch(function (resp) {
            console.log("请求失败");
        });
    }
});