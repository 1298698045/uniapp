<template>
	<div class="container">
		<!-- isBack 左上角icon -->
		<cu-custom bgColor="bg-gradual-blue" :isBack="false">
			<!-- <block slot="backText">返回</block> -->
			<block slot="content">首页</block>
		</cu-custom>
		<van-search :value="value" placeholder="请输入搜索关键词" />
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="(item,index) in imgList" :key="index" @click="getImg(index)">
				<view class="swiper-item">
					<image :src="item" mode=""></image>
				</view>
			</swiper-item>
		</swiper>
		<van-card num="2" tag="标签" price="10.00" desc="描述信息" title="商品标题" :thumb="imageURL">
			<view slot="footer">
				<van-button @click="getDetail" plain type="primary" size="mini">详情</van-button>
				<van-button size="mini">购买</van-button>
			</view>
		</van-card>
		<!-- <hello></hello> -->
		<!-- <view class="cu-bar bg-white tabbar border shop">
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
		</view> -->
	</div>
</template>

<script>
	import hello from '../component/hello.vue';
	// import swiper from '../../components/wlp-swiper-banner/wlp-swiper-banner.vue'
	export default {
		components: {
			hello
		},
		data() {
			return {
				value: "",
				imgList: [
					'http://k.zol-img.com.cn/sjbbs/7692/a7691515_s.jpg',
					'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1276523047,3932244811&fm=27&gp=0.jpg',
					'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2567806224,1695502457&fm=27&gp=0.jpg'
				],
				imageURL: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2567806224,1695502457&fm=27&gp=0.jpg"
			}
		},
		onLoad() {

		},
		methods: {
			getImg(index){
				console.log(index);
			},
			getDetail() {
				wx.navigateTo({
					url: "/pages/detail/detail"
				})
			}
		}
	}
</script>

<style lang="scss">
	.container {
		.cu-bar {
			width: 100%;
			position: fixed;
			bottom: 0;
			left: 0;
		}

		.swiper-item {
			width: 100%;
			height: 100%;
			color: antiquewhite;
			background: skyblue;
			text-align: center;
			font-size: 50upx;
			font-weight: bold;

			image {
				width: 100%;
				height: 100%;
			}
		}
	}

	.content {
		height: auto;

		.cls {
			color: blue;
		}
	}

	.logo {
		// height: 200upx;
		// width: 200upx;
		// margin-top: 200upx;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
</style>
