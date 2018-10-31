new Vue({
	el:"#app",
	data(){
		return {
			statu:[true,false,false,false],
		}
	},
	methods:{
		change_statue:function(num){
			for( let i = 0; i < this.statu.length; i++ ){
				this.statu[i] = false
			}
			this.statu.splice(num,1,true)
		}
	}
})