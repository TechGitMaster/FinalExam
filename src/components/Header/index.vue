<template>

    <div>

        <!--____Home, Product Header____-->
        <div v-if="linkUrl !== '/view-product-page' && linkUrl !== '/order-summary-page' 
            && linkUrl !== '/order-received-page' && linkUrl !== '/my-cart'"
            class="flex items-center justify-between">

            <!--___Burger icon___-->
            <div @click="showNavF()">
                <img :src="pngs[0]" alt="ico" class="h-[30px]" />
            </div>
        

            <!--___Middle crown icon___-->
            <div v-if="linkUrl !== '/product-page'" class="flex items-center">
                <img :src="pngs[1]" alt="ico" class="h-[25px]" />
                <p class="font-semibold mt-[1px] mx-4">0 Points</p>
                <img :src="pngs[2]" alt="ico" class="h-[12px] mt-[2px]" />
            </div>

            <!--___Our Food___-->
            <div v-else class="w-full">
                <p class="font-semibold text-[25px] ml-4">Our Foods</p>
            </div>
        
            <!--___User Icon___-->
            <div>
                <img v-if="linkUrl !== '/product-page'" :src="pngs[3]" alt="user" class="h-[35px]" />
                <img v-else :src="pngs[4]" alt="ico" @click="() => $router.push('/my-cart')" class="h-[22px] object-cover cursor-pointer" />
            </div>
        </div>


        <!--____Order Now, Loyalty Points, and others Header_____-->
        <div v-else-if="linkUrl !== '/order-received-page'" class="flex items-center justify-between relative">

            <div class="flex items-center z-20">
                <!--Arrow Back Icon-->
                <div @click="() => $router.go(-1)" class="rounded-[15px] cursor-pointer bg-[#DEE2E6] p-3">
                    <img :src="pngs[5]" alt="ico" class="h-[16px]" />
                </div>

                <p 
                    v-if="linkUrl !== '/my-cart'"
                    class="text-[25px] font-semibold ml-5">{{ linkUrl === '/view-product-page' ? this.category: 'Order Summary' }}</p>
            </div>

            <!--____My Cart____-->
            <div v-if="linkUrl === '/my-cart'" class="w-full absolute flex justify-center items-center">
                <img :src="pngs[4]" class="h-[22px] object-cover" />
                <p class="font-bold text-[21px] ml-2 mb-[2px]">My Cart</p>
            </div>

            <!--Bag Icon-->
            <div v-if="linkUrl === '/view-product-page'">
                <img :src="pngs[4]" alt="ico" @click="() => $router.push('/my-cart')" class="h-[25px] aspect-square object-cover" />
            </div>
        </div>


    </div>

</template>


<script>
    import { Burger, Crown, Arrow, User, Bag, ArrowLeft } from '../../utilities/png.js';

    export default {
        props: ['showNavF', 'linkUrl'],

        data(){
            return {
                category: '',
                pngs: [Burger, Crown, Arrow, User, Bag, ArrowLeft]
            }
        },

        mounted() {
            this.eventBusMit.on('product-selected', (val) => {
                this.category = val;
            })
        }
    }
</script>