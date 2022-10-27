<template>
  <div>
    <div class="gen">
    <nav class="flex justify-between">
      <div>
        <a href="/"><img src="../assets/images/Group 21 (3).png" alt=""></a>
      </div>
      <div class="btn">
        <!-- <button>
          <a href="/login"><img src="../assets/images/Group 24 (1).png" alt=""></a>
        </button> -->
        <a href="./Sidebar"><button class="btn2">check status</button></a>
      </div>
    </nav>
        <div class="flex items-center justify-center mt-16">

                      <h1>REMOTE 
            WEATHER
            MONITORING
            STATION
            </h1>
            <img src="../assets/images/27 2.png" alt="" class="img">
        </div>
    
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style scoped>
@import url('http://fonts.cdnfonts.com/css/sofia-pro');
  .gen{
    background: #8AB9DF;
    width: 100vw;
    height: 100vh;
    padding: 20px 40px;
  }
  .btn{
    background: #fff;
    width: 414px;
    height: 112px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .btn2{
    background: #8AB9DF;
    border-radius: 15px;
    width: 337.87px;
    height: 60px;
    font-family: 'Sofia Pro';
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 35px;
    color: #FFFFFF;
    margin-left: 20px;
  }

  h1{
    font-family: 'Sofia Pro';
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 100px;
    color: #FFFFFF;
    width: 40px;
    z-index: 2;
  }
  .img{
    margin-left: 9em;
    z-index: 1;
  }
</style>