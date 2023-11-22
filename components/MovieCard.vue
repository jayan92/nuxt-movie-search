<template>
  <NuxtLink :to="`movies/${movie.id}`">
    <div>
      <div class="flex max-w-sm w-full bg-white shadow-md rounded-lg overflow-hidden mx-auto cursor-pointer">
        <div
          class="overflow-hidden rounded-xl relative transform hover:-translate-y-2 transition ease-in-out duration-500 shadow-lg hover:shadow-2xl movie-item text-white movie-card"
        >
          <img class="inset-0 transform w-full" :src="imgURL" style="filter: grayscale(0)" />
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
const props = defineProps(["movie"]);

const config = useRuntimeConfig();

const imgURL = computed(() =>
  props.movie.poster_path != null
    ? `${config.public.publicImgBaseUrl}/${props.movie.poster_path}`
    : "https://via.placeholder.com/354x531"
);
</script>
