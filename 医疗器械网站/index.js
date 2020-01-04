var router = new VueRouter({
	routes: [{
			path: '/',
			component: {
				template: '#no1',
			}
		},
		{
			path: '/no2',
			component: {
				template: '#no2'
			},
			children: [{
					path: '/',
					component: {
						template: `
								<div style="width: 753px;margin-top: 25px; margibackground: red;">
									<div style="font-size: 14px;color: #808080;line-height: 24px;">
										公司顺应医药流通发展趋势，投资2.3亿元建设省内具有领先水平的现代医药物流中心，精心打造信息化管理、专业化服<br>务、规模化运作的现代医药流通企业，立足波，辐射，承担起浙江省的药品配送，成为物流平台，保障人民群众的用药需<br>求。作为久负盛名的医药商业企业，股份将站在一个全新的历史起点、跨越新高度，以创新求发展，为打造“百年”企业<br>，开创新的历史篇章。
									</div>
									<div style="min-height: 24px;"></div>
									<div style="font-size: 14px;color: #808080;line-height: 24px;">
										公司顺应医药流通发展趋势，投资2.3亿元建设省内具有领先水平的现代医药物流中心，精心打造信息化管理、专业化服<br>务、规模化运作的现代医药流通企业，立足波，辐射，承担起浙江省的药品配送，成为物流平台，保障人民群众的用药需<br>求。作为久负盛名的医药商业企业，股份将站在一个全新的历史起点、跨越新高度，以创新求发展，为打造“百年”企业<br>，开创新的历史篇章。
									</div>
									<div style="min-height: 24px;"></div>
									<div style="font-size: 14px;color: #808080;line-height: 24px;">
										公司顺应医药流通发展趋势，投资2.3亿元建设省内具有领先水平的现代医药物流中心，精心打造信息化管理、专业化服<br>务、规模化运作的现代医药流通企业，立足波，辐射，承担起浙江省的药品配送，成为物流平台，保障人民群众的用药需<br>求。作为久负盛名的医药商业企业，股份将站在一个全新的历史起点、跨越新高度，以创新求发展，为打造“百年”企业<br>，开创新的历史篇章。
									</div>
									<div style="min-height: 24px;"></div>
									<div style="width: 753px;height: 345px;">
										<img style="width: 100%;height: 100%;" src="https://ccdn.goodq.top/caches/c0b2c37cae1f3b474c3b0522b670a440/aHR0cDovLzU0ZDRhM2IyMTBjYWUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNC8wNi9wMTYuanBnP2F0dGFjaG1lbnRfaWQ9NTkxNw_p_p100_p_3D_p_p100_p_3D.jpg" alt="">
										<div style="height: 24px;text-align: center;line-height: 24px;margin-top: 5px;font-size: 13px;color: #a9a9a9;">最新进口治疗仪器</div>
									</div>
								</div>
								`
					}
				},
				{
					path: 'no1',
					component: {
						template: `<div style="width: 753px;margin-top: 25px;">
								<div style="font-size: 16px;color: #333333;height: 24px;line-height: 24px;"><strong>2016年</strong></div>
								<div style="font-size: 15px;color: #808080;line-height: 23px;">荣膺ACCA年度杰出成就奖</div>
								<div style="font-size: 15px;color: #808080;line-height: 23px;">中国健康产业互联网创新价值TOP10第一名</div>
								<div style="font-size: 15px;color: #808080;line-height: 23px;">国际电子商务博览会颁发的2014年度电子商务应用创新奖</div>
								<div style="font-size: 15px;color: #808080;line-height: 23px;">年度十佳移动优化网站</div>
								<div style="min-height: 24px;"></div>
								<div style="font-size: 16px;color: #333333;height: 24px;line-height: 24px;"><strong>2015年</strong></div>
								<div style="font-size: 15px;color: #808080;line-height: 23px;">荣膺ACCA年度杰出成就奖</div>
								<div style="font-size: 15px;color: #808080;line-height: 23px;">中国健康产业互联网创新价值TOP10第一名</div>
								<div style="font-size: 15px;color: #808080;line-height: 23px;">国际电子商务博览会颁发的2014年度电子商务应用创新奖</div>
								<div style="font-size: 15px;color: #808080;line-height: 23px;">年度十佳移动优化网站</div>
								<div style="min-height: 24px;"></div>
								<div style="font-size: 16px;color: #333333;height: 24px;line-height: 24px;"><strong>2014年</strong></div>
								<div style="font-size: 15px;color: #808080;line-height: 23px;">荣膺ACCA年度杰出成就奖</div>
								<div style="font-size: 15px;color: #808080;line-height: 23px;">中国健康产业互联网创新价值TOP10第一名</div>
								<div style="font-size: 15px;color: #808080;line-height: 23px;">国际电子商务博览会颁发的2014年度电子商务应用创新奖</div>
								<div style="font-size: 15px;color: #808080;line-height: 23px;">年度十佳移动优化网站</div>
								<div style="min-height: 24px;"></div>
								<div style="font-size: 16px;color: #333333;height: 24px;line-height: 24px;"><strong>2013年</strong></div>
								<div style="font-size: 15px;color: #808080;line-height: 23px;">荣膺ACCA年度杰出成就奖</div>
								<div style="font-size: 15px;color: #808080;line-height: 23px;">中国健康产业互联网创新价值TOP10第一名</div>
								<div style="font-size: 15px;color: #808080;line-height: 23px;">国际电子商务博览会颁发的2014年度电子商务应用创新奖</div>
								<div style="font-size: 15px;color: #808080;line-height: 23px;">年度十佳移动优化网站</div>
								<div style="min-height: 24px;"></div>
								<div style="font-size: 1,e: 15px;color: #808080;line-height: 23px;">中国健康产业互联网创新价值TOP10第一名</div>
								<div style="font-size: 15px;color: #808080;line-height: 23px;">国际电子商务博览会颁发的2014年度电子商务应用创新奖</div>
								<div style="font-size: 15px;color: #808080;line-height: 23px;">年度十佳移动优化网站</div>
							</div>`
					}
				}
			]
		},
		{
			path: '/no3',
			component: {
				template: '#no3'
			},
			children: [{
					path: '/',
					component: {
						template: `	<div>
									<div style="width: 241px;height: 225px;float: left;min-height: 230px;float:left;">
										<div><img style="width: 241px;height: 181px;" src="https://ccdn.goodq.top/caches/c0b2c37cae1f3b474c3b0522b670a440/aHR0cDovLzU0ZDRhM2IyMTBjYWUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS8zOTdlYzc2OTljMWExZDBmNjE4NzNjNmUxMDgwZTU5Ny00MDB4MzAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg"
											 alt=""></div>
										<div style="text-align: center;height: 20px;margin-top: 10px;color: #373A41;font-size: 15px;">产品展示3</div>
									</div>
									<div style="width: 241px;height: 225px;float: left;margin-left: 10px;float:left;">
										<div><img style="width: 241px;height: 181px;" src="https://ccdn.goodq.top/caches/c0b2c37cae1f3b474c3b0522b670a440/aHR0cDovLzU0ZDRhM2IyMTBjYWUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS9jYjE1Zjk2YmRiNjZkMjU0NTlkZWMwNGQyNTJhNTBlYy00MDB4MzAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg"
											 alt=""></div>
										<div style="text-align: center;height: 20px;margin-top: 10px;color: #373A41;font-size: 15px;">产品展示4</div>
									</div>
								</div>`
					}
				},
				{
					path: 'no1',
					component: {
						template: `<div style="width: 241px;height: 225px;float: left;min-height: 230px;">
									<div><img style="width: 241px;height: 181px;"  src="https://ccdn.goodq.top/caches/c0b2c37cae1f3b474c3b0522b670a440/aHR0cDovLzU0ZDRhM2IyMTBjYWUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS9lN2I3MDczNWQ1NWU1ZGYxNGUxODI5ODEwMzMwYjYxNS00MDB4MzAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg" alt=""></div>
									<div style="text-align: center;height: 20px;margin-top: 10px;color: #373A41;font-size: 15px;">产品展示2</div>
								</div>`
					}
				},
				{
					path: 'no2',
					component: {
						template: `<div>
									<div style="width: 241px;height: 225px;float: left;min-height: 230px;float:left;">
										<div><img style="width: 241px;height: 181px;"  src="https://ccdn.goodq.top/caches/c0b2c37cae1f3b474c3b0522b670a440/aHR0cDovLzU0ZDRhM2IyMTBjYWUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS80YmY2MDIwMGY1ZmZhOWUwM2JiYzFiZWFiMjgxY2FhZi00MDB4MzAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg" alt=""></div>
										<div style="text-align: center;height: 20px;margin-top: 10px;color: #373A41;font-size: 15px;">产品展示1</div>
									</div>
									<div style="width: 241px;height: 225px;float: left;min-height: 230px;margin-left: 10px;float:left;">
										<div><img style="width: 241px;height: 181px;"  src="https://ccdn.goodq.top/caches/c0b2c37cae1f3b474c3b0522b670a440/aHR0cDovLzU0ZDRhM2IyMTBjYWUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS8xN2M0ZTNkYWMxMWM4M2ZjZmM3YTBiZmEzNjNjZWFkNy00MDB4MzAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg" alt=""></div>
										<div style="text-align: center;height: 20px;margin-top: 10px;color: #373A41;font-size: 15px;">产品展示5</div>
									</div>
								</div>`
					}
				}
			]
		},
		{
			path: '/no4',
			component: {
				template: '#no4'
			},
			children:[
				{
					path: '/',
					component: {
						template:`<div style="min-height: 400px;">
									<div style="width: 753px;margin-top: 25px;height: 129px;border-bottom: solid 1px #CCCCCC;">
										<div style="width: 140px;height: 110px;float: left;"><img style="width: 100%;height: 100%;" src="https://ccdn.goodq.top/caches/c0b2c37cae1f3b474c3b0522b670a440/aHR0cDovLzU0ZDRhM2IyMTBjYWUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNS8wMS8wMDA4ODY4XzM1MC0xNDB4MTEwLmpwZWc_p_p100_p_3D.png" alt=""></div>
										<div style="width: 559px;float: left;margin-left: 10px;">
											<div style="font-size: 18px;color: #1e1e1e;">&nbsp;&nbsp;“50+”医疗棋局</div>
											<div style="font-size: 12px;color: #999999;margin-top: 6px;">发布日期：2015-01-22 分类：行业动态 </div>
											<div style="font-size: 13px;color: #939393;margin-top: 10px;line-height: 20px;">&nbsp;“医疗服务价格是很重要的价格杠杆。”市卫计委副主任、新闻发言人钟东波表示，北京的医疗服务价格自1999年之后，一直没有调整，积累了较大的矛盾和问题。</div>
										</div>
									</div>
									<div style="width: 753px;margin-top: 20px;height: 129px;border-bottom: solid 1px #CCCCCC;">
										<div style="width: 140px;height: 110px;float: left;"><img style="width: 100%;height: 100%;" src="https://ccdn.goodq.top/caches/c0b2c37cae1f3b474c3b0522b670a440/aHR0cDovLzU0ZDRhM2IyMTBjYWUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNS8wMS8wMDA4ODcwXzM1MC0xNDB4MTEwLmpwZWc_p_p100_p_3D.png" alt=""></div>
										<div style="width: 559px;float: left;margin-left: 10px;">
											<div style="font-size: 18px;color: #1e1e1e;">8种消费型保险之医疗保险篇</div>
											<div style="font-size: 12px;color: #999999;margin-top: 6px;">发布日期：2015-01-22 分类：公司新闻 </div>
											<div style="font-size: 13px;color: #939393;margin-top: 10px;line-height: 20px;">&nbsp;“医疗服务价格是很重要的价格杠杆。”市卫计委副主任、新闻发言人钟东波表示，北京的医疗服务价格自1999年之后，一直没有调整，积累了较大的矛盾和问题。</div>
										</div>
									</div>
									<div style="width: 753px;margin-top: 20px;height: 129px;border-bottom: solid 1px #CCCCCC;">
										<div style="width: 140px;height: 110px;float: left;"><img style="width: 100%;height: 100%;" src="https://ccdn.goodq.top/caches/c0b2c37cae1f3b474c3b0522b670a440/aHR0cDovLzU0ZDRhM2IyMTBjYWUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNS8wMS8wMDA4ODcyXzM1MC0xNDB4MTEwLmpwZWc_p_p100_p_3D.png" alt=""></div>
										<div style="width: 559px;float: left;margin-left: 10px;">
											<div style="font-size: 18px;color: #1e1e1e;">医疗器械经营企业需承担不良事件的监测工作</div>
											<div style="font-size: 12px;color: #999999;margin-top: 6px;">发布日期：2015-01-22 分类：行业动态  </div>
											<div style="font-size: 13px;color: #939393;margin-top: 10px;line-height: 20px;">&nbsp;“医疗服务价格是很重要的价格杠杆。”市卫计委副主任、新闻发言人钟东波表示，北京的医疗服务价格自1999年之后，一直没有调整，积累了较大的矛盾和问题。</div>
										</div>
									</div>
									<div style="width: 753px;margin-top: 20px;height: 129px;border-bottom: solid 1px #CCCCCC;">
										<div style="width: 140px;height: 110px;float: left;"><img style="width: 100%;height: 100%;" src="https://ccdn.goodq.top/caches/c0b2c37cae1f3b474c3b0522b670a440/aHR0cDovLzU0ZDRhM2IyMTBjYWUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNS8wMS8wMDA4ODY4XzM1MC0xNDB4MTEwLmpwZWc_p_p100_p_3D.png" alt=""></div>
										<div style="width: 559px;float: left;margin-left: 10px;">
											<div style="font-size: 18px;color: #1e1e1e;">医疗器械经营企业需监测报告不良事件</div>
											<div style="font-size: 12px;color: #999999;margin-top: 6px;">发布日期：2015-01-22 分类：公司新闻 </div>
											<div style="font-size: 13px;color: #939393;margin-top: 10px;line-height: 20px;">&nbsp;“医疗服务价格是很重要的价格杠杆。”市卫计委副主任、新闻发言人钟东波表示，北京的医疗服务价格自1999年之后，一直没有调整，积累了较大的矛盾和问题。</div>
										</div>
									</div>
									<div style="width: 753px;margin-top: 20px;height: 129px;">
										<div style="width: 140px;height: 110px;float: left;"><img style="width: 100%;height: 100%;" src="https://ccdn.goodq.top/caches/c0b2c37cae1f3b474c3b0522b670a440/aHR0cDovLzU0ZDRhM2IyMTBjYWUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNS8wMS8wMDA4ODY2XzM1MC0xNDB4MTEwLmpwZWc_p_p100_p_3D.png" alt=""></div>
										<div style="width: 559px;float: left;margin-left: 10px;">
											<div style="font-size: 18px;color: #1e1e1e;">医疗器械GSP落地 18万家企业大洗牌</div>
											<div style="font-size: 12px;color: #999999;margin-top: 6px;">发布日期：2015-01-22 分类：公司新闻 </div>
											<div style="font-size: 13px;color: #939393;margin-top: 10px;line-height: 20px;">&nbsp;“医疗服务价格是很重要的价格杠杆。”市卫计委副主任、新闻发言人钟东波表示，北京的医疗服务价格自1999年之后，一直没有调整，积累了较大的矛盾和问题。</div>
										</div>
									</div>
								</div>`
					}
				},
				{
					path: 'no1',
					component: {
						template: `<div>
									<div style="width: 753px;margin-top: 25px;height: 129px;border-bottom: solid 1px #CCCCCC;">
										<div style="width: 140px;height: 110px;float: left;"><img style="width: 100%;height: 100%;" src="https://ccdn.goodq.top/caches/c0b2c37cae1f3b474c3b0522b670a440/aHR0cDovLzU0ZDRhM2IyMTBjYWUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNS8wMS8wMDA4ODY4XzM1MC0xNDB4MTEwLmpwZWc_p_p100_p_3D.png" alt=""></div>
										<div style="width: 559px;float: left;margin-left: 10px;">
											<div style="font-size: 18px;color: #1e1e1e;">&nbsp;&nbsp;“50+”医疗棋局</div>
											<div style="font-size: 12px;color: #999999;margin-top: 6px;">发布日期：2015-01-22 分类：行业动态 </div>
											<div style="font-size: 13px;color: #939393;margin-top: 10px;line-height: 20px;">&nbsp;“医疗服务价格是很重要的价格杠杆。”市卫计委副主任、新闻发言人钟东波表示，北京的医疗服务价格自1999年之后，一直没有调整，积累了较大的矛盾和问题。</div>
										</div>
									</div>
									<div style="width: 753px;margin-top: 20px;height: 129px;">
										<div style="width: 140px;height: 110px;float: left;"><img style="width: 100%;height: 100%;" src="https://ccdn.goodq.top/caches/c0b2c37cae1f3b474c3b0522b670a440/aHR0cDovLzU0ZDRhM2IyMTBjYWUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNS8wMS8wMDA4ODcyXzM1MC0xNDB4MTEwLmpwZWc_p_p100_p_3D.png" alt=""></div>
										<div style="width: 559px;float: left;margin-left: 10px;">
											<div style="font-size: 18px;color: #1e1e1e;">医疗器械经营企业需承担不良事件的监测工作</div>
											<div style="font-size: 12px;color: #999999;margin-top: 6px;">发布日期：2015-01-22 分类：行业动态  </div>
											<div style="font-size: 13px;color: #939393;margin-top: 10px;line-height: 20px;">&nbsp;“医疗服务价格是很重要的价格杠杆。”市卫计委副主任、新闻发言人钟东波表示，北京的医疗服务价格自1999年之后，一直没有调整，积累了较大的矛盾和问题。</div>
										</div>
									</div>
								</div>`
					}
				}
			]
		},
		{
			path: '/no5',
			component: {
				template: '#no5'
			},
			children:[
				{
					path: '/',
					component: {
						template: `<div style="min-height: 300px;">
									<div style="width: 753px;margin-top: 25px;height: 129px;">
										<div style="font-size: 16px;color: #000000;"><strong>医疗器械有限公司</strong></div>
										<div style="font-size: 13px;color: #808080;line-height: 25px;margin-top: 5px;">地址：临江市工业园区中心大道西<br>电话：4001-220-125 <br> 邮箱：youjia@youjia.com</div>
										<div>
										  <div id="allmap"></div>
										 </div>
									</div>
								</div>`
								}
					},
						{path: 'no1',
						component: {
							template: `<div>
									<div style="font-size: 20px;color: #5CBCE7;"><strong>网站设计师</strong></div>
									<div style="font-size: 15px;color: #3333333;margin-top: 10px;"><strong>岗位职责</strong></div>
									<div style="font-size: 15px;color: #808080;margin-top: 6px;">1.当今最领先的响应式自助建站平台；</div>
									<div style="font-size: 15px;color: #808080;margin-top: 6px;">2.我们是响应式网站的倡导者，所有前端页面代码均采用HMLT5和CSS3实现；</div>
									<div style="font-size: 15px;color: #808080;margin-top: 6px;">3.起飞页提供了海量精美网站模板和成品网站，几乎覆盖了当今各个行业。</div>
									<div style="font-size: 15px;color: #3333333;margin-top: 20px;"><strong>任职要求</strong></div>
									<div style="font-size: 15px;color: #808080;margin-top: 6px;">1.流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事；</div>
									<div style="font-size: 15px;color: #808080;margin-top: 6px;">2.起飞页提供了海量精美网站模板和成品网站，几乎覆盖了当今各个行业；</div>
									<div style="font-size: 15px;color: #808080;margin-top: 6px;">3.迄今为止，起飞页用户的最短建站时间纪录为30分钟；</div>
									<div style="font-size: 15px;color: #808080;margin-top: 6px;">4.起飞页的核心竞争力来自于它集流线式布局方案与可视化内容编辑于一体；</div>
									<div style="font-size: 15px;color: #808080;margin-top: 6px;">5.当今最领先的响应式自助建站平台；</div>
									<div style="font-size: 15px;color: #808080;margin-top: 6px;">6.起飞页的核心竞争力来自于它集流线式布局方案与可视化内容编辑于一体；</div>
									<div style="font-size: 15px;color: #808080;margin-top: 6px;">7.流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。</div>
								</div>`
						}
					},
			]
		}

	],
})

new Vue({
	el: "#box",
	router,
	mounted() {
		var map = new BMap.Map("allmap");
		   // var point = new BMap.Point(116.331398, 39.897445);北京的经纬度
		   map.addControl(new BMap.NavigationControl());
		   map.addControl(new BMap.ScaleControl());
		   map.addControl(new BMap.OverviewMapControl());
		   map.addControl(new BMap.MapTypeControl());
		   map.centerAndZoom('苏州市外河桥', 11);
	}


})
