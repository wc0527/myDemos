import Axios from 'axios'
var utils={
    ajax:function(method,args){
        Axios({method:method,url:args.url,data:args.data,params:args.params})
        .then(function(res){
            if(res.status=="200")
            {
                if(res.data.successful&&args.success)
                {
                    args.success(res.data);
                }
                else if(args.error)
                {
                    args.error(res.data);
                }
            }
            else 
            {
                args.error();
            }
            if(args.complete)
            {
                args.complete();
            }
            });
    },
    get:function(args)
    {
        this.ajax("get",args);
    },
    post:function(args){
        this.ajax("post",args);
    }

}
export default utils
