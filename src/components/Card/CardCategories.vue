<template>

  <!--___Categories Product Page____-->
  <div 
    v-if="!conditionCategories"
    v-for="(data, index) in categoriesList" 
    @click="() => selectedCategory(index)"
    :class="`py-3 px-5 cursor-pointer ${categSelect === index ? 'text-white bg-[#CC101B]':'text-[#6D757D] bg-[#DEE2E6]'} font-semibold rounded-[18px] mr-2`">
    {{ data }}
  </div>

  <!--___Categories Home Page____-->
  <div v-else-if="conditionCategories" v-for="(data, index) in categoriesList.slice(1, 5)" class="min-w-[200px] h-[300px] overflow-hidden rounded-[17px] relative mr-2">
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
  import { getAllProduct } from '@/utilities/apiCall';

  export default {
    props: [ 'conditionCategories' ],
    created() {
      const product = async () => {
        const data = await getAllProduct();
        let obj = {};

        //Filter the category______________________________
        for(let count = 0; count < data.length; count++){
          if(!obj[data[count].category_meta.description]){
            obj[data[count].category_meta.description] = data[count].category_meta.description;
          }
        }

        this.categoriesList = ['All', ...Object.values(obj)];

        this.$emit('done-loading', '');
      }

      if(localStorage.getItem('token') !== '' && localStorage.getItem('token') !== null ) product();
    },
    data() {
      return {
        pngs: [SampleImg],
        categSelect: 0,
        categoriesList: []
      }
    },
    methods: {
      selectedCategory(index) {
        this.categSelect = index;
        this.eventBusMit.emit('selected-category', this.categoriesList[index]);
      }
    }
  }

</script>