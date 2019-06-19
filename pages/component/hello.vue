<template>
	<div class="wrap">
		<nav-header :titleName="name"></nav-header>
		<view class="uni-padding-wrap uni-common-mt">
			<uni-card title="个人信息" thumbnail="http://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png" extra="额外信息" note="Tips">
				<avatar 
					selWidth="200px" selHeight="400upx" @upload="myUpload" :avatarSrc="imgUrl"
					avatarStyle="width: 200upx; height: 200upx; border-radius: 100%;">
				</avatar>
				<!-- <image v-if="imgUrl" :src="imgUrl" mode=""></image> -->
				<view>
					<calendar :date="date" :lunar="true" :disable-before="true" :start-date="'2019-3-2'" :end-date="'2020-5-20'"
					 @change="change" @to-click="toClick"></calendar>

				</view>
			</uni-card>
			<uni-tag text="标签" type="primary"></uni-tag>
			<uni-countdown background-color="#00B26A" :show-day="false" @timeup="getTimeup" :day="0" :hour="0" :minute="0"
			 :second="10">
			</uni-countdown>
			<button open-type="getUserInfo" @getuserinfo="getUserInfo" class='cu-btn round bg-green shadow'> 获取头像昵称 </button>
		</view>
	</div>
</template>

<script>
	// import uniTag from "@/components/uni-tag/uni-tag.vue"
	import navHeader from './navHeader.vue';
	export default {
		name: "hello",
		components:{
			// uniTag
			navHeader
		},
		data() {
			return {
				name:"我的",
				imgUrl: "",
				date: '2019-06-18'
			}
		},
		onLoad() {

		},
		methods: {
			getUserInfo() {
				var that = this;
				uni.login({
					provider: 'weixin',
					success(res) {
						uni.getSetting({
							success(res) {
								if (res.authSetting['scope.userInfo']) {
									uni.getUserInfo({
										provider: 'weixin',
										withCredentials: true,
										success(res) {
											console.log(res);
											let userInfo = JSON.stringify(res.userInfo);
											wx.setStorageSync('userInfo', userInfo);
											that.imgUrl = res.userInfo.avatarUrl;
										}
									})
								} else {

								}
							}
						})
					}
				})
			},
			// 倒计时时间到触发事件
			getTimeup() {
				console.log("倒计时");
			},
			change(e) {
				console.log(e);
			},
			toClick(e) {
				console.log(e);
			},
			// 上传头像
			myUpload(rsp) {
                this.url = rsp.path; //更新头像方式一
                //rsp.avatar.imgSrc = rsp.path; //更新头像方式二
            }
		}
	}
</script>

<style>
</style>
