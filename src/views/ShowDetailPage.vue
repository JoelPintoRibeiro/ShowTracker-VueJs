<template>
    <div v-if="currentShow !== null">
        <b-row>
            <b-col>
                <div class="py-4">
                    <h1>{{currentShow.name}}</h1>
                    <div class="image-featured py-4">
                        <b-img
                            center
                            :src="imageCompletePath(currentShow.backdrop_path)"
                            alt="center image"
                        />
                    </div>
                </div>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                Description : {{currentShow.overview}}
                <br>
                Note: {{currentShow.vote_average}}
                <br>
                Nombres de saisons : {{currentShow.number_of_seasons}}
                <br>
                Nombres d'episode : {{currentShow.number_of_episodes}}
                <br>
                Date premier apparition : {{currentShow.first_air_date}}
                <br>
                Toujours en production : {{currentShow.in_production?'Oui':'non'}}
                <br>
                Prochain episode : {{currentShow.next_episode_to_air? `episode ${currentShow.next_episode_to_air.episode_number} le ${currentShow.next_episode_to_air.air_date}`:'Aucun ou date inconnue'}}
            </b-col>
        </b-row>
    </div>
</template>

<script>
import SearchApi from "@/api";
import { mapState } from "vuex";
export default {
  name: "ShowDetailPage",
  components: {},
  data() {
    return {
      showId: 0,
      baseUrl: "https://image.tmdb.org/t/p/w500/"
    };
  },
  created() {
    this.showId = this.$route.params.showId;
  },
  methods: {
    imageCompletePath(imageUrl) {
      return imageUrl ? this.baseUrl + imageUrl : this.NotFoundImage;
    }
  },
  computed: {
    ...mapState("showsModule", ["currentShow"]) // Does not work with or without Foo
  },
  mounted() {
    this.$store.dispatch("showsModule/getDetailShow", this.showId);
    // SearchApi.getShow(this.showId).then(response => {
    //   this.show = response;
    // });
  }
};
</script>

<style scoped>
</style>
