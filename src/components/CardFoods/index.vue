<template>
  <div class="grid grid-cols-2">
    <div v-for="(data, index) in filterList">
      <div @click="selectedMeal" class="rounded-[17px] overflow-hidden bg-[#E9ECEF] mx-1 mt-3 cursor-pointer">
            <div class="mb-5 overflow-hidden">
                <img :src="data.strMealThumb" alt="img" class="w-full h-[150px] object-cover"/>
            </div>
            <div class="px-3 pb-4">
                <p class="text-[14px] font-semibold truncate">{{ data.strMeal }}</p>
                <p class="text-[13px] mb-3">{{ data.strCategory }}</p>
                <div class="flex justify-between items-center">
                    <p class="text-[#CC0F1B] font-bold text-[14px]">P {{ Math.floor(Math.random() * (200 - 100 + 1)) + 100 }}</p>
                    <img :src="pngs[2]" alt="star" class="-mr-[5px] h-[20px]" />
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
  import { SampleImg, Search, Filter, Star, Wifi } from '../../utilities/png';

  export default {
    data() {
      return {
        pngs: [Search, Filter, Star, Wifi],
        filterList: [
          {
            strMealThumb: SampleImg,
            strMeal: 'Steak Fries Veggies',
            strCategory: 'Meal'
          },
          {
            strMealThumb: SampleImg,
            strMeal: 'Steak Fries Veggies',
            strCategory: 'Meal'
          },
          {
            strMealThumb: SampleImg,
            strMeal: 'Steak Fries Veggies',
            strCategory: 'Meal'
          },
          {
            strMealThumb: SampleImg,
            strMeal: 'Steak Fries Veggies',
            strCategory: 'Meal'
          }
        ]
      }
    },
    methods: {
      selectedMeal() {
        this.$router.push('/viewProductPage')
      }
    }
  }

</script>