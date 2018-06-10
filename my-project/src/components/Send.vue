<template>
    <div>
        <div><input type="text" v-model="msg"/></div>
        <input type="button"  value="发送" @click="send()"  />
        <input type="button"  value="隐藏" @click="hide()"  />
        <component :is='showName' :firstMsg="msg" v-show="ishow"></component>
    </div>
</template>
<style>
    .bgDiv{
        border: 1px solid red;
        width:600px;
        height:400px;
  
    }
    .bgDiv ul{
        margin: 0px ;
        padding: 0px;  
       
    }
    .bgDiv ul li{
        float: left;
        list-style: none;
    }
</style>
<script>
    import Receive from "./Receive"
    export  default{
        data(){return{
            msg:"",
            showName:"",
            ishow:true
        }},
        components:{Receive:Receive},
        //template: '#li-line',
        methods:{
            send(){
                
                if(this.showName!="Receive"){
                    this.showName="Receive"
                }
                else{
                    this.ishow=true
               this.bus.$emit("ReceiveEvent",this.msg)
                }

            },
            hide:function(){
                this.ishow=false

            }
        },
        mounted(){
        }
    }
</script>