<template>
	<section id="teacher" class="slide-new slide-box">
		<div class="section-bg teacher-bg"></div>

		<div class="section-title white-title">
			<h2 class="section-title-h">
				<span>明星导师</span>
			</h2>
		</div>

		<div class="section-inner">
			
			<div class="teacher-list" ref="list">
				<ul>
					<li class="teacher-list-item" v-for="(item, index) in teachers">
						<div class="teacher-item-box">
							<div class="teacher-img" @click="showMask(index)">
								<img class="teacher-pic" :src="'./static/img/' + item.imgsrc ">
							</div>
							<div class="teacher-intro">
								<h4 class="teacher-intro-h">{{item.name}}</h4>
								<p class="teacher-intro-p">{{item.intro}}</p>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>

		<div class="slide-action">
			<div class="slide-action-left">
				<a class="slide-action-btn" href="javascript:;" @click="prev()">
					<i class="fa fa-angle-left fa-3x"></i>
				</a>
			</div>
			<div class="slide-action-right">
				<a class="slide-action-btn" href="javascript:;" @click="next()">
					<i class="fa fa-angle-right fa-3x"></i>
				</a>
			</div>
		</div>
		
	</section>
</template>

<script>
import api from './../../api/';
import { createMask } from './../../utils/createMask.js';

export default{
	data(){
		return{
			teachers:[],
			current:1,
			len:0
		}
	},

	methods:{
		prev(){	
			if (this.current == 1) { 
				this.current = this.len;
			} else {
				this.current--;
			}
			this.slideImage();
		},

		next(){
			if (this.current == this.len) {
				this.current = 1;
			} else{
				this.current++;
			}
			this.slideImage();
		},

		slideImage(){	
			var list = this.$refs.list;	
			list.style.left = (-100 * this.current + 100) + "%";
		},

		getData(){
			api.getTeacher().then(res => {	
				this.teachers = res.data;
				this.len = Math.ceil(this.teachers.length / 4);
				let teacherList = this.$refs.list;
				teacherList.style.width = this.len * 100 + "%";
			});
		},

		showMask(imgIndex) {
			let index = parseInt(imgIndex);
			let teachers = this.teachers;

			let html = '<div class="mask-contain">\
							<div class="mask-image" id="mask-image">\
								<img src="./static/img/'+ teachers[index].smallsrc + '">\
							</div>\
							<div class="slide-action">\
								<div class="slide-action-left">\
									<a class="slide-action-butn" id="left" href="javascript:;">\
										<i class="fa fa-angle-left fa-3x"></i>\
									</a>\
								</div>\
								<div class="slide-action-right">\
									<a class="slide-action-butn" id="right" href="javascript:;">\
										<i class="fa fa-angle-right fa-3x"></i>\
									</a>\
								</div>\
							</div>\
						</div>';
			createMask(html);

			let leftBtn = document.querySelector("#left");
			let rightBtn = document.querySelector("#right");
			let img = document.querySelector("#mask-image img");
			let length = this.teachers.length;
			let $that = this;
			
			function prev(){
				if (index == 0) {
					index = length - 1;
				} else {
					index = index - 1;
				}
				img.src = './static/img/'+ teachers[index].smallsrc;
			}

			function next() {
				if (index == (length-1)) {
					index = 0;
				} else {
					index = index + 1;
				}
				img.src = './static/img/'+ teachers[index].smallsrc;
			}

			leftBtn.addEventListener("click", prev);
			rightBtn.addEventListener("click", next);
		}
	},

	created(){
		this.getData();
	},
}

</script>