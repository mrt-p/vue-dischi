var app = new Vue ({
    el: "#app",
    data: {
        discs: []
    },
    
    mounted() {
        const self = this;
            axios
                .get('https://flynn.boolean.careers/exercises/api/array/music')
                .then(function(result) {
                const discs = result.data.response;

                self.discs = discs;
                console.log(discs)
            });
    },
});

