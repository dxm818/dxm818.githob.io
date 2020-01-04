Vue.component('daohang',{
	template:`<div style="max-width: 984px;min-height: 88px;margin:auto;">
					<div style="float: left;width: 220px; height: 41px;padding:10px 0;">
						<img style="width: 183px;height: 65px;" src="https://ccdn.goodq.top/caches/c0b2c37cae1f3b474c3b0522b670a440/aHR0cHM6Ly81NGQ0YTNiMjEwY2FlLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDIvNDVhMmMwMTAxMmY5MzkwNGRhZWNmYzBhZDliZDhhOTYucG5n.png"
						 alt="">
					</div>
					<div style="float: right;">
						<el-menu style="width:702px;margin-top: 35px; margin-left: 20px;" :default-active="activeIndex" class="nav el-menu-demo" mode="horizontal" @select="handleSelect">
							<el-menu-item style="float: left;width: 15%;text-align: center;outline: none;cursor:pointer;font-size: 14px;color: #3191cc;"
							 index="1"><a href="#/">首页</a></el-menu-item>
							<el-submenu style="float: left;outline: none;margin-left: 30px;cursor:pointer;font-size: 14px;color: #3191cc;"
							 index="2">
								<template slot="title"><a href="#/no2">关于我们</a></template>
								<el-menu-item style="font-size: 14px;color: #3191cc;" index="2-1"><a href="#/no2/">公司概况</a></el-menu-item>
								<el-menu-item style="font-size: 14px;color: #3191cc;" index="2-2"><a href="#/no2/no1">公司荣誉</a></el-menu-item>
							</el-submenu>
							<el-menu-item style="float: left;width: 15%;text-align: center;outline: none;margin-left: 30px;cursor:pointer;font-size: 14px;color: #3191cc;"
							 index="3"><a href="#/no3">产品展示</a></el-menu-item>
							<el-submenu style="float: left;outline: none;margin-left: 30px;cursor:pointer;font-size: 14px;color: #3191cc;"
							 index="4">
								<template slot="title"><a href="#/no4">新闻动态</a></template>
								<el-menu-item style="font-size: 14px;color: #3191cc;" index="4-1"><a href="#/no4/">公司新闻</a></el-menu-item>
								<el-menu-item style="font-size: 14px;color: #3191cc;" index="4-2"><a href="#/no4/no1">行业动态</a></el-menu-item>
							</el-submenu>
							<el-submenu style="float: left; margin-left:57px;outline: none;cursor:pointer;font-size: 14px;color: #3191cc;"
							 index="5">
								<template slot="title"><a href="#/no5">联系我们</a></template>
								<el-menu-item style="font-size: 14px;color: #3191cc;" index="5-1"><a href="#/no5/">联系我们</a></el-menu-item>
								<el-menu-item style="font-size: 14px;color: #3191cc;" index="5-2"><a href="#/no5/no1">加入我们</a></el-menu-item>
							</el-submenu>
						</el-menu>
					</div>
				</div>`
				,
				data() {
				      return {
				        activeIndex: '1',
				      }
				    },
				    methods: {
				      handleSelect(key) {
				        console.log(key);
				      }
				    }
})