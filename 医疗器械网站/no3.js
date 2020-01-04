Vue.component('no3',{
	template:`<div>
				<div style="width: 100%;height: 379px;">
					<img style="width: 100%;height: 100%;" src="https://ccdn.goodq.top/caches/c0b2c37cae1f3b474c3b0522b670a440/aHR0cDovLzU0ZDRhM2IyMTBjYWUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS9kYjQ5NTE0ODdlN2RhNmM0YWNiNjc5ODI2NDQ5YjlkZC5qcGc_p_p100_p_3D.jpg"
					 alt="">
				</div>
				<div style="width: 100%;background: #fff;position: relative;top: -100px;min-height: 100px;">
					<div style="width: 1024px;height: 40px; border-bottom: solid 1px #ccc;margin: 0 auto;">
						<div style="text-align: right;font-size: 14px;color: #808080;line-height: 40px;">您目前的位置：首页 > 产品展示</div>
						<div style="width: 1024px;" class="clearfix">
							<div style="width: 155px;float: left;margin-left: 2px;margin-top: 25px;">
								<div style="height: 65px;border-bottom: solid 5px #3191cc;">
									<div style="font-size: 26px;color: #333333;">产品展示</div>
									<div style="font-size: 14px;color: #bababa;margin-top: 5px;">PRODUCTS</div>
								</div>
								<div style="font-size: 16px;color: #555555;margin-left: 7px;margin-top: 20px;">
									<a style="color:#555555;" href="#/no3/">
										医院常用医疗器械
									</a>
								</div>
								<div style="font-size: 16px;color: #555555;margin-left: 7px;margin-top: 20px;">
									<a style="color:#555555;" href="#/no3/no1">
										家庭保健器材
									</a>
								</div>
								<div style="font-size: 16px;color: #555555;margin-left: 7px;margin-top: 20px;">
									<a style="color:#555555;" href="#/no3/no2">
										家庭护理设备
									</a>
								</div>
							</div>
							<div style="float:left;margin-left: 60px;margin-top: 25px;">
								<router-view></router-view>
							</div>
						</div>
					</div>
				</div>
			</div>`
})