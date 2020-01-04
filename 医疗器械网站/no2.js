Vue.component('no2',{
	template:`<div style="float: left;height: 1197px;">
				<img style="width: 100%;height: 400px;" src="https://ccdn.goodq.top/caches/c0b2c37cae1f3b474c3b0522b670a440/aHR0cDovLzU0ZDRhM2IyMTBjYWUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS9kYjQ5NTE0ODdlN2RhNmM0YWNiNjc5ODI2NDQ5YjlkZC5qcGc_p_p100_p_3D.jpg"
				 alt="">
				<div style="width: 100%;position: relative;top:-112px ;z-index: 99; background: #fff;min-height: 830px;">
					<div style="width: 1024px;height: 39px;text-align: right;margin: auto;font-size: 14px;color: #808080;line-height: 39px;">您目前的位置：首页
						> 关于我们</div>
					<div style="width: 1024px;margin: auto; border-top: solid 1px #ccc;">
						<div style="width: 155px;float: left;min-height: 830px;margin-left: 2px;margin-top: 25px;">
							<div style="height: 65px;border-bottom: solid 5px #3191cc;">
								<div style="font-size: 26px;color: #333333;">关于我们</div>
								<div style="font-size: 14px;color: #bababa;margin-top: 5px;">ABOUT US</div>
							</div>
							<div style="font-size: 16px;color: #555555;margin-left: 7px;margin-top: 20px;">
								<a style="color:#555555;" href="#/no2/">
									公司概况
								</a>
							</div>
							<div style="font-size: 16px;color: #555555;margin-left: 7px;margin-top: 20px;">
								<a style="color:#555555;" href="#/no2/no1">
									公司荣誉
								</a>
							</div>
						</div>
						<div style="float:left;margin-left: 60px;">
							<router-view></router-view>
						</div>
					</div>
				</div>
			</div>`
})