<template>

  <!--___Categories Product Page____-->
  <div 
    v-if="!conditionCategories"
    v-for="(data, index) in categoriesList" 
    @click="categSelect = index"
    :class="`py-3 px-5 cursor-pointer ${categSelect === index ? 'text-white bg-[#CC101B]':'text-[#6D757D] bg-[#DEE2E6]'} font-semibold rounded-[18px] mr-2`">
    {{ data }}
  </div>

  <!--___Categories Home Page____-->
  <div v-else-if="conditionCategories" v-for="(data, index) in categoriesList" class="min-w-[200px] h-[300px] overflow-hidden rounded-[17px] relative mr-2">
    <img :src="pngs[0]" alt="img" class="w-full h-full object-cover" />
    <div class='absolute top-0 w-full h-full bg-[#00000080] p-4'>
        <div class='absolute bottom-[9%] text-white'>
            <p class="font-semibold">{{ data }}</p>
            <p>9 Recipes</p>
        </div>
    </div>
  </div>

</template>

<script>
  import { SampleImg } from '@/utilities/png';

  export default {
    props: [ 'conditionCategories' ],
    data() {
      return {
        pngs: [SampleImg],
        categSelect: 0,
        categoriesList: ['All', 'Breakfast', 'Chicken', 'Seafood', 'Dessert']
      }
    }
  }

</script>