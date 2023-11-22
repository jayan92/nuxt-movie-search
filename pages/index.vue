<template>
  <div class="container m-auto">
    <div class="flex flex-col py-10">
      <div class="py-2 relative mx-auto text-gray-600">
        <input
          v-model="searchTerm"
          class="border-2 border-[#009688] bg-white h-10 px-4 pr-16 rounded-lg text-lg focus:outline-none w-96"
          type="text"
          name="search"
          placeholder="Movie Name"
        />
        <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">
          <svg
            class="text-gray-600 h-4 w-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            viewBox="0 0 56.966 56.966"
            style="enable-background: new 0 0 56.966 56.966"
            xml:space="preserve"
            width="512px"
            height="512px"
          >
            <path
              d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
            />
          </svg>
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 self-center gap-x-10 gap-y-10 my-10">
        <MovieCard v-for="movie in data?.results" :movie="movie" :key="movie.id" />
      </div>

      <!-- component -->
      <div v-if="data?.results.length" class="flex justify-center">
        <nav class="flex space-x-2" aria-label="Pagination">
          <button
            v-if="!disabledPrevious"
            @click="page--"
            class="relative inline-flex items-center px-4 py-2 text-sm bg-gradient-to-r from-[#009688] to-green-300 border border-green-100 hover:border-[#009688] text-white font-semibold cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-green focus:border-green-300 focus:z-10"
          >
            Previous
          </button>
          <a
            class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-green-100 hover:bg-green-200 cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-green focus:border-green-300 focus:z-10"
          >
            {{ page }}
          </a>
          <button
            v-if="!disabledNext"
            @click="page++"
            class="relative inline-flex items-center px-4 py-2 text-sm bg-gradient-to-r from-[#009688] to-green-300 border border-green-100 hover:border-[#009688] text-white font-semibold cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-green focus:border-green-300 focus:z-10"
          >
            Next
          </button>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
const searchTerm = ref("");
const page = ref(1);

// Disable pagination depending on first or last page
const disabledPrevious = computed(() => {
  return page.value === 1;
});

const disabledNext = computed(() => {
  return page.value + 1 === data.value?.total_pages;
});

// Create a debounced version of searchTerm
const debouncedSearchTerm = refDebounced(searchTerm, 700);

const url = computed(() => {
  return `api/movies/search?query=${debouncedSearchTerm.value}&page=${page.value}`;
});

const { data } = await useFetch(url);

watch(searchTerm, () => {
  page.value = 1;
});
</script>
