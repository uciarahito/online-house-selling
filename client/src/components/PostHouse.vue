<template lang="html">
  <div class="container">
    <div class="col-sm-10 col-lg-10 col-md-10">
      <div class="panel- panel-default">
        <div class="panel-heading">
          <h3>Add New House</h3>
        </div>
        <div id="formhouse" class="panel-body">
          <form id="form" class="form-inline">
            <div class="form-group">
              <label for="bookTitle">Title:</label>
              <input type="text" id="title" class="form-control" v-model="newHouse.title">
            </div><br><br>
            <div class="form-group">
              <label for="description">Description:</label>
              <input type="text" id="description" class="form-control" v-model="newHouse.description">
            </div><br><br>
            <div class="form-group">
              <label for="owner">Owner:</label>
              <input type="text" id="owner" class="form-control" v-model="newHouse.owner">
            </div><br><br>
            <div class="form-group">
              <label for="phone">Phone:</label>
              <input type="text" id="phone" class="form-control" v-model="newHouse.phone">
            </div><br><br>
            <div class="form-group">
              <label for="size">Size:</label>
              <input type="text" id="size" class="form-control" v-model="newHouse.size">
            </div><br><br>
            <div class="form-group">
              <label for="price">Price:</label>
              <input type="text" id="price" class="form-control" v-model="newHouse.price">
            </div><br><br>
            <div class="form-group">
              <label for="image">Image:</label>
              <input type="text" id="image" class="form-control" v-model="newHouse.image">
            </div><br><br>
            <div class="form-group">
              <label for="location">Location:</label>
              <input type="text" id="location" class="form-control" v-model="newHouse.location">
            </div><br><br>
            <div class="form-group">
              <label for="city">City:</label>
              <input type="text" id="city" class="form-control" v-model="newHouse.city">
            </div><br><br>
            <div class="form-group">
              <label for="state">State:</label>
              <input type="text" id="state" class="form-control" v-model="newHouse.state">
            </div><br><br>
            <div class="form-group">
              <label for="latlong">LatLong:</label>
              <input type="text" id="latlong" class="form-control" :value="marker.lat+','+marker.lng" placeholder="Latitude Longitude">
            </div><br><br>
            <!-- <boardmarker></boardmarker><br><br> -->
            <div id="mapAddHouse">
              <gmap-map
                :center="stateMarker"
                :zoom="18"
                :clickable="true"
                scrollwheel="false"
                style="width: 100%; height: 500px"
                v-on:click="mapClicked">
                  <gmap-marker
                    :position="stateMarker"
                    :clickable="true"
                    :draggable="true"
                    @g-click="center">
                  </gmap-marker>
              </gmap-map>
            </div>

            <input type="submit" class="btn btn-primary" value="Add House" v-on:click="createNewHouse">
          </form>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import BoardMarker from './BoardMarker'

export default {
  name: 'posthouse',
  data() {
    return {
      newHouse: {
        title: '',
        description: '',
        owner: '',
        phone: '',
        size: '',
        price: '',
        image: '',
        location: '',
        latlong: '',
        city: '',
        state: ''
      },
      center: {
        lat: -6.2372963,
        lng: 106.7904324
      }
    }
  },
  computed: {
    marker() {
      return this.$store.getters.marker
    },
    stateMarker() {
      return this.$store.getters.marker
    }
  },
  methods: {
    createNewHouse() {
      let house = {
        title: this.newHouse.title,
        description: this.newHouse.description,
        owner: this.newHouse.owner,
        phone: this.newHouse.phone,
        size: this.newHouse.size,
        price: this.newHouse.price,
        image: this.newHouse.image,
        location: this.newHouse.location,
        latlong: `${this.marker.lat},${this.marker.lng}`,
        city: this.newHouse.city,
        state: this.newHouse.state
      }
      this.$store.dispatch('createNewHouse', house)
      this.$router.push('/')
    },
    mapClicked: function(mouseArgs) {
      let coordinate = {
        lat: mouseArgs.latLng.lat(),
        lng: mouseArgs.latLng.lng()
      }
      this.$store.commit('setMarker', coordinate)
    }
  },
  components: {
    BoardMarker
  }
}
</script>

<style lang="css">
#formhouse {
  text-align: left;
}

label {
  width: 100px;
}

.form-inline .form-control {
  width: 600px;
}

#mapAddHouse {
  text-align: center;
  display: block;
  height: 100%;
  margin: 0 auto;
  padding: 0;
}
</style>
