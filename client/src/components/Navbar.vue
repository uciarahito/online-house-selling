<template lang="html">
  <div class="navbar navbar-inverse navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">Online House Selling</a>
      </div>
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <li class="active"><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li><a v-on:click="onAddHouse">Add House</a></li>
        </ul>
      </div><!--/.nav-collapse -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  methods: {
    onAddHouse() {
      this.$router.push('/newhouse')
    }
  }
}
</script>

<style lang="css">
</style>
