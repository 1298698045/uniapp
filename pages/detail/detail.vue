<template>
	<div class="wrap">
		<view class="cu-bar bg-white tabbar border shop">
			<button class="action" open-type="contact">
				<view class="cuIcon-service text-green">
					<view class="cu-tag badge"></view>
				</view>
				客服
			</button>
			<view class="action">
				<view class="cuIcon-cart">
					<view class="cu-tag badge">99</view>
				</view>
				购物车
			</view>
			<view class="bg-orange submit">加入购物车</view>
			<view class="bg-red submit">立即订购</view>
		</view>
	</div>
</template>

<script>
</script>

<style lang="scss">
	.wrap{
		.cu-bar {
			width: 100%;
			position: fixed;
			bottom: 0;
			left: 0;
		}
	}
</style>
