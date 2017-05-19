<template lang="html">
  <div id="section" class="container">
    <!-- Portfolio Item Heading -->
    <div class="row">
        <div class="col-lg-12">
            <h3 id="title" class="page-header">{{house.title}}</h3>
            <h5>{{house.city}}, {{house.state}}</h5>
        </div>
    </div>
    <!-- /.row -->

    <!-- Portfolio Item Row -->
    <div class="row">

        <div class="col-md-8">
            <img class="img-responsive" v-bind:src="house.image" alt="">
            <div class="col-md-4">
              <h4>harga</h4>
              <h4><b>Rp {{house.price}}</b></h4>
            </div>
            <div class="col-md-4">
              <h4>ukuran</h4>
              <h4><b>{{house.size}}</b></h4>
            </div>
            <div class="col-md-4">
              <h4>wilayah</h4>
              <h4><b>{{house.city}}, {{house.state}}</b></h4>
            </div>
        </div>

        <div class="col-md-4">
            <h3 class="price">
              Rp {{house.price}}
            </h3>
            <h3 class="phone">
              <span class="glyphicon glyphicon-earphone" aria-hidden="true"></span> {{house.phone}}
            </h3>
            <h3 class="owner">
              <span class="glyphicon glyphicon-user" aria-hidden="true"></span> {{house.owner}}
            </h3>
        </div>

        <div class="col-md-8">
          <div class="thumbnail">
            <div class="caption-full">
                <h4>Deskripsi</h4>
                <p>{{house.description}}</p>
            </div>
            <!-- <div> -->
              <!-- <markerdetail :coordinate="house.latlong"></markerdetail> -->
            <!-- </div> -->
            <div id="map" v-model="house.latlong">
              <gmap-map
                :center="marker"
                :zoom="15"
                scrollwheel="false"
                style="width: 500px; height: 300px">
                <gmap-marker
                  :position="marker">
                </gmap-marker>
              </gmap-map>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import MarkerDetail from './MarkerDetail'
import { mapGetters } from 'vuex'

export default {
  name: 'detailhome',
  props: ['coordinate'],
  components: {
    MarkerDetail
  },
  data() {
    return {
      house: {
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
      },
      marker: {}
    }
  },
  methods: {
    ...mapGetters([
      'houses'
    ]),
    parseCoordinate() {
      console.log('Ini test coordinate: '+this.coordinate);
      let parsedCoor = this.house.latlong.split(",");
      this.marker.lat = Number(parsedCoor[0]);
      this.marker.lng = Number(parsedCoor[1]);
    }
  },
  created() {
    let self = this
    let house_id = this.$router.currentRoute.query.id
    console.log(house_id);
    if (house_id) {
      let houses = self.houses()
      let index = houses.findIndex( p => p._id == house_id)
      if (index != -1) {
        self.house = houses[index]
      }
    }
  },
  mounted: function(){
    this.parseCoordinate()
  }
}
</script>

<style lang="css">
#section {
  text-align: left;
}
#title {
  margin: 5px 0px 0px 0px;
}

.price {
  background-color: #009688;
  width: 200px;
  height: 40px;
  color: white;
  text-align: -webkit-center;
  padding-top: 8px;
}

.phone {
  background-color: #E91E63;
  width: 250px;
  height: 40px;
  color: black;
  text-align: -webkit-center;
  padding-top: 8px;
}

.owner {
  background-color: #cddc39;
  width: 150px;
  height: 40px;
  color: black;
  text-align: -webkit-center;
  padding-top: 8px;
}

.map {
  margin: 1%;
  text-align: left;
}

#map {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
