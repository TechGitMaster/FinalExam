<template>

  <!--____Card Cart_____-->
  <div v-if="listItem.length > 0" v-for="(data, index) in listItem" class="bg-[#E9ECEF] p-3 rounded-lg mb-2">
    <div class="flex">
      <div>
        <img :src="data.product.image" class="h-[90px] aspect-square object-cover rounded-lg" />
      </div>
      <div class="ml-2 text-[12px] flex-1">
        <p class="font-semibold text-[14px]">{{ data.product.name }}</p>
        <p>1x Tomato Sauce</p>
        <p>1x Tomato Sauce</p>
        <p>1x Tomato Sauce</p>
        <p class="text-[14px]">Quantity: <span class="text-rose">x{{ data.quantity }}</span></p>
      </div>
    </div>

    <div class="my-3" style="border: 1px solid #DEE2E6"></div>

    <div class="flex justify-between items-center">
      <p class="text-rose font-semibold text-[15px]">P {{ data.product.price }}</p>
      <img :src="pngs[1]" 
        @click="() => deleteItem(data.id)"
        class="h-[22px] aspect-square object-cover" />
    </div>
  </div>

  <!--____Empty Cart_____-->
  <div v-else class="mt-5">
        
    <div class="flex justify-center mb-2">
        <img :src="pngs[2]" alt="ico" class="h-[230px]" />
    </div>
    <div class="flex justify-center">
        <p class='w-[60%] text-center font-semibold text-rose text-[20px]'>Your Cart is Empty</p>
    </div>

  </div>
</template>

<script>
  import { SampleImg, Delete, ComingSoon } from '@/utilities/png';
  import { getCartProduct, deleteItemProduct } from '@/utilities/apiCall';

  export default {
    created() {
      if(localStorage.getItem('token') !== '' && localStorage.getItem('token') !== null ) this.getCart();
    },
    data() {
      return {
        pngs: [ SampleImg, Delete, ComingSoon ],
        listItem: []
      }
    },
    methods: {
      async getCart() {
        const data = await getCartProduct();
        this.listItem = data.data.items;
      }, 
      async deleteItem(itemId) {
        await deleteItemProduct(itemId);
        this.getCart();
      }
    }
  }

</script>