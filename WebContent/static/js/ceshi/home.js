function home() { var A = this;
    this.isload = 1;
    this.start = 0;
    this.pagesize = 15;
    this.init = function() { A.show();
        A.scroll(); return A };
    this.scroll = function() { $("html, body").animate({ scrollTop: 130 }, 320) };
    this.show = function() { $(window).scroll(function() { var B = $("#cslist>.item"); if (B.length >= A.pagesize && $("#cslist>.load").length <= 0 && A.isload == 1) { var D = $(this).scrollTop(); var E = $(document).height(); var C = $(this).height(); if (D + C >= E - 160) { A.start = A.start + A.pagesize;
                    A.loading();
                    setTimeout(function() { A.load(A.start) }, 1000) } } }) };
    this.load = function(D) { var B = $("#cslist"); var C = B.attr("class");
        glb.ajax(glb.ajaxUrl + "loadcslist", "html", "start=" + D + "&classID=" + C + "&isv=0", function() { A.isload = 0 }, function(E) { if (E.indexOf("鏆傛棤娴嬭瘯") == -1) { B.find(".load").remove();
                B.append(E) } else { B.find(".load").text("娌℃湁浜�") }
            A.isload = 1 }, function() { B.find(".load").remove();
            B.append('<li class="load"><a href="javascript:void(0);" onclick="_home.load(' + D + ')">鍔犺浇澶辫触锛岀偣鍑婚噸鏂板姞杞�</a></li>');
            A.isload = 1 }) };
    this.loading = function() { $("#cslist").append('<li class="load"><img src="https://res.psy525.cn/image/icon/loading.gif" alt="loading" />姝ｅ湪鍔犺浇</li>') } }
var _home = null;
$(function() { _home = new home().init() });