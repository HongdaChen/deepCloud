function organ() { var A = this; this.isload = 1; this.start = 0; this.pagesize = 20; this.scrollTopSize = 0; this.scrollTopSizeTemp = 0; this.init = function () { A.show(); A.loadOrgCityHome()(); return A }; this.loadInfo = function ()
 { $("#organlist").html('<li class="load"><img src="https://res.psy525.cn/image/icon/loading.gif" alt="loading" />姝ｅ湪鍔犺浇</li>') }; this.show = function () { A.loadInfo(); A.load(0); $(window).scroll(function () { A.scrollTopSize = $(this).scrollTop(); setTimeout(function () { A.scrollTopSizeTemp = A.scrollTopSize }, 0); var B = $("#organlist>.item"); if (B.length >= A.pagesize && $("#organlist>.load").length <= 0 && A.isload == 1) { var D = $(this).scrollTop(); var E = $(document).height(); var C = $(this).height(); if (D + C >= E - 60) { A.isload = 0; A.start = A.start + A.pagesize; $("#organlist").append('<li class="load"><img src="https://res.psy525.cn/image/icon/loading.gif" alt="loading" />姝ｅ湪鍔犺浇</li>'); setTimeout(function () { A.load(A.start) }, 500) } } }) }; this.load = function (C) { var B = $("#organlist"); glb.ajax(glb.ajaxUrl + "loadBzOrgList", "html", "start=" + C + "&fromType=channel", function () { A.isload = 0 }, function (D) { if (D != "" && D.indexOf("娌℃湁浜�") == -1) { B.find(".load").remove(); B.append(D) } else { B.find(".load").text("娌℃湁浜�") } A.isload = 1 }, function () { B.find(".load").remove(); B.append('<li class="load"><a href="javascript:void(0);" onclick="orgObj.load(' + C + ')"></a></li>'); A.isload = 1 }) }; this.loadOrgCityHome = function () { glb.ajax(glb.ajaxUrl + "loadhomeorg", "html", "types=1", null, function (B) { $("#h-orglist").before('<div class="wrap pd">' + B + "</div>") }, null) } } var orgObj = null; $(function () { orgObj = new organ().init() });