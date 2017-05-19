<template lang="html">
  <div class="container">
    <div class="col-sm-10 col-lg-10 col-md-10">
      <div class="panel- panel-default">
        <div class="panel-heading">
          <h3>Update House</h3>
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
            <input type="submit" class="btn btn-primary" value="Update House" v-on:click="saveEditing">
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

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
      }
    }
  },
  methods: {
    ...mapGetters([
      'houses'
    ]),
    ...mapActions([
      'updateHouse'
    ]),
    saveEditing() {
      this.updateHouse(this.newHouse)
      // this.$router.push('/')
      window.location.href = "/"
      // this.$store.dispatch('updateHouse', this.newHouse)
      // this.$router.push('/')
    }
  },
  created() {
    let self = this
    let house_id = this.$router.currentRoute.query.id
    console.log('house_id: '+house_id);
    if (house_id) {
      let houses = self.houses()
      let index = houses.findIndex( p => p._id == house_id)
      if (index != -1) {
        self.newHouse = houses[index]
      }
    }
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
</style>
