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
              <h4>hubungi</h4>
              <h4><b>{{house.phone}}</b></h4>
            </div>
        </div>

        <div class="col-md-4">
            <h3 class="price">
              Rp {{house.price}}
            </h3>
        </div>

        <div class="col-md-8">
          <div class="thumbnail">
            <div class="caption-full">
                <h4>Deskripsi</h4>
                <p>See more snippets like these online store reviews at <a target="_blank" href="http://bootsnipp.com">Bootsnipp - http://bootsnipp.com</a>.</p>
                <p>Want to make these reviews work? Check out
                    <strong><a href="http://maxoffsky.com/code-blog/laravel-shop-tutorial-1-building-a-review-system/">this building a review system tutorial</a>
                    </strong>over at maxoffsky.com!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
            <div class="ratings">
                <p class="pull-right">3 reviews</p>
                <p>
                    <span class="glyphicon glyphicon-star"></span>
                    <span class="glyphicon glyphicon-star"></span>
                    <span class="glyphicon glyphicon-star"></span>
                    <span class="glyphicon glyphicon-star"></span>
                    <span class="glyphicon glyphicon-star-empty"></span>
                    4.0 stars
                </p>
            </div>
          </div>
        </div>



    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'detailhome',
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
      }
    }
  },
  methods: {
    ...mapGetters([
      'houses'
    ])
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
  background-color: dimgray;
  width: 200px;
  height: 40px;
  color: white;
  text-align: -webkit-center;
  padding-top: 8px;
}
</style>
