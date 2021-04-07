<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

<meta name="applicable-device" content="pc">
<meta name="MobileOptimized" content="width" />
<meta name="HandheldFriendly" content="true" />
<title>阳光心理健康平台</title>
<link type="image/x-icon" rel="icon" href="static/images/heart.png">
<meta name="keywords" content="心理咨询,心理网,阳光心理网,心理服务,心理咨询师,阳光" />
<meta name="description"
	content="阳光心理网,您身边的心理咨询专家，提供专业的心理咨询服务，是来访者、心理咨询师、心理机构首选的在线心理咨询平台，值得信赖，百万用户的选择！" />
<!--[if lt IE 9 ]><script src="/res/js/lib/html5shiv.min.js"></script><script src="/res/js/lib/respond.min.js"></script><![endif]-->
<link rel="stylesheet"
	href="https://res.psy525.cn/pc/res/css/css.css?v=298126">
<link rel="stylesheet"
	href="https://res.psy525.cn/pc/res/css/channel/find.css?v=298126">
<link rel="stylesheet"
	href="https://res.psy525.cn/pc/res/css/module/pagination.css?v=298126">
<link rel="stylesheet" href="../static/css.css">
<link rel="stylesheet" href="../static/home.css">
<link rel="stylesheet" href="../static/citydr.css">
</head>

<body>
	<!-- 导航栏 -->
	<%@ include file="../nav.jsp"%>

	<!-- 主题栏-->
<%@ include file="../theme.jsp" %>
	<div class="wrap ptop">
		<ul class="findtab">
			<li><a href="area.html">按城市找</a></li>
			<li><a href="specialty.html" class="on">按专长找</a></li>
			<li><a href="organ.html">按机构找</a></li>
		</ul>
		<br class="clear" />
		<div id="afind">
			<p class="item">
				<a href="/find/specialtylist1.html" class="type">婚姻恋爱</a><span><a
					href="/specialty/hunlianqinggan.html" class="i-city"
					target="_blank">婚恋情感<i>(73位)</i></a><a
					href="/specialty/qingganhunyin.html" class="i-city" target="_blank">情感婚姻<i>(43位)</i></a><a
					href="/specialty/hunyinwanjiu.html" class="i-city" target="_blank">婚姻挽救<i>(31位)</i></a><a
					href="/specialty/lianaihunyin.html" class="i-city" target="_blank">恋爱婚姻<i>(23位)</i></a><a
					href="/specialty/hunwailian.html" class="i-city" target="_blank">婚外恋<i>(13位)</i></a><a
					href="/specialty/shilianwanhui.html" class="i-city" target="_blank">失恋挽回<i>(10位)</i></a><a
					href="/specialty/hunyin.html" class="i-city" target="_blank">婚姻<i>(8位)</i></a><a
					href="/specialty/lihun.html" class="i-city" target="_blank">离婚<i>(7位)</i></a><a
					href="/specialty/waiyu.html" class="i-city" target="_blank">外遇<i>(5位)</i></a><a
					href="/specialty/xiaosan.html" class="i-city" target="_blank">小三<i>(3位)</i></a><a
					href="/specialty/shilian.html" class="i-city" target="_blank">失恋<i>(3位)</i></a><a
					href="/specialty/lianai.html" class="i-city" target="_blank">恋爱<i>(3位)</i></a><a
					href="/specialty/chunvqingjie.html" class="i-city" target="_blank">处女情结<i>(2位)</i></a><a
					href="/specialty/yidilian.html" class="i-city" target="_blank">异地恋<i>(2位)</i></a><a
					href="/specialty/qiannanyou.html" class="i-city" target="_blank">前男友<i>(1位)</i></a><a
					href="/specialty/qiannvyou.html" class="i-city" target="_blank">前女友<i>(1位)</i></a><a
					href="/specialty/fumufandui.html" class="i-city" target="_blank">父母反对<i>(1位)</i></a><a
					href="/specialty/konghun.html" class="i-city" target="_blank">恐婚<i>(1位)</i></a></span><br
					class="clear" />
				<br class="clear" />
			</p>
			<p class="item">
				<a href="/find/specialtylist2.html" class="type">亲子教育</a><span><a
					href="/specialty/qingshaonianxinliganyu.html" class="i-city"
					target="_blank">青少年心理干预<i>(70位)</i></a><a
					href="/specialty/yanxue.html" class="i-city" target="_blank">厌学<i>(49位)</i></a><a
					href="/specialty/kaoqianxinlifudao.html" class="i-city"
					target="_blank">考前心理辅导<i>(38位)</i></a><a
					href="/specialty/haizinifan.html" class="i-city" target="_blank">孩子逆反<i>(38位)</i></a><a
					href="/specialty/qingshaonianganyu.html" class="i-city"
					target="_blank">青少年干预<i>(35位)</i></a><a
					href="/specialty/haizijiaoyu.html" class="i-city" target="_blank">孩子教育<i>(26位)</i></a><a
					href="/specialty/kaoshijiaolv.html" class="i-city" target="_blank">考试焦虑<i>(21位)</i></a><a
					href="/specialty/wangyin.html" class="i-city" target="_blank">网瘾<i>(19位)</i></a><a
					href="/specialty/qinzi.html" class="i-city" target="_blank">亲子<i>(17位)</i></a><a
					href="/specialty/zhuanzhuli.html" class="i-city" target="_blank">专注力<i>(5位)</i></a><a
					href="/specialty/haizizaolian.html" class="i-city" target="_blank">孩子早恋<i>(4位)</i></a><a
					href="/specialty/jiaoyu.html" class="i-city" target="_blank">教育<i>(3位)</i></a><a
					href="/specialty/ertongguduzheng.html" class="i-city"
					target="_blank">儿童孤独症<i>(1位)</i></a><a
					href="/specialty/haizitoudongxi.html" class="i-city"
					target="_blank">孩子偷东西<i>(1位)</i></a></span><br class="clear" />
				<br class="clear" />
			</p>
			<p class="item">
				<a href="/find/specialtylist3.html" class="type">职场人际</a><span><a
					href="/specialty/renjiguanxi.html" class="i-city" target="_blank">人际关系<i>(43位)</i></a><a
					href="/specialty/shejiaokongju.html" class="i-city" target="_blank">社交恐惧<i>(27位)</i></a><a
					href="/specialty/gongzuoyali.html" class="i-city" target="_blank">工作压力<i>(21位)</i></a><a
					href="/specialty/zhiyeguihua.html" class="i-city" target="_blank">职业规划<i>(16位)</i></a><a
					href="/specialty/gongzuoxuanze.html" class="i-city" target="_blank">工作选择<i>(1位)</i></a></span><br
					class="clear" />
				<br class="clear" />
			</p>
			<p class="item">
				<a href="/find/specialtylist4.html" class="type">两性心理</a><span><a
					href="/specialty/xingxinli.html" class="i-city" target="_blank">性心理<i>(23位)</i></a><a
					href="/specialty/xingxinlizhangai.html" class="i-city"
					target="_blank">性心理障碍<i>(18位)</i></a><a
					href="/specialty/tongxinglian.html" class="i-city" target="_blank">同性恋<i>(9位)</i></a><a
					href="/specialty/luyinzuo.html" class="i-city" target="_blank">露阴癖<i>(3位)</i></a><a
					href="/specialty/ziwei.html" class="i-city" target="_blank">自慰<i>(3位)</i></a><a
					href="/specialty/xingyuqiang.html" class="i-city" target="_blank">性欲强<i>(2位)</i></a><a
					href="/specialty/yifuzuo.html" class="i-city" target="_blank">易服癖<i>(2位)</i></a><a
					href="/specialty/toukuizuo.html" class="i-city" target="_blank">偷窥癖<i>(2位)</i></a><a
					href="/specialty/xinglengdan.html" class="i-city" target="_blank">性冷淡<i>(2位)</i></a><a
					href="/specialty/caihongzuquns.html" class="i-city" target="_blank">彩虹族群<i>(2位)</i></a><a
					href="/specialty/yixingzuo.html" class="i-city" target="_blank">易性癖<i>(1位)</i></a></span><br
					class="clear" />
				<br class="clear" />
			</p>
			<p class="item">
				<a href="/find/specialtylist5.html" class="type">性格个性</a><span><a
					href="/specialty/qingxudiaojie.html" class="i-city" target="_blank">情绪调节<i>(28位)</i></a><a
					href="/specialty/zibei.html" class="i-city" target="_blank">自卑<i>(16位)</i></a><a
					href="/specialty/ziworenzhi.html" class="i-city" target="_blank">自我认知<i>(8位)</i></a><a
					href="/specialty/minganduoyi.html" class="i-city" target="_blank">敏感多疑<i>(8位)</i></a><a
					href="/specialty/danxiaonuoruo.html" class="i-city" target="_blank">胆小懦弱<i>(2位)</i></a><a
					href="/specialty/xinggegupi.html" class="i-city" target="_blank">性格孤僻<i>(1位)</i></a><a
					href="/specialty/jiduxinqiang.html" class="i-city" target="_blank">嫉妒心强<i>(0位)</i></a></span><br
					class="clear" />
				<br class="clear" />
			</p>
			<p class="item">
				<a href="/find/specialtylist6.html" class="type">心理疾病</a><span><a
					href="/specialty/jiaolvyiyu.html" class="i-city" target="_blank">焦虑抑郁<i>(76位)</i></a><a
					href="/specialty/yiyuzheng.html" class="i-city" target="_blank">抑郁症<i>(42位)</i></a><a
					href="/specialty/qiangpozheng.html" class="i-city" target="_blank">强迫症<i>(31位)</i></a><a
					href="/specialty/jiaolvzheng.html" class="i-city" target="_blank">焦虑症<i>(31位)</i></a><a
					href="/specialty/shimian.html" class="i-city" target="_blank">失眠<i>(29位)</i></a><a
					href="/specialty/qiangpokongju.html" class="i-city" target="_blank">强迫恐惧<i>(24位)</i></a><a
					href="/specialty/chanhouyiyuzheng.html" class="i-city"
					target="_blank">产后抑郁症<i>(12位)</i></a><a
					href="/specialty/kongjuzheng.html" class="i-city" target="_blank">恐惧症<i>(11位)</i></a><a
					href="/specialty/yibingzheng.html" class="i-city" target="_blank">疑病症<i>(10位)</i></a><a
					href="/specialty/rengezhangai.html" class="i-city" target="_blank">人格障碍<i>(6位)</i></a><a
					href="/specialty/gengnianqixinliganyu.html" class="i-city"
					target="_blank">更年期心理干预<i>(4位)</i></a><a
					href="/specialty/jiezuo.html" class="i-city" target="_blank">洁癖<i>(3位)</i></a><a
					href="/specialty/jingshenbingrendeshehuikangfu.html" class="i-city"
					target="_blank">精神病人的社会康复<i>(3位)</i></a><a
					href="/specialty/kongbuzheng.html" class="i-city" target="_blank">恐怖症<i>(3位)</i></a><a
					href="/specialty/shenjingshuairuo.html" class="i-city"
					target="_blank">神经衰弱<i>(2位)</i></a><a
					href="/specialty/zaokuangzheng.html" class="i-city" target="_blank">躁狂症<i>(2位)</i></a><a
					href="/specialty/zuozheng.html" class="i-city" target="_blank">癔症<i>(1位)</i></a><a
					href="/specialty/shenjingshuairuozheng.html" class="i-city"
					target="_blank">神经衰弱症<i>(1位)</i></a><a
					href="/specialty/wangxiangzheng.html" class="i-city"
					target="_blank">妄想症<i>(1位)</i></a><a
					href="/specialty/jingshenfenliezheng.html" class="i-city"
					target="_blank">精神分裂症<i>(1位)</i></a><a
					href="/specialty/gengnianqizonghezh.html" class="i-city"
					target="_blank">更年期综合征<i>(1位)</i></a></span><br class="clear" />
				<br class="clear" />
			</p>
			<p class="item">
				<a href="/find/specialtylist7.html" class="type">其他</a><span><a
					href="/specialty/cuimian.html" class="i-city" target="_blank">催眠<i>(31位)</i></a><a
					href="/specialty/jiatingxitongpailie.html" class="i-city"
					target="_blank">家庭系统排列<i>(3位)</i></a><a
					href="/specialty/zhongliuxinlizixun.html" class="i-city"
					target="_blank">肿瘤心理咨询<i>(3位)</i></a><a
					href="/specialty/xinliceshi.html" class="i-city" target="_blank">心理测试<i>(1位)</i></a></span><br
					class="clear" />
				<br class="clear" />
			</p>
			<p id="afind-spe-more">
				<a href="/find/specialtylist.html">更多专长心理咨询师 >></a>
			</p>
		</div>
	</div>
	<script src="https://res.psy525.cn/pc/res/js/js.js?v=298126"></script>
	<script src="https://res.psy525.cn/pc/res/js/channel/find.js?v=298126"></script>
	<script src="../static/js/js.js"></script>
	<script src="../static/js/exptg.js"></script>
	<script src="../static/js/arttg.js?"></script>
	<script src="../static/js/home.js"></script>
	<%@ include file="../footer.jsp"%>

	<script>
		var _hmt = _hmt || [];
		(function() {
			var hm = document.createElement("script");
			hm.src = "//hm.baidu.com/hm.js?b3ea7cb5fe6857009cefe3f31cc7329a";
			var s = document.getElementsByTagName("script")[0];
			s.parentNode.insertBefore(hm, s);
		})();
	</script>
	<script>
		(function() {
			var bp = document.createElement('script');
			var curProtocol = window.location.protocol.split(':')[0];
			if (curProtocol === 'https') {
				bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
			} else {
				bp.src = 'http://push.zhanzhang.baidu.com/push.js';
			}
			var s = document.getElementsByTagName('script')[0];
			s.parentNode.insertBefore(bp, s);
		})();
	</script>
</body>

</html>