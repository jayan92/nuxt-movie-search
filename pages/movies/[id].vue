<template>
  <div class="container m-auto">
    <div class="flex justify-end items-center w-full px-10 py-2">
      <button @click="goToHome" type="button" class="text-xl flex justify-end items-center">
        Back to <Icon name="solar:home-outline" color="black" class="ml-2" />
      </button>
    </div>

    <div
      class="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] m-10 dark:bg-neutral-700 md:flex-row"
    >
      <img
        class="h-96 w-1/3 rounded-t-lg object-cover md:h-auto md:!rounded-none md:!rounded-l-lg"
        :src="imgUrl"
        alt=""
      />
      <div class="flex flex-col justify-start p-6">
        <h5 class="mb-2 text-5xl font-medium text-neutral-800 dark:text-neutral-50">{{ data?.title }}</h5>
        <div class="flex">
          <div class="px-4 py-1 bg-gray-200 text-gray-800 rounded-full mr-2 my-10" v-for="genre in data?.genres">
            {{ genre.name }}
          </div>
        </div>
        <div class="text-lg my-2">Release Date: {{ data?.release_date }}</div>
        <div class="text-lg mb-2">Duration: {{ data?.runtime }} mins</div>
        <p class="my-6 text-base text-neutral-600 dark:text-neutral-200">
          {{ data?.overview }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const config = useRuntimeConfig();
const movieId = computed(() => route.params.id);

const imgUrl = computed(() =>
  data.value?.poster_path
    ? `${config.public.publicImgBaseUrl}/${data.value?.poster_path}`
    : "https://via.placeholder.com/300x500"
);

const goToHome = () => {
  const router = useRouter();
  router.push("/");
};

const { data } = await useFetch(`/api/movies/${movieId.value}`);
</script>
