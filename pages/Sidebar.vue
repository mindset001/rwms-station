<template>
    <div class="">

    <!-- sidebar   -->
    <div class="bg-bermuda w-100 pt-5 pl-5 cover">
        <img src="../assets/images/Group 21 (3).png" alt="">
        <nav>
            <a href="/sidebar">
                <img src="../assets/images/Group 26.png" alt="" >
            </a>
            <a href="/Sidebar/stationtwo">
                <img src="../assets/images/Group 27.png" alt="" style="margin-bottom: 20px;">
            </a>
            <a href="/Sidebar/stationthree">
            <img src="../assets/images/Group 28 (1).png" alt="" style="margin-bottom: 20px;">
            </a>
        </nav>
             
    </div>

    <!-- main content  -->
     
            <nuxt-child />
    
        
    </div>
</template>

<style scoped>
   nav{
    display: flex;
   }
   .cover{
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
   }

</style>