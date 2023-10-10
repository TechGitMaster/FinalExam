<template>
  <div class="grid grid-cols-2 gap-3 mt-3">
    <div v-for="(data, index) in filterList">
      <div @click="selectedMeal(data.id)" class="rounded-[17px] overflow-hidden bg-[#E9ECEF] cursor-pointer">
            <div class="mb-5 overflow-hidden">
                <img :src="data.image" alt="img" class="w-full h-[150px] object-cover"/>
            </div>
            <div class="px-3 pb-4">
                <p class="text-[14px] font-semibold truncate">{{ data.name }}</p>
                <p class="text-[13px] mb-3">{{ data.category_meta.description }}</p>
                <div class="flex justify-between items-center">
                    <p class="text-[#CC0F1B] font-bold text-[14px]">P {{ data.price }}</p>
                    <img :src="pngs[2]" alt="star" class="-mr-[5px] h-[20px]" />
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
  import { SampleImg, Search, Filter, Star, Wifi } from '@/utilities/png';
  import { getAllProduct } from '@/utilities/apiCall';

  export default {
    data() {
      return {
        pngs: [Search, Filter, Star, Wifi],
        filterList: [],
        allProduct: []
      }
    },
    created() {
      const getAllProducts = async () => {
        const data = await getAllProduct();

        this.allProduct = data;
        this.filterList = this.allProduct;

        this.$emit('done-loading', '');
      }

      if(localStorage.getItem('token') !== '' && localStorage.getItem('token') !== null ) getAllProducts();
    },
    mounted() {
      this.eventBusMit.on('selected-category', async (val) => {

        if(val === 'All') {
          this.filterList = this.allProduct;
        }else{
          const filtered_data = this.allProduct.filter((data) => data.category_meta.description === val);

          this.filterList = filtered_data;
        }
      })
    },
    methods: {
      selectedMeal(selectedProduct) {
        this.$router.push({ 
          name: `ViewProductPage`, 
          params: {
            id: selectedProduct
          }
        })
      }
    }
  }

</script>