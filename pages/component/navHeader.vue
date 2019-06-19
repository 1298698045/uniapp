<template>
	<div class="wrap">
		<cu-custom bgColor="bg-gradual-blue" :isBack="false">
			<!-- <block slot="backText">返回</block> -->
			<block slot="content">{{titleName}}</block>
		</cu-custom>
	</div>
</template>

<script>
	export default {
		name:'navHeader',
		props: {
			titleName: String,
			required: true
		},
		data(){
			return {
				
			}
		},
		mounted() {
			
		},
		methods:{
			
		}
	}
</script>

<style>
</style>
