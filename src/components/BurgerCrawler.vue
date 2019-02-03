<template>
  
</template>

<script>

  import axios from "axios";

  export default {

    data: function(){
        return {
      
            venues: []

        }
    },

    mounted() {
    
        this.getVenues()

    },
    methods: {
    
        getVenues: function() {
        
            axios.get(process.env.ROOT_API + process.env.BURGER_VENUES_END_POINT)
                    .then(response => {

                      console.log(response.data);

                      this.venues = response.data
                    
                    }).catch(error => {
                        
                        console.log(error);
                    });
        }
    
    }

  };

</script>
