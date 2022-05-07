<template>
    <div>
        <div class="all">

        

        <div>
            <img src="../assets/images/Group 21 (3).png" alt="">

                      <h1>REMOTE 
            WEATHER
            MONITORING
            STATION
            </h1>
        </div>

        <div class="image">
        <img src="../assets/images/11 1.png" alt="">
        <form action="">
                <div>
                    <label for="username">Username</label> <br>
                <input type="text" required>
                </div>
                <div>
                    <label for="password">Password</label> <br>
                <input type="password" required>
                </div>


                <nuxt-link to="/sidebar"><button>Sign In</button></nuxt-link>


                <p>Not registered yet? <a href="/signup">Signup</a></p>
        </form>
        
        </div>

        </div>
    </div>
</template>

<style scoped>
@import url('http://fonts.cdnfonts.com/css/sofia-pro');
    .all{
    background: #8AB9DF;
    width: 100vw;
    height: 100vh;
    padding: 20px 40px;
    display: flex;
    justify-content: space-between;
  }
   h1{
    font-family: 'Sofia Pro';
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 100px;
    color: #FFFFFF;
    width: 60px;
    margin-top: 107px;
  }

  form{
    background: rgba(255, 255, 255, 0.7);
        border-radius: 10px;
        width: 960px;
        height: 807px;
        position: relative;
        right: 20px;
        top: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
  }
  .image img{
    position: absolute;
    left: 65em;
    top: 5em;
  }
  input{
    width: 680px;
    height: 86px;
    background: #FFFFFF;
    border-radius: 30px;
    margin-top: 16px;
    margin-bottom: 16px;
    padding: 20px;
  }

  label{
    font-family: 'Sofia Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 35px;
    color: #2C353C;
    
  }
button{
    width: 404px;
    height: 70px;
    background: #8AB9DF;
    border-radius: 30px;
    font-family: 'Sofia Pro';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 35px;
    text-align: center;
    color: #FFFFFF;
    margin-top: 80px;
}

p{
    font-family: 'Sofia Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 35px;
    color: #94909E;
    margin-top: 15px;
}

</style>