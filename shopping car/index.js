var app=new Vue({
    el:'#app',
    data:{
        list:[{
            name:'iPhone7',
            price:6188,
            count:1
        },{
            name:'iPad Pro',
            price:5888,
            count:1
        },{
            name:'MacBook Pro',
            price:21488,
            count:1
        }]
    },
    methods:{
        handleReduce:function(index){
            if (this.list[index].count===1) {
                return;
            }
            this.list[index].count--;
            
        },
        handleAdd:function(index){
            this.list[index].count++;
        },
        handleRemove:function(index){
            this.list.splice(index,1);
        }
    },
    computed:{
        totalPrice:function(){
            var total=0;
            for (var index = 0; index < this.list.length; index++) {
                var item = this.list[index];
                total+=item.price*item.count;
            }
            return total.toString().replace(/(?=(\d{3})+$)/g,',');
        }
    }     
});