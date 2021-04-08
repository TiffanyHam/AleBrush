<!--
 * @Author: your name
 * @Date: 2021-04-08 15:38:59
 * @LastEditTime: 2021-04-08 15:40:49
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \AleBrush\src\views\BrushPosition\test.vue
-->
<template>
	<div>
	  <div>
		<button @click="timeStart()">开始</button>
		<button @click="stop">暂停</button>
		<button @click="reset">重置</button>
		<button @click="timeStart">继续</button>
	</div>
	<div style="display:flex;align-items: center;justify-content: center;">
		{{str}}
	</div>
	</div>
 
</template>
 
<script>
	export default {
		data(){
			return {
			    hour:0,//定义时，分，秒，毫秒并初始化为0；
			    minute:0,
				ms:0,
				second:0,//秒
			    time:'',
				str:'00:00:00',
			};
		},
	
		methods:{
			//开始计时
			timeStart(){
			this.time =setInterval(this.timer,50)
			},
			//
			timer () {//定义计时函数
			this.ms =this.ms +50        //毫秒
			if (this.ms >=1000) {
			this.ms =0
		    this.second =this.second +1        //秒
			        }
			if (this.second >=60) {
			this.second =0
			          this.minute =this.minute +1        //分钟
			        }
			if (this.minute >=60) {
			this.minute =0
			          this.hour =this.hour +1        //小时
			        }
		//
		this.str =this.toDub(this.hour) +':' +this.toDub(this.minute) +':' +this.toDub(this.second)/*+""+this.toDubms(this.ms)+"毫秒"*/
		        // document.getElementById('mytime').innerHTML=h+"时"+m+"分"+s+"秒"+ms+"毫秒";
		 },
		 //补零操作
		 toDub (n) {//补0操作
		         if (n <10) {
		 return '0' + n
		 }else {
		 return '' + n
		 }
		 },
		 //暂停
		 stop () {
		 console.log('暂停')
		 clearInterval(this.time)
		 },
		 //重置
		 reset () {//重置
		 clearInterval(this.time)
		 // this.hour =0
		 this.minute =0
		 this.ms =0
		 this.second =0
		 this.str ='00:00:00'
		 },
		 }
		 
			  
	}
</script>
 
<style lang="scss">
	
</style>