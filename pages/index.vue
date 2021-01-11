<template>
  <div>
    <div
      v-for="(home, index) in homes"
      :key="index"
      style="float:left;margin:10px"
    >
      <router-link :to="`/home/${home.objectID}`"
        ><home-card :home="home"
      /></router-link>
    </div>
  </div>
</template>

<script>
import homes from "~/data/homes";

export default {
  head() {
    return {
      title: "Homepage",
      meta: [
        {
          name: "description",
          content: "This is a homepage!",
          hid: "description",
        },
      ],
    };
  },
  data() {
    return {
      homes: homes.slice(0, 4),
    };
  },
};
</script>
