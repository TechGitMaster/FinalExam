<template>

    <div class="px-3 pb-[60px] relative">
        <div class="relative mb-3 pb-[20px]">
            <div class="w-full bg-[#DFE3E7] rounded-[20px] overflow-hidden">
                <img :src="selectedProduct.image" alt="food" class='w-full h-[250px] object-cover' />
            </div>
            <div @click="heartBtn = !heartBtn" class='absolute right-[4%] -bottom-[1%] p-4 rounded-[20px] bg-white shadow-lg z-20'>
                <img :src="heartBtn ? pngs[3]: pngs[2]" alt="ico" class="h-[23px]" />
            </div>
        </div>


        <!--___Details foods___-->
        <div class="-mt-[1%] mb-5">
            <p class="font-semibold text-[15px]">{{ selectedProduct.name }}</p>
            <img :src="pngs[1]" alt="ico" class="h-[30px] -ml-[14px] my-3" />

            <p class="text-[#767E85] text-justify">{{ selectedProduct.description }}</p>
        </div>


        <!--___Price and Add Food___-->
        <div class="flex justify-between mb-5">
            <p class="text-[22px] text-[#CC0F1B] font-semibold">P {{ selectedProduct.price }}</p>

            <div class="flex items-center">
                <div class="p-3 rounded-lg bg-[#DFE3E7]" @click="addMinusF(0, false)">
                    <img :src="pngs[5]" alt="ico" class="h-[10px]" />
                </div>

                <p class="mx-5 font-semibold text-[15px]">{{ this.bttnPlusMinus[0] }}</p>

                <div class="p-3 rounded-lg bg-[#DFE3E7]" @click="addMinusF(0, true)">
                    <img :src="pngs[4]" alt="ico" class="h-[10px]" />
                </div>
            </div>
        </div>


        <!--____Beverages____-->
        <div class="mb-6">
            <p class="text-[20px] font-semibold mb-2">Beverages</p>

            <div class="py-2 px-4 bg-[#F8F9FA] rounded-[20px] mb-4" style="border:1px solid #E6E9EC">
                <p class="text-[#767E85] text-[13px] mb-1">Choose Beverages</p>
                <select class="block w-full border-none bg-[#F8F9FA] text-[16px] mb-2">
                  <option selected>Coke</option>
                  <option value="US">Sprite</option>
                  <option value="CA">Pepsi</option>
                </select>
            </div>

            <div class="grid grid-cols-3">
                <div v-for="(data, index) in ['Regular', 'Large', 'X-Large']"
                    @click="selectedBeverage = index"
                    :class="`rounded-[17px] ${selectedBeverage === index ? 'bg-[#F9BE05] text-white ':'text-black'} 
                    font-semibold text-center p-3 mx-1`" style="border:1px solid #E6E9EC">{{ data }}</div>
            </div>
        </div>

        
        <!--____Add-Ons____-->
        <div>
            <p class="text-[20px] font-semibold mb-2">Add-Ons</p>
            
            <div>
                <div v-for="(data, index) in AddOns" class="rounded-[17px] bg-[#E7EAED] p-4 flex items-center mb-3">

                    <img :src="data.png" alt="food" class="h-[55px] mr-2" />

                    <div class="w-full">
                        <div class="flex justify-between">
                            <p class="font-semibold">{{ data.name }}</p>
                            <input type="checkbox" class="w-[17px] rounded" />
                        </div>

                        <p class="mb-2">{{ data.type }}</p>
                        

                        <!--____Price_____-->
                        <div class="flex justify-between items-center">
                            <p class="text-[17px] text-[#CC0F1B] font-semibold">P {{ data.price }}</p>

                            <div class="flex items-center">
                                <div class="p-3 rounded-lg bg-[#cbced1]" @click="addMinusF(index+1, false)">
                                    <img :src="pngs[5]" alt="ico" class="h-[10px]" />
                                </div>
                            
                                <p class="mx-5 font-semibold text-[15px]">{{ bttnPlusMinus[index+1] }}</p>
                            
                                <div class="p-3 rounded-lg bg-[#cbced1]" @click="addMinusF(index+1, true)">
                                    <img :src="pngs[4]" alt="ico" class="h-[10px]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <!--___Add to Bag___-->
            <div class="fixed bottom-[2%] w-full left-0 px-3">
                <button @click="addToCartF()"
                class=" w-[100%] bg-[#D20F1B] text-white rounded-[15px] py-4 z-10 shadow-lg font-semibold">Add to Bag</button>
            </div>

            
            <!--____Modal Success Added____-->
            <div v-if="openModal">
                <Modal :closeModal="closeModal" />
            </div>

        </div>

    </div>

</template>


<script>
    import { SampleImg, Star, Heart, HeartFilled, Plus, Minus, Mp5, Mp6 } from '@/utilities/png.js';
    import Modal from '../../components/Modal/index.vue';
    import { getAllProduct, addToCart } from '@/utilities/apiCall.js';


    export default {
        components: {
            Modal
        },
        data(){
            return {
                pngs: [SampleImg, Star, Heart, HeartFilled, Plus, Minus],
                selectedBeverage: 0,
                selectedProduct: {},
                openModal: false,
                AddOns: [{
                    png: Mp5,
                    name: 'Tomato Sauce',
                    type: 'Sauce',
                    price: '49'
                },
                {
                    png: Mp6,
                    name: 'White Rice',
                    type: 'Rice',
                    price: '25'
                }
                ],
                heartBtn: false,
                bttnPlusMinus: [1, 1, 1]
            }
        },

        created(){
            const getAllProducts = async () => {
                const data = await getAllProduct();
                const product = data.filter(a => `${a.id}` === this.$route.params.id);
                if(product.length > 0){
                    this.selectedProduct = product[0];
                    this.eventBusMit.emit('product-selected', product[0].category_meta.description)
                }else{
                    this.$router.push('/product-page');
                }
            }     

            getAllProducts();

            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' })
            }, (100));
        },

        methods: {
          closeModal(){
            this.openModal = false;
          },
          addMinusF(count, con){
            if(!con){
                this.bttnPlusMinus[count] > 1 ? this.bttnPlusMinus[count]--:this.bttnPlusMinus[count] = 1;
            }else{
                this.bttnPlusMinus[count]++;
            }
          },
          async addToCartF() {
            await addToCart(this.selectedProduct.id, this.bttnPlusMinus[0]);
            this.openModal = true;
          }
        }

    }

</script>