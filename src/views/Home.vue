<template>
  <div>
    <b-row class="py-2">
      <b-col style="text-align:center;">
        <input
          type="text"
          v-model="searchVal"
          @keyup.enter="onSubmit"
          @input="updateSearchVal"
          placeholder="Chercher une série"
        >
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <ChildTest v-on:change-text="changeText" v-bind:test="test"/>
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
        <transition-group tag="div" class="row py-2" name="country-fade" v-bind:css="true">
          <b-col
            cols="4"
            class="list-complete-item"
            v-for="(item) in filteredShowList"
            :key="item.id"
          >
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
        </transition-group>
      </b-col>
    </b-row>
  </div>
</template>

<script>
// @ is an alias to /src
import NotFoundImage from "@/assets/noimagefound.png";
import SearchApi from "@/api";
import ChildTest from "@/components/ChildTest.vue";
import { mapState } from "vuex";

export default {
  name: "Home",
  components: { ChildTest },
  data() {
    return {
      selectedGenre: [],
      test: "firstVal",
      baseUrl: "https://image.tmdb.org/t/p/w500/",
      NotFoundImage: NotFoundImage,
      genresOptions: []
    };
  },
  computed: {
    filteredShowList: function() {
      return this.$store.getters["showsModule/selectedShows"](
        this.selectedGenre
      );
    },
    searchVal: {
      get() {
        return this.$store.state.showsModule.searchVal;
      },
      set(value) {
        this.$store.commit("showsModule/UPDATE_SEARCH_VAL", value);
      }
    }
  },
  methods: {
    imageCompletePath(imageUrl) {
      return imageUrl ? this.baseUrl + imageUrl : this.NotFoundImage;
    },
    updateSearchVal(e) {
      this.$store.commit("showsModule/UPDATE_SEARCH_VAL", e.target.value);
    },
    onSubmit(object) {
      debugger;
      SearchApi.searchTv(this.$store.state.showsModule.searchVal).then(
        response => {
          this.$store.commit("showsModule/UPDATE_SHOW_LIST", response.results);
        }
      );
    },
    changeText(text) {
      this.test = text;
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
    debugger;
    if (this.$store.state.showsModule.searchVal === "") {
      SearchApi.getPopular().then(response => {
        this.$store.commit("showsModule/UPDATE_SHOW_LIST", response.results);
      });
    }
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

.country-fade-enter-active,
.country-fade-leave-active {
  transition: opacity 1s;
}
.country-fade-leave-active {
  position: absolute;
}
.country-fade-enter, .country-fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(150px);
}
.country-fade-move {
  transition: transform 1s;
}
.list-complete-item {
  transition: all 1s;
  padding: 0px 10px;
}
</style>
