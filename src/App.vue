<template>
  <div id="nav">
    <div class="container">
      <Navbar />
    </div>
  </div>
  <router-view />
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Home",
  components: {
    Navbar,
  },
};
</script>
