<template>
  <div class="card">
    <div v-if="!data" class="loader-container" data-testid="loader">
      <div class="loader sm"></div>
      <div class="loader"></div>
      <div class="loader sm"></div>
      <div class="loader"></div>
      <div class="loader sm"></div>
      <div class="loader"></div>
    </div>
    <div v-else data-testid="data-card">
      <div>
        <h3><u>Name</u></h3>
        <h2>
          <i>{{ data.character.name || 'N/A' }}</i>
        </h2>
      </div>
      <div>
        <h3><u>House</u></h3>
        <h2>
          <i>{{ houseName }}</i>
        </h2>
      </div>
      <div>
        <h3><u>Quote</u></h3>
        <h2>
          <i>{{ data.sentence || 'N/A' }}</i>
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    data: Object,
  },
  computed: {
    houseName() {
      return this.data.character?.house?.name || 'N/A';
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  width: 350px;
  height: fit-content;
  padding: 20px;
  background: linear-gradient(90deg, #fff 3px, transparent 1%) 50%,
    linear-gradient(#fff 3px, transparent 1%) 50%, #ececec;
  background-repeat: repeat !important;
  background-size: 4px 4px;
  box-shadow: 0 8px 12px 0 rgba(0, 0, 30, 0.12);
  margin: 20px;
  border-radius: 8px;
  justify-content: space-between;
  text-align: left;
}
i {
  color: rgb(211, 173, 6);
}
.loader-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.loader {
  margin: 20px;
  background: linear-gradient(
    to right,
    rgba(232, 232, 242, 1) 8%,
    rgba(221, 221, 231, 1) 18%,
    rgba(232, 232, 242, 1) 33%
  );
  background-size: 800px 104px;
  animation-name: placeHolderShimmer;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
  animation-timing-function: linear;
  border-radius: 4px;
  height: 16px;
}
.loader.sm {
  width: 50%;
}

@keyframes placeHolderShimmer {
  0% {
    background-position: -468px 0;
  }

  100% {
    background-position: 468px 0;
  }
}
</style>
