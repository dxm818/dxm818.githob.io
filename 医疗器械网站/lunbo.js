Vue.component('lunbo', {
	template: `<div class="swiper-container">
					<div class="swiper-wrapper">
						<div class="swiper-slide"><img style="width: 100%;height: 599px;" src="https://54d4a3b210cae.t73.qifeiye.com/qfy-content/uploads/2014/06/c8d6f54e0799fe165eb5d21936cdcf66.jpg" alt=""></div>
						<div class="swiper-slide"><img style="width: 100%;height: 599px;" src="https://54d4a3b210cae.t73.qifeiye.com/qfy-content/uploads/2014/06/8f252a9db700ba559288dc9bbb4d655b.jpg" alt=""></div>
					</div>`,
	mounted() {
		var swiper = new Swiper('.swiper-container', {
			slidesPerView: 1,
			paginationClickable: true,
			spaceBetween: 30,
			loop: true
		});
	}
})
