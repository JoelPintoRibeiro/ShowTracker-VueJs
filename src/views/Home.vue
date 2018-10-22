<template>
  <div>
    <b-row class="py-2">
      <b-col style="text-align:center;">
        <input
          type="text"
          v-model="searchVal"
          @keyup.enter="onSubmit"
          placeholder="Chercher une série"
        >
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h1 style="text-align:center">Les series qui font le buzz en ce moment</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="2">
        <b-row style="height:100%">
          <b-col style="border-right:1px solid black;padding-left:60px">
            <b-row>
              <b-col>
                <h1>Filter by</h1>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <b-form-group label="Genre :">
                  <b-form-checkbox-group
                    stacked
                    name="flavour2"
                    v-model="selectedGenre"
                    :options="genresOptions"
                  ></b-form-checkbox-group>
                </b-form-group>
                <br>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <b-button variant="success">Apply Filter</b-button>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="10">
        <b-row class="py-2">
          <b-col cols="4" v-for="(item) in filteredShowList" :key="item.id">
            <b-card-group deck>
              <b-card
                no-body
                @click="onShowClick(item.id)"
                overlay
                :img-src="imageCompletePath(item.backdrop_path)"
                img-alt="Image"
                img-bottom
                tag="article"
                style="max-width: 20rem;height:100%"
                class="mb-2 mx-auto"
                title-tag="h5"
                :header="item.name"
                header-tag="header"
              ></b-card>
            </b-card-group>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
// @ is an alias to /src
import NotFoundImage from "@/assets/noimagefound.png";
import SearchApi from "@/api";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      selectedGenre: [],
      searchVal: "",
      baseUrl: "https://image.tmdb.org/t/p/w500/",
      NotFoundImage: NotFoundImage,
      genresOptions: []
    };
  },
  computed: {
    filteredShowList: function() {
      debugger;
      if (this.selectedGenre.length === 0) {
        return this.$store.state.shows;
      } else {
        return this.$store.state.shows.filter(val => {
          debugger;
          return (
            this.selectedGenre.filter(
              genre => -1 !== val.genre_ids.indexOf(genre)
            ).length > 0
          );
        });
      }
    }
  },
  methods: {
    imageCompletePath(imageUrl) {
      return imageUrl ? this.baseUrl + imageUrl : this.NotFoundImage;
    },
    onSubmit(object) {
      SearchApi.searchTv(this.searchVal).then(response => {
        this.$store.commit("updateShowList", response.results);
      });
    },
    onShowClick(showId) {
      this.$router.push(`/show/${showId}`);
    }
  },
  created() {
    SearchApi.getGenre().then(response => {
      this.genresOptions = response.genres.map(val => {
        return { text: val.name, value: val.id };
      });
    });
  },
  mounted() {
    SearchApi.getPopular().then(response => {
      this.$store.commit("updateShowList", response.results);
    });
  }
};
</script>

<style scoped>
.card {
  cursor: pointer;
}
.card-img-top {
  max-height: 179px;
}
.card-body {
  border-top: 1px solid gainsboro;
}
</style>
