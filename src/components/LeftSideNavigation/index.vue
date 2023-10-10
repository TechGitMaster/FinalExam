<template>

    <div class="overflow-hidden">
        <div class="h-[100vh] min-w-[400px] pb-[40px] p-4 overflow-y-scroll scrollbar-none relative">
            <div class="flex items-center mb-3" @click="() => navClick('/loyalty-points')">
                <img :src="pngs[0]" alt="user" class="h-[70px] mr-5" />
                <div class="flex items-center">
                    <img :src="pngs[1]" alt="ico" class="h-[25px]" />
                    <p class="font-semibold text-[14px] mx-3">0 Points</p>
                    <img :src="pngs[2]" alt="ico" class="h-[14px] mt-[2px]" />
                </div>
            </div>

            <p class="w-full text-[23px] font-semibold truncate">Chou Tzunyu</p>
            <p class="text-[15px] text-[#868a8f] truncate mb-5">+63 912 345 6789</p>

            <!--___Navgation categories_____-->
            <div>
                <div v-for="(data, index) in category">
                    <div  @click="() => navClick(data.route)" class="flex items-center mt-6 justify-between">
                        <div class="flex items-center">
                            <img :src="data.icon" alt="ico" class="h-[23px] mr-4" />
                            <p class="text-[15px] font-semibold cursor-pointer">{{ data.name }}</p>
                        </div>
                        <div
                            v-if="index === 2 || index === 5" 
                            class="rounded-[50%] w-1 h-1 p-3 flex items-center justify-center text-white bg-[#E9BC3F]">
                                {{ index === 2 ? 4: 2 }}
                            </div>
                    </div>
                    <!--____Line_____-->
                    <div v-if="index === 4" class="mt-6" style="border:1px solid rgb(231, 231, 238)"></div>
                </div>
            </div>

            <!--____Logout_____-->
            <button
            @click="logout"
            class="mt-10 bg-[#D20F1B] text-[white] rounded-[15px] py-3 z-10 text-[15px] w-[50%] shadow-lg">Logout</button>
        </div>
    </div>



</template>


<script>
  import { User, Crown, Arrow, Logo, OrderNow, Notif, Store, Faqs, Orders, Account, Favs, Location, History } from '../../utilities/png.js';

  export default {
    data(){
    return {
        pngs: [User, Crown, Arrow],
        category: [
            {
                icon: Logo,
                name: 'Home',
                route: '/home'
            },
            {
                icon: OrderNow,
                name: 'Order Now!',
                route: '/product-page'
            },
            {
                icon: Notif,
                name: 'Notifcation',
                route: '/comming-soon-page'
            },
            {
                icon: Store,
                name: 'Store Locator',
                route: '/comming-soon-page'
            },
            {
                icon: Faqs,
                name: "FAQ's",
                route: '/comming-soon-page'
            },
            {
                icon: Orders,
                name: 'My Orders',
                route: '/comming-soon-page'
            },
            {
                icon: Account,
                name: 'My Account',
                route: '/comming-soon-page'
            },
            {
                icon: Favs,
                name: 'My Favorites',
                route: '/comming-soon-page'
            },
            {
                icon: Location,
                name: 'Order Tracker',
                route: '/comming-soon-page'
            },
            {
                icon: History,
                name: 'Order History',
                route: '/comming-soon-page'
            }
        ]
      }
    },
    methods: {
      navClick(route) {
        this.$router.push(route);
        this.eventBusMit.emit('show-nav', false);
      },
      logout() {
        localStorage.removeItem('token');
        this.$router.go();
      }
    }
  }
</script>