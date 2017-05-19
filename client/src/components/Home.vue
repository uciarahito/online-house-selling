<template lang="html">
  <!-- <h1>Masuk ke halaman home: {{houses}}</h1> -->
  <div class="container">
    <div class="wide">
    </div>

    <h1 id="section">List of Houses</h1>

    <div class="col-sm-12 col-lg-12 col-md-12">
      <ul class="media-list">
        <li id="listhouses" class="media" v-for="(house, index) in houses">
          <div class="media-left">
            <a href="#" target="_blank">
              <img class="media-object" v-bind:src="house.image" alt="Image">
            </a>
          </div>
          <div class="media-body">
            <h4 class="media-heading">
              <a v-on:click="displayDetailHome(house._id)" :coordinate="house.latlong" target="_blank">{{house.title}}</a>
            </h4>
            <p>{{house.description}}</p>
            <h5><span class="glyphicon glyphicon-home" aria-hidden="true"></span> {{house.location}}</h5>
            <h5><i>Owner: {{house.owner}}</i>  &nbsp;&nbsp;<span class="glyphicon glyphicon-earphone" aria-hidden="true"></span> {{house.phone}}</h5>
            <h5><a v-on:click="removeHouse(house._id)">Delete</a>&nbsp;&nbsp;<a v-on:click="displayEditHouse(house._id)">Edit</a></h5>
          </div>
        </li>
      </ul>
    </div>

  </div>

</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'home',
  computed: {
    houses() {
      return this.$store.state.houses
    }
  },
  methods: {
    ...mapActions([
      'deleteHouse'
    ]),
    displayAllHouses(house) {
      this.$store.dispatch('houses')
    },
    displayEditHouse(house_id) {
      console.log(house_id);
      this.$router.push({
        name: 'EditHouse',
        query: {
          id: house_id
        }
      })
    },
    displayDetailHome(house_id) {
      console.log(house_id);
      this.$router.push({
        name: 'DetailHouse',
        query: {
          id: house_id
        }
      })
    },
    removeHouse(house_id) {
      console.log('house_id di Home.vue: ' + house_id);
      // this.deleteHouse(house_id)
      // this.$router.push('/')
      this.$store.dispatch('deleteHouse', house_id)
      // this.$router.push('/')
      window.location.href = "/"
    }
  },
  created() {
    let self = this
    console.log('kiki');
    self.displayAllHouses()

  }
}
</script>

<style lang="css">
.wide {
  width:100%;
  height:300px;
  background-image:url('http://www.14er.org/wp-content/uploads/2014/07/iStock_000011644477Medium.jpg');
  background-size:cover;
}

.media-object {
  width: 128px;
  padding: 10px;
}

.media {
  border-top: 1px solid lightgrey;
  padding-top: 20px;
}

#section {
  text-align: left;
}

#listhouses {
  text-align: left;
}

</style>
