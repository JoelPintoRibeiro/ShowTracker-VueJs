<template>
<div>

<b-row>
<b-col>

  <input type="text" v-model="searchVal" @keyup.enter="onSubmit" >

</b-col>

</b-row>

  <b-row class="py-4">
    <b-col cols="4" v-for="(item) in shows" :key="item.id">
      <b-card  :title="item.name"
                :img-src="baseUrl+item.backdrop_path"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2">
      </b-card>
    </b-col>
  </b-row>
</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

import SearchApi from "@/api";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  data() {
    return {
      shows: [],
      searchVal: "",
      baseUrl: "https://image.tmdb.org/t/p/w500/"
    };
  },
  methods: {
    onSubmit(object) {
      console.log(object);
      SearchApi.searchTv(this.searchVal).then(response => {
        this.shows = response.results;
      });
      // SearchApi.searchTv("game").then(response => {
      //   this.shows = response.results;
    }
  },

  mounted() {
    debugger;
    SearchApi.searchTv("game").then(response => {
      this.shows = response.results;
    });
  }
};
</script>
