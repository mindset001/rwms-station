<template>
    <div>
        <div class="copy">

            <div class="top">
                <div class="flex justify-between nav">
                
                                        <div>
                    <div class="flex items-center">
                    <img src="../Sidebar/images/user.png" alt="" >
                    <h3>Hello, User-2</h3>
                </div>
                <div class="location">
                    <div class="locate">
                        <p>Location: <span>{{location}}</span></p>
                    </div>
                    <div class="flex items-center">
                        <p>Enter Location:</p>
                        <input type="text" v-model="location">
                    </div>
                </div>
                <div class="location" style="margin-top: 10px;">
                    <div class="locate">
                        <p>GPS: <span>{{gps}}</span></p>
                    </div>
                    <div class="flex items-center">
                        <p>Enter GPS:</p>
                        <input type="text" v-model="gps">
                    </div>
                </div>
                </div>
                <!-- <div class="fresh">
                    <img src="../Sidebar/images/refresh-ccw.png" alt="" style="margin-right: 20px;">
                </div> -->
            </div>
                </div>

                <div class="first">

                    <div class="temp">

                    <div >
                        <div class="flex items-center">
                        <img src="../Sidebar/images/thermometer.png" alt="" style="margin-right: 20px;">
                        <p>Temperature</p>
                        </div>
                        <h4>{{details.Temperature}}<sup>o</sup></h4>
                        <h6>Celsius</h6>
                    </div>
                    

                    </div>

                    <div class="temp">
                     <div >
                        <div class="flex items-center">
                        <img src="../Sidebar/images/wind.png" alt="" style="margin-right: 20px;">
                        <p>Humidity</p>
                        </div>
                        <h4>{{details.Humidity}}%<span>relative</span></h4>
                        <h6>Dew point: 21*</h6>
                    </div>
                    
                    
                    </div>
                    <div class="temp">
                         <div >
                        <div class="flex items-center">
                        <img src="../Sidebar/images/sunset.png" alt="" style="margin-right: 20px;">
                        <p>Light Intensity</p>
                        </div>
                        <h4>{{details.light_intensity}}</h4>
                        <h6>Lux</h6>
                    </div>
                    
                    </div>
                
                </div>

                <div class="last">
                    <div class="rain">
                         <div >
                        <div class="flex items-center">
                        <img src="../Sidebar/images/cloud-rain.png" alt="" style="margin-right: 20px;">
                        <p>Rainfall</p>
                        </div>
                        <h4>{{details.Rain_speed}}mm/<span>currently</span></h4>
                        <h6>Location: Unknown</h6>
                    </div>

                    </div>


                        <div class="temp">
                         <div >
                        <div class="flex items-center">
                        <img src="../Sidebar/images/sun.png" alt="" style="margin-right: 20px;">
                        <p>Pressure</p>
                        </div>
                        <h4>{{details.Pressure}}</h4>
                        <h6>hPa</h6>
                    </div>
                    
                    </div>
                </div>
     
    
   </div>
    </div>
</template>

<script>
import axios from 'axios'
// import {database} from 'firebase'
export default {
    data() {
        return {
            details: '',
            location: '',
            gps: '',
        }
    },
    methods: {
  async getDb () {
      const messageRef = this.$fire.database.ref('Station_2')
      try {
        const snapshot = await messageRef.once('value')
        // console.log(snapshot.val())
        this.details = snapshot.val()
        console.log(this.details.Humidity);
      } catch (e) {
        console.log(e);
      }
    },
        
    },

    mounted() {
        // this.$firebase.database.collection("Station_1")
        // .then(res => {
        //      console.log(res)
        // })
        // this.getDb()
        
        setInterval(() => {
            console.log('ran');
            // window.location.reload()
            this.getDb()
            console.log('ran');
        }, 10000)

        // this.getDb()
        
    },
    
    
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
        .top{
        padding: 40px 120px;
    }
    .locate span{
        border-bottom: solid 1px #8ab9df;
    }
    .location{
        display: flex;
        width: 90vw;
       
        justify-content: space-between;
    }
    input{
        border: solid 1px #8AB9DF;
        margin-left: 10px;
        height: 40px;
    }
    h3{
        font-family: 'poppins';
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
        width: 100%;
        padding: 40px 120px;
        justify-content: space-between;
    }
    .temp{
       
        height: 244px;
        padding: 0 10px;
        margin-left: 20px;
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
        font-family: 'poppins';
        font-style: normal;
        font-weight: 200;
        font-size: 24px;
        line-height: 27px;
        color: rgba(34, 60, 83, 0.76);
    }
    .temp h4{
        font-family: 'poppins';
        font-style: normal;
        font-weight: 200;
        font-size: 62px;
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
        background: url('../Sidebar/images/rainy.png');
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