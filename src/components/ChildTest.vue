<template>
    <div>
        {{title}}
       <input
          type="text"
          v-model="searchVal"
          @keyup.enter="onSubmit"
          placeholder="Changer le text"
        >
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ChildTest",
  data() {
    return {
      searchVal: ""
    };
  },
  props: {
    test: String
  },
  computed: { ...mapState({ title: state => state.showsModule.title }) },
  methods: {
    onSubmit(object) {
      this.$store.commit("showsModule/UPDATE_TITLE", this.searchVal);
      // this.$emit("change-text", this.searchVal);
    }
  }
};
</script>

<style>
</style>
