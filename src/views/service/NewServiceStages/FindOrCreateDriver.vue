<template>
  <new-service-header page-default-back-link="/service/new/car" :loading="loading">

  </new-service-header>
</template>

<script>

import NewServiceHeader from "@/views/service/NewServiceHeader";
import {mapGetters} from "vuex";
export default {
  name: "FindOrCreateCar",
  data() {
    return {
      loading: false
    }
  },
  components: {NewServiceHeader},
  methods: {

  },
  computed: {
    ...mapGetters(['userToken', 'car']),
  }
}
</script>

<style scoped>

</style>