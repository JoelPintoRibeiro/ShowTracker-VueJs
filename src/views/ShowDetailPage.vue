<template>
    <div>
        <b-row>
            <b-col>
                <div class="py-4">
                    <h1>{{show.name}}</h1>
                    <div class="image-featured py-4">
                        <b-img
                            center
                            :src="imageCompletePath(show.backdrop_path)"
                            alt="center image"
                        />
                    </div>
                </div>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                Description : {{show.overview}}
                <br>
                Note: {{show.vote_average}}
                <br>
                Nombres de saisons : {{show.number_of_seasons}}
                <br>
                Nombres d'episode : {{show.number_of_episodes}}
                <br>
                Date premier apparition : {{show.first_air_date}}
                <br>
                Toujours en production : {{show.in_production?'Oui':'non'}}
                <br>
                Prochain episode : {{show.next_episode_to_air? `episode ${show.next_episode_to_air.episode_number} le ${show.next_episode_to_air.air_date}`:'Aucun ou date inconnue'}}
            </b-col>
        </b-row>
    </div>
</template>

<script>
import SearchApi from "@/api";

export default {
  name: "ShowDetailPage",
  components: {},
  data() {
    return {
      show: [],
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

  mounted() {
    SearchApi.getShow(this.showId).then(response => {
      this.show = response;
    });
  }
};
</script>

<style scoped>
.image-featured {
}
</style>
