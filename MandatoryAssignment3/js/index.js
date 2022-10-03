Vue.createApp({

    data() {

        return {
            stringToDuplicate: null,
            numberOfTimes: null,
            result: "",
        }

    },

    methods: {

        duplicate(){
            this.result = "";
            if(this.numberOfTimes > 0)
            {
                for (i = this.numberOfTimes; i > 0; i--) 
                {
                    this.result = this.result + this.stringToDuplicate;
                }
            }
            else 
            {
                this.result = "Must be non-negative number: " + this.numberOfTimes;
            }
            
        },
    }

}).mount("#app")