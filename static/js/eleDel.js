/*
 * @Author: https://github.com/WangEn
 * @Author: https://gitee.com/lovetime/
 * @Date:   2018-03-27
 * @lastModify 2018-3-28
 * +----------------------------------------------------------------------
 * | WeAdmin 表格table中多个删除等操作公用js
 * | 有改用时直接复制到对应页面也不影响使用
 * +----------------------------------------------------------------------
 */
layui.extend({
	admin: '{/}../../static/js/admin'
});
layui.use(['laydate', 'jquery', 'admin'], function() {
	var laydate = layui.laydate,
		$ = layui.jquery,
		admin = layui.admin;
	//执行一个laydate实例
	laydate.render({
		elem: '#start' //指定元素
	});
	//执行一个laydate实例
	laydate.render({
		elem: '#end' //指定元素
	});
	
	
	/*用户-删除*/
	window.member_del = function (obj, id) {
		layer.confirm('确认要删除吗？', function(index) {
			//发异步删除数据
			$(obj).parents("tr").remove();
			layer.msg('已删除!', {
				icon: 1,
				time: 1000
			});
		});
	}
	
	/*用户-文件下载*/
	window.fileload = function (obj, id) {
		layer.confirm('确认要下载文件吗？', function(index) {
			//发异步删除数据
			layer.msg('已下载!', {
				icon: 1,
				time: 1000
			});
		});
	}
	
	/*文章修改*/
	window.modifyArticle = function (obj, url) {
		var editStatus = $("#editStatus").text();
		if(!editStatus == "处理中") {
			//发异步删除数据
			layer.msg('审核、送审状态稿件不允许被修改!', {
				icon: 2,
				time: 2000
			});
		} else {
			WeAdminShow('稿件修改',url,600,420);
		}
	}

});