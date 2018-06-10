<template>
    <div>
        <h1>数据接收</h1>
        <div>
            <p v-for=' msg in msgs'>{{msg}}</p>
        </div>
    </div>
</template>
<script>
  export default{
      props:{
        firstMsg:String
      },
      data(){
          return{msgs:[]}
      },
      methods:{

      },
      created(){
        var _this=this;
          if(_this.firstMsg)
          {
            _this.msgs.push(_this.firstMsg)
          }
          _this.bus.$on("ReceiveEvent",function(msg){
            _this.msgs.push(msg)
            console.log(_this.msgs)
          })

      }
  }
</script>