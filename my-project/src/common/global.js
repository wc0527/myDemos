global.formartDate=(dateStr)=>{
   return  Date(dateStr.replace("/Date(","").replace(")/",""));
}