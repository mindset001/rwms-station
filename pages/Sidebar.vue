<template>
    <div class="relative flex min-h-screen">

    <!-- sidebar   -->
    <div class="bg-bermuda w-80 pt-10 pl-5">
        <img src="../assets/images/Group 21 (3).png" alt="">
        <nav>
            <a href="/sidebar">
                <img src="../assets/images/Group 26.png" alt="">
            </a>
            <a href="/Sidebar/stationtwo">
                <img src="../assets/images/Group 27.png" alt="">
            </a>
            <a href="/Sidebar/stationthree">
            <img src="../assets/images/Group 28 (1).png" alt="">
            </a>
        </nav>
             
    </div>

    <!-- main content  -->
     
            <nuxt-child />
    
        
    </div>
</template>

<style scoped>
    .top{
        padding: 40px 120px;
    }
    h3{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 26px;
        line-height: 31px;
        color: #000000;
    }

    .fresh{
        background: #8AB9DF;
        border: 1px solid #CECECE;
        box-sizing: border-box;
        border-radius: 7px;
        width: 60px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .nav{
        width: 70vw;
        align-items: center;
    }
    .first{
        display: flex;
        width: 83vw;
        padding: 40px 120px;
        justify-content: space-between;
    }
    .temp{
        width: 390px;
        height: 244px;
        background: #fff;
        border: 3px solid #FFFFFF;
        box-sizing: border-box;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 5px 5px #E5E5E5;
    }
    .temp p{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 26px;
        line-height: 27px;
        color: #223C53;
    }
    .temp h6{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 26px;
        line-height: 27px;
        color: rgba(34, 60, 83, 0.76);
    }
    .temp h4{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 72px;
        line-height: 82px;
        color: #30516D;
    }
    span{
        font-size: 26px; 
    }

    .last{
        display: flex;
        width: 83vw;
        padding: 40px 120px;
        justify-content: space-between;
    }
        .rain{
        background: linear-gradient(72.75deg, rgba(0, 0, 0, 0.88) 29.52%, rgba(0, 0, 0, 0) 97.27%);
        background: url('../assets/images/seamless-weather-forecast-background-vector-2000781 1.png');
        background-repeat: no-repeat;
        background-size: cover;
        width: 870px;
        height: 244px;
        border: 3px solid #FFFFFF;
        box-sizing: border-box;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: left;
        padding-left: 4em;
        
    }

    .rain p{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 26px;
        line-height: 27px;
        color: #fff;
    }
    .rain h6{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 26px;
        line-height: 27px;
        color: #fff;
    }
    .rain h4{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 72px;
        line-height: 82px;
        color: #fff;
    }

</style>