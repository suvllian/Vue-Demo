import { getResource, postResource } from './resources';

export default{
	/* 首屏 
	 * 获取首屏信息
     * 修改首屏和热门内容
	 */
 
	getAlbum:() => { return getResource.get({ do:"get", concrete:"album"})},
	changeAlbum:(id, intro, src) => { return postResource.save({ do:"post", concrete:"changealbum", id:id, intro:intro, src:src} )},

	/* 热门课程 
	 * 获取热门内容
	 */
	getHot:() => { return getResource.get({ do:"get", concrete:"hot"})},

	/* 订阅邮箱 
	 * 获取订阅邮箱
	 * 删除订阅邮箱
	 */

	/* 报名 
	 * 获取报名信息
	 * 删除报名信息
	 */


	/* 报名 
	 * 获取导师信息
	 * 修改导师信息
	 * 添加导师
	 * 删除导师
	 */
	changeTeacher:(id, intro, name) => { return postResource.save({ do:"post", concrete:"changeteacher", id:id, intro:intro, name:name} )},
	addTeacher:(id, intro, name) => { return postResource.save({ do:"post", concrete:"addteacher", id:id, intro:intro, name:name} )},

	/* 艺人 
	 * 获取艺人信息
	 * 修改艺人信息
	 * 修改艺人图片链接
	 */
	getPerson:(page) => { return getResource.get({ do:"get", concrete:"getperson", page:page})},
	changePerson:(id, name, intro) => { return postResource.save({ do:"post", concrete:"changeperson", id:id, name:name, intro:intro} )},
	changePersonSrc:(id, src) => { return postResource.save({ do:"post", concrete:"changepersonsrc", id:id, src:src} )},
	addPerson:(id, intro, name) => { return postResource.save({ do:"post", concrete:"addperson", id:id, intro:intro, name:name} )},

	/* 文章 
	 * 添加文章
	 */

	addArticle: (title, content) => { return postResource.save({ do:"post", concrete:"addarticle", title:title, content:content} ) },

	/* 课程
	 * 获取课程信息
	 * 修改课程链接
	 */
	changeClasses:(id, name, src) => { return postResource.save({ do:"post", concrete:"changeclass", id:id, name:name, src:src} )},

	/* 上传图片
	 * 上传图片
	 */
	uploadImage:(fileData, name, id, table) => { return postResource.save({ do:"post", concrete:"uploadimage", 
			image:fileData, name:name, id:id, table:table } )},

	/* 登陆
	 * 登陆验证
	 */
	login:(name, pass) => { return postResource.save({ do:"post", concrete:"login" ,name:name, pass:pass} )},

	/* 登陆
	 * 登陆验证
	 */
	getNumber:(table) => { return getResource.get({ do:"get", concrete:"number", table:table})},

	/*
	 * 删除操作
	 */

	deleteItem:(id,table) => { return postResource.save({ do:"post", concrete:"delete", id:id, table:table})},

	/*
	 * 获取信息
	 */

	getInfor:(table) => { return getResource.get({ do:"get", concrete:"information", table:table})},
}