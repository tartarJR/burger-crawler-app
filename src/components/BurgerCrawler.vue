<template>

  <div>
  
    <nav class="navbar navbar-dark bg-dark">
      <span class="navbar-brand mb-0 h1">Burger Crawler</span>
    </nav>

    <div class="container">

      <div class="row">

        <div v-for="(venue, i) in venues" :key="i" class="col mt-4 mb-4">

          <div class="card" style="width: 18rem;">
            <div class="card-header">
              <h5>{{ venue.venueName }}</h5>
            </div>
            <img class="card-img-top" :src="venue.latestBurgerPhotoUrl">
          </div>
    
        </div>

      </div>

    </div>

  </div>

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
