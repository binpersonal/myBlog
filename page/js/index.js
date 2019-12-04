var everyday = new Vue({
    el: "#every_day",
    data: {
        content: '不以善小而不为，不以恶小而为之-----------刘备'
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
    }
});