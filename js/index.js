window.onload = function () {
  searchEffect();
  timeBack();
}

// 实现头部js效果
function searchEffect() {
  /*
  * 1.获取头部banner的高度
  * 2.获取当前屏幕滚动时banner滚出屏幕高度
  * 3.计算比例值获取透明度设置背景样式
  * */
  var banner = document.querySelector(".jd_banner");
  var search = document.querySelector(".jd_search");
  var bannerHeight = banner.offsetHeight;
  // console.log(bannerHeight);
  window.onscroll = function () {
    var offsetTop = document.documentElement.scrollTop;
    // console.log(offsetTop);
    var opacity = 0;
    if (offsetTop < bannerHeight) {
      opacity = offsetTop/bannerHeight;
      search.style.backgroundColor = "rgba(233, 35, 34, "+opacity+")";
    }
  }

}

// 倒计时效果
function timeBack() {
  var spans = document.querySelector(".jd_sk_time").querySelectorAll("span");
  var totalTime = 3600;
  // 设置倒计时已秒为单位
  var timeId = setInterval(function () {
    totalTime--;
    // 得到剩余时间的时分秒
    if (totalTime < 0) {
      clearInterval(timeId);
      return
    }
    var hours = Math.floor(totalTime/3600);
    var minute = Math.floor(totalTime%3600/60);
    var second = Math.floor(totalTime%60);
    spans[0].innerHTML = Math.floor(hours/10);
    spans[1].innerHTML = Math.floor(hours%10);

    spans[3].innerHTML = Math.floor(minute/10);
    spans[4].innerHTML = Math.floor(minute%10);

    spans[6].innerHTML = Math.floor(second/10);
    spans[7].innerHTML = Math.floor(second%10);

  }, 1000)

}
