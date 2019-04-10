<template>
  <transition name="el-friendships">
    <div class="main">
      <!--遮罩层-->
      <div class="shadow">
        <!--视频播放标签-->
        <div class="videoData" draggable="true">
          <video controls autoplay>
            <source src="../images/movie.ogg"/>
          </video>
          <!--关闭按钮-->
          <div class="close">
            x
          </div>
        </div>
      </div>
      <!--朋友圈的内容-->
      <div class="friendship">
        <!--01.纯文字类型-->
        <div class="oneTextStatus">
          <div class="typeText">
            <div class="porTrait">
              <!--头像-->
              <div></div>
            </div>
            <div class="conText">
              <div class="conText-name">李潇潇</div>
              <div class="conText-discuss">电影《奇迹男孩》讲述了一个患有先天性疾病的孩子在老师同学父母相处的故事。是一部很好的教育片，也折射出家庭、社会、融入的哲理。电影《奇迹男孩》讲述了一个患有先天性疾病的孩子在老师同学父母相处的故事。是一部很好的教育片，也折射出家庭、社会、融入的哲理。电影《奇迹男孩》讲述了一个患有先天性疾病的孩子在老师同学父母相处的故事。是一部很好的教育片，也折射出家庭、社会、融入的哲理。电影《奇迹男孩》讲述了一个患有先天性疾病的孩子在老师同学父母相处的故事。是一部很好的教育片，也折射出家庭、社会、融入的哲理。</div>
              <div class="conText-position">深圳 京基大厦</div>
              <div class="context-Time">
                <span class="time">2018年2月4日 00:55</span>
                <span class="ip">192.168.2.1</span>
              </div>
            </div>
          </div>
          <div class="appove">
            <i></i>
            <span class="sanjiao"></span>
            <span>王萌萌、</span><span>玉石、</span><span>知己天涯、</span><span>聚集、</span>
            <span>张三、</span><span>张三、</span><span>张三、</span><span>张三、</span>
            <span>张三、</span><span>张三、</span><span>张三、</span><span>张三、</span>
            <span>张三、</span><span>张三、</span><span>张三、</span><span>张三、</span>
            <span>王萌萌、</span><span>玉石、</span><span>知己天涯、</span><span>聚集、</span>
            <span>张三、</span><span>张三、</span><span>张三、</span><span>张三、</span>
            <span>张三、</span><span>张三、</span><span>张三、</span><span>张三、</span>
            <span>张三、</span><span>张三、</span><span>张三、</span><span>张三、</span>
            <span>王萌萌、</span><span>玉石、</span><span>知己天涯、</span><span>聚集、</span>
            <span>张三、</span><span>张三、</span><span>张三、</span><span>张三、</span>
            <span>张三、</span><span>张三、</span><span>张三、</span><span>张三、</span>
            <span>张三、</span><span>张三、</span><span>张三、</span><span>张三</span>
          </div>
          <div class="discuss">
            <div><span class="discussName">王石：</span><span>厉害了我的国！</span></div>
            <div><span class="discussName">王石：</span><span>厉害了我的国！厉害了我的国！厉害了我的国！厉害了我的国！厉害了我的国！厉害了我的国！厉害了我的国！厉害了我的国！厉害了我的国！厉害了我的国！厉害了我的国！厉害了我的国！厉害了我的国！厉害了我的国！厉害了我的国！厉害了我的国！厉害了我的国！厉害了我的国！厉害了我的国！厉害了我的国！</span></div>
            <div><span class="discussName">王石：</span><span>厉害了我的国！厉害了我的国！厉害了我的国！厉害了我的国！</span></div>
          </div>
        </div>

        <!--02.纯图片类型-->
        <div class="oneTextStatus">
          <div class="typeText">
            <div class="porTrait">
              <!--头像-->
              <div></div>
            </div>
            <div class="conText">
              <div class="conText-name">李潇潇</div>
              <div class="conText-discuss">电影《奇迹男孩》讲述了一个患有先天性疾病的孩子在老师同学父母相处的故事。是一部很好的教育片，也折射出家庭、社会、融入的哲理。电影《奇迹男孩》讲述了一个患有先天性疾病的孩子在老师同学父母相处的故事。是一部很好的教育片，也折射出家庭、社会、融入的哲理。电影《奇迹男孩》讲述了一个患有先天性疾病的孩子在老师同学父母相处的故事。是一部很好的教育片，也折射出家庭、社会、融入的哲理。电影《奇迹男孩》讲述了一个患有先天性疾病的孩子在老师同学父母相处的故事。是一部很好的教育片，也折射出家庭、社会、融入的哲理。</div>
              <!--图片显示区域-->
              <div class="conPicture">
                <div><img src="../images/u0001.png"/></div>
                <div><img src="../images/u0002.png"/></div>
                <div><img src="../images/u0003.png"/></div>
                <div><img src="../images/u0004.png"/></div>
                <div><img src="../images/u0005.png"/></div>
                <div><img src="../images/u0006.png"/></div>
                <div><img src="../images/u0007.png"/></div>
                <div><img src="../images/u0008.png"/></div>
                <div><img src="../images/u0009.png"/></div>
              </div>
              <div class="conText-position">深圳 京基大厦</div>
              <div class="context-Time">
                <span class="time">2018年2月4日 00:55</span>
                <span class="ip">192.168.2.1</span>
              </div>
            </div>
          </div>
          <div class="appove">
            <i></i>
            <span class="sanjiao"></span>
            <span>王萌萌、</span><span>玉石、</span><span>知己天涯、</span><span>聚集、</span>
            <span>张三、</span><span>张三、</span><span>张三、</span><span>张三、</span>
            <span>张三、</span><span>张三、</span><span>张三、</span><span>张三、</span>
            <span>张三、</span><span>张三、</span><span>张三、</span><span>张三、</span>
            <span>王萌萌、</span><span>玉石、</span><span>知己天涯、</span><span>聚集、</span>
            <span>张三、</span><span>张三、</span><span>张三、</span><span>张三、</span>
            <span>张三、</span><span>张三、</span><span>张三、</span><span>张三、</span>
            <span>张三、</span><span>张三、</span><span>张三、</span><span>张三、</span>
            <span>王萌萌、</span><span>玉石、</span><span>知己天涯、</span><span>聚集、</span>
            <span>张三、</span><span>张三、</span><span>张三、</span><span>张三、</span>
            <span>张三、</span><span>张三、</span><span>张三、</span><span>张三、</span>
            <span>张三、</span><span>张三、</span><span>张三、</span><span>张三</span>
          </div>
          <div class="discuss">
            <div><span class="discussName">王石：</span><span>厉害了我的国！</span></div>
            <div><span class="discussName">王石：</span><span>厉害了我的国！厉害了我的国！厉害了我的国！厉害了我的国！厉害了我的国！厉害了我的国！厉害了我的国！厉害了我的国！厉害了我的国！厉害了我的国！厉害了我的国！厉害了我的国！厉害了我的国！厉害了我的国！厉害了我的国！厉害了我的国！厉害了我的国！厉害了我的国！厉害了我的国！厉害了我的国！</span></div>
            <div><span class="discussName">王石：</span><span>厉害了我的国！厉害了我的国！厉害了我的国！厉害了我的国！</span></div>
          </div>
        </div>

        <!--03.文字加图片类型-->
        <div class="oneTextStatus">
          <div class="typeText">
            <div class="porTrait">
              <!--头像-->
              <div></div>
            </div>
            <div class="conText">
              <div class="conText-name">李潇潇</div>
              <!--图片显示区域-->
              <div class="conPicture">
                <div><img src="../images/u0001.png"/></div>
                <div><img src="../images/u0002.png"/></div>
                <div><img src="../images/u0003.png"/></div>
                <div><img src="../images/u0004.png"/></div>
                <div><img src="../images/u0005.png"/></div>
                <div><img src="../images/u0006.png"/></div>
                <div><img src="../images/u0007.png"/></div>
                <div><img src="../images/u0008.png"/></div>
                <div><img src="../images/u0009.png"/></div>
              </div>
              <div class="conText-position">深圳 京基大厦</div>
              <div class="context-Time">
                <span class="time">2018年2月4日 00:55</span>
                <span class="ip">192.168.2.1</span>
              </div>
            </div>
          </div>
          <div class="appove">
            <i></i>
            <span class="sanjiao"></span>
            <span>王萌萌、</span><span>玉石、</span><span>知己天涯、</span><span>聚集、</span>
            <span>张三、</span><span>张三、</span><span>张三、</span><span>张三、</span>
            <span>张三、</span><span>张三、</span><span>张三、</span><span>张三、</span>
            <span>张三、</span><span>张三、</span><span>张三、</span><span>张三、</span>
            <span>王萌萌、</span><span>玉石、</span><span>知己天涯、</span><span>聚集、</span>
            <span>张三、</span><span>张三、</span><span>张三、</span><span>张三、</span>
            <span>张三、</span><span>张三、</span><span>张三、</span><span>张三、</span>
            <span>张三、</span><span>张三、</span><span>张三、</span><span>张三、</span>
            <span>王萌萌、</span><span>玉石、</span><span>知己天涯、</span><span>聚集、</span>
            <span>张三、</span><span>张三、</span><span>张三、</span><span>张三、</span>
            <span>张三、</span><span>张三、</span><span>张三、</span><span>张三、</span>
            <span>张三、</span><span>张三、</span><span>张三、</span><span>张三</span>
          </div>
          <div class="discuss">
            <div><span class="discussName">王石：</span><span>厉害了我的国！</span></div>
            <div><span class="discussName">王石：</span><span>厉害了我的国！厉害了我的国！厉害了我的国！厉害了我的国！厉害了我的国！厉害了我的国！厉害了我的国！厉害了我的国！厉害了我的国！厉害了我的国！厉害了我的国！厉害了我的国！厉害了我的国！厉害了我的国！厉害了我的国！厉害了我的国！厉害了我的国！厉害了我的国！厉害了我的国！厉害了我的国！</span></div>
            <div><span class="discussName">王石：</span><span>厉害了我的国！厉害了我的国！厉害了我的国！厉害了我的国！</span></div>
          </div>
        </div>

        <!--04.纯视频类型-->
        <div class="oneTextStatus">
          <div class="typeText">
            <div class="porTrait">
              <!--头像-->
              <div></div>
            </div>
            <div class="conText">
              <div class="conText-name">李潇潇</div>
              <!--图片显示区域-->
              <div class="conPicture">
                <div><img src="../images/u0001.png"/></div>
              </div>
              <div class="conText-position">深圳 京基大厦</div>
              <div class="context-Time">
                <span class="time">2018年2月4日 00:55</span>
                <span class="ip">192.168.2.1</span>
              </div>
            </div>
          </div>
          <div class="appove">
            <i></i>
            <span class="sanjiao"></span>
            <span>王萌萌、</span><span>玉石、</span><span>知己天涯、</span><span>聚集、</span>
            <span>张三、</span><span>张三、</span><span>张三、</span><span>张三、</span>
            <span>张三、</span><span>张三、</span><span>张三、</span><span>张三、</span>
            <span>张三、</span><span>张三、</span><span>张三、</span><span>张三、</span>
            <span>王萌萌、</span><span>玉石、</span><span>知己天涯、</span><span>聚集、</span>
            <span>张三、</span><span>张三、</span><span>张三、</span><span>张三、</span>
            <span>张三、</span><span>张三、</span><span>张三、</span><span>张三、</span>
            <span>张三、</span><span>张三、</span><span>张三、</span><span>张三、</span>
            <span>王萌萌、</span><span>玉石、</span><span>知己天涯、</span><span>聚集、</span>
            <span>张三、</span><span>张三、</span><span>张三、</span><span>张三、</span>
            <span>张三、</span><span>张三、</span><span>张三、</span><span>张三、</span>
            <span>张三、</span><span>张三、</span><span>张三、</span><span>张三</span>
          </div>
          <div class="discuss">
            <div><span class="discussName">王石：</span><span>厉害了我的国！</span></div>
            <div><span class="discussName">王石：</span><span>厉害了我的国！厉害了我的国！厉害了我的国！厉害了我的国！厉害了我的国！厉害了我的国！厉害了我的国！厉害了我的国！厉害了我的国！厉害了我的国！厉害了我的国！厉害了我的国！厉害了我的国！厉害了我的国！厉害了我的国！厉害了我的国！厉害了我的国！厉害了我的国！厉害了我的国！厉害了我的国！</span></div>
            <div><span class="discussName">王石：</span><span>厉害了我的国！厉害了我的国！厉害了我的国！厉害了我的国！</span></div>
          </div>
        </div>

        <!--05.文字加视频类型-->
        <div class="oneTextStatus">
          <div class="typeText">
            <div class="porTrait">
              <!--头像-->
              <div></div>
            </div>
            <div class="conText">
              <div class="conText-name">李潇潇</div>
              <!--图片显示区域-->
              <div class="conVideo">
                <img src="../images/vedio.png">
              </div>
              <div class="conText-position">深圳 京基大厦</div>
              <div class="context-Time">
                <span class="time">2018年2月4日 00:55</span>
                <span class="ip">192.168.2.1</span>
              </div>
            </div>
          </div>
          <div class="appove">
            <i></i>
            <span class="sanjiao"></span>
            <span>王萌萌、</span><span>玉石、</span><span>知己天涯、</span><span>聚集</span>
          </div>
          <div class="discuss">
            <div><span class="discussName">王石：</span><span>厉害了我的国！</span></div>
          </div>
        </div>

        <!--06.音频类型-->
        <div class="oneTextStatus">
          <div class="typeText">
            <div class="porTrait">
              <!--头像-->
              <div></div>
            </div>
            <div class="conText">
              <div class="conText-name">李潇潇</div>
              <div class="conText-discuss">电影《奇迹男孩》讲述了一个患有先天性疾病的孩子在老师同学父母相处的故事。是一部很好的教育片，也折射出家庭、社会、融入的哲理。电影《奇迹男孩》讲述了一个患有先天性疾病的孩子在老师同学父母相处的故事。是一部很好的教育片，也折射出家庭、社会、融入的哲理。电影《奇迹男孩》讲述了一个患有先天性疾病的孩子在老师同学父母相处的故事。是一部很好的教育片，也折射出家庭、社会、融入的哲理。电影《奇迹男孩》讲述了一个患有先天性疾病的孩子在老师同学父母相处的故事。是一部很好的教育片，也折射出家庭、社会、融入的哲理。</div>
              <!--图片显示区域-->
              <div class="conVideo">
                <img src="../images/vedio.png">
              </div>
              <div class="conText-position">深圳 京基大厦</div>
              <div class="context-Time">
                <span class="time">2018年2月4日 00:55</span>
                <span class="ip">192.168.2.1</span>
              </div>
            </div>
          </div>
          <div class="appove">
            <i></i>
            <span class="sanjiao"></span>
            <span>王萌萌、</span><span>玉石、</span><span>知己天涯、</span><span>聚集</span>
          </div>
          <div class="discuss">
            <div><span class="discussName">王石：</span><span>厉害了我的国！</span></div>
          </div>
        </div>

        <!--08.分享文章类型-->
        <div class="oneTextStatus">
          <div class="typeText">
            <div class="porTrait">
              <!--头像-->
              <div></div>
            </div>
            <div class="conText">
              <div class="conText-name">李潇潇</div>
              <!--分享文章区域-->
              <div class="conVideo">
                <img src="../images/vedio.png">
              </div>
              <div class="conText-position">
                <span class="conPlaces">深圳 京基大厦</span>
                <span class="conipNet">
                     <i></i>
                     <a href="javascript:;" title="点击复制">www.wangyi.com</a>
                </span>
              </div>
              <div class="context-Time">
                <span class="time">2018年2月4日 00:55</span>
                <span class="ip">192.168.2.1</span>
              </div>
            </div>
          </div>
          <div class="appove">
            <i></i>
            <span class="sanjiao"></span>
            <span>王萌萌、</span><span>玉石、</span><span>知己天涯、</span><span>聚集</span>
          </div>
          <div class="discuss">
            <div><span class="discussName">王石：</span><span>厉害了我的国！</span></div>
          </div>
        </div>

        <!--09.文字加分享类型-->
        <div class="oneTextStatus">
          <div class="typeText">
            <div class="porTrait">
              <!--头像-->
              <div></div>
            </div>
            <div class="conText">
              <div class="conText-name">李潇潇</div>
              <div class="conText-discuss">电影《奇迹男孩》讲述了一个患有先天性疾病的孩子在老师同学父母相处的故事。</div>
              <!--分享文章区域-->
              <div class="conArtical">
                <div class="conArticalImg">
                  <img src="../images/u0001.png"/>
                </div>
                <div class="conArticalText" title="我是姥姥家大锅台雁塔店，参加了2018年首届会展中心“舌尖上的美食”网红店的评选。">
                  我是姥姥家大锅台雁塔店，参加了2018年首届会展中心“舌尖上的美食”网红店的评选。
                  雁塔店姥姥家店大锅台口味独特，现场操作，干净卫生，是你和加人聚会的最佳场所。
                </div>
              </div>
              <div class="conText-position">
                <span class="conPlaces">深圳 京基大厦</span>
                <span class="conipNet">
                                       <i></i>
                                       <a href="javascript:;" title="点击复制">www.baidu.com</a>
                                  </span>
              </div>
              <div class="context-Time">
                <span class="time">2018年2月4日 00:55</span>
                <span class="ip">192.168.2.1</span>
              </div>
            </div>
          </div>
          <div class="appove">
            <i></i>
            <span class="sanjiao"></span>
            <span>王萌萌、</span><span>玉石、</span><span>知己天涯、</span><span>聚集</span>
          </div>
          <div class="discuss">
            <div><span class="discussName">王石：</span><span>厉害了我的国！</span></div>
          </div>
        </div>
        <!--09.文字加分享类型-->
        <div class="oneTextStatus">
          <div class="typeText">
            <div class="porTrait">
              <!--头像-->
              <div></div>
            </div>
            <div class="conText">
              <div class="conText-name">李潇潇</div>
              <!--分享文章区域-->
              <div class="conArtical">
                <div class="conArticalImg">
                  <img src="../images/u0001.png"/>
                </div>
                <div class="conArticalText" title="我是姥姥家大锅台雁塔店，参加了2018年首届会展中心“舌尖上的美食”网红店的评选。">
                  我是姥姥家大锅台雁塔店，参加了2018年首届会展中心“舌尖上的美食”网红店的评选。
                  雁塔店姥姥家店大锅台口味独特。
                </div>
              </div>
              <div class="conText-position">
                <span class="conPlaces">深圳 京基大厦</span>
              </div>
              <div class="context-Time">
                <span class="time">2018年2月4日 00:55</span>
                <span class="ip">192.168.2.1</span>
              </div>
            </div>
          </div>
          <div class="appove">
            <i></i>
            <span class="sanjiao"></span>
            <span>王萌萌、</span><span>玉石、</span><span>知己天涯、</span><span>聚集、</span>
          </div>
          <div class="discuss">
            <div><span class="discussName">王石：</span><span>厉害了我的国！</span></div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/babel">
  export default {
    name: 'Moments',
    props: {
    },
    data() {
      return {};
    },
    methods: {
    },
    computed: {
    }
  };
</script>
<style>
  /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
  ::-webkit-scrollbar
  {
    width: 8px;  /*滚动条宽度*/
    height: 8px;  /*滚动条高度*/
  }
  /*定义滚动条轨道 内阴影+圆角*/
  ::-webkit-scrollbar-track
  {
    /*-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);  */
    border-radius: 4px;  /*滚动条的背景区域的圆角*/
    background-color: #fff;/*滚动条的背景颜色*/
    border: 1px solid #e0e0e0;
  }
  /*定义滑块 内阴影+圆角*/
  ::-webkit-scrollbar-thumb
  {
    border-radius: 4px;  /*滚动条的圆角*/
    /*-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);  */
    background-color: #E0E0E0;  /*滚动条的背景颜色*/
  }
  .main{
    width: 600px;
    height: 850px;
    margin: 10px auto;
    background-color:#ededed;
    overflow: auto;
    padding: 20px 0;
    position: relative;
  }
  .friendship{
    width: 80%;
    height: 100%;
    box-sizing: border-box;
    overflow: auto;
    background-color: #ffffff;
    margin:0 auto;
  }
  .oneTextStatus{
    padding: 25px;
    border-bottom: 1px solid #e0e0e0;
  }
  .typeText{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }
  .porTrait{
    display: flex;
    width: 40px;
    height: 40px;
    flex-shrink: 0;
  }
  .porTrait>div{
    width: 40px;
    height: 40px;
    background: url(../images/partial.png) no-repeat 0px 0px;
    background-size: 100% 100%;
  }
  .conText{
    margin-left: 12.5px;
    font-size: 14px;
  }
  .conText-name{
    height: 20px;
    color: #687A96;
  }
  .context-Time>.time{
    margin-right: 10px;
  }
  .conText-discuss{
    font-size: 14px;
    color:#373737;
    line-height: 16px;
  }
  .conText-position,.context-Time{
    margin: 5px 0px;
    font-size: 12px;
    color:#959595;
  }
  .context-Time{
    margin-top: 0px;
  }
  .appove,.discuss{
    margin:5px 0 0 50px;
    background-color: #EEEEEE;
    padding: 10px;
    position: relative;
    font-size: 14px;
    line-height: 16px;
  }
  .appove{
    color: #606B92;
    border-bottom: #E4E4E4 1px solid;
  }
  .appove>i{
    display: inline-block;
    width: 15px;
    height: 15px;
    background: url(../images/zan.png) no-repeat 0px 0px;
    background-size: 100% 100%;
    margin-right:5px;
    vertical-align: sub;
  }
  .appove>.sanjiao{
    top: -5px;
    position: absolute;
    width: 10px;
    height: 10px;
    display: block;
    background-color: #EEEEEE;
    transform: rotate(45deg);
  }
  .discuss{
    font-size: 13px;
    margin-top: 0px;
    padding-top: 5px;
  }
  .discussName{
    color: #6E7594;
  }
  .conPicture{
    width: 370px;
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
  }
  .conVideo{
    width: 210px;
    height: 120px;
    margin-top: 10px;
    cursor: pointer;
  }
  .conVideo>img{
    width: 100%;
    height: 100%;
    border-radius: 2px;
  }
  .conPicture>div{
    width: 115px;
    height: 115px;
    margin: 0 2px 2px 0;
    padding:2px;
    cursor: pointer;
  }
  .conPicture>div>img{
    display: block;
    width: 100%;
    height: 100%;
  }
  .conArtical{
    margin-top: 10px;
    width: 50%;
    min-width: 300px;
    height: 55px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: #ECECEC;
    color: #333333;
  }
  .conPlaces{
    margin-right: 10px;
  }
  .conipNet>i{
    vertical-align: bottom;
    display: inline-block;
    width: 16px;
    height: 16px;
    background: url(../images/link.png) no-repeat 0px 0px;
    background-size: 100% 100%;
  }
  .conArticalImg{
    width: 45px;
    height: 45px;
    flex-shrink: 0;
    margin: 5px;
  }
  .conArticalImg>img{
    width: 100%;
    height: 100%;
  }
  .conArticalText{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    /*display: -webkit-box;*/
    /*-webkit-line-clamp: 1;*/
    /*-webkit-box-orient: vertical;*/
    padding: 0 5px;
    color:#424242;
    font-size: 13px;
  }
  .shadow{
    left: 10%;
    display: none;
    width: 80%;
    height: calc(100% - 40px);
    background-color: #ccc;
    position: absolute;
    opacity: 1.0;
    z-index: 2;
    box-sizing: border-box;
  }
  .videoData {
    position:relative;
    width: 450px;
    height: 300px;
    margin: 0 auto;
    margin-top: 25%;
  }
  video{
    width: 450px;
    height: 300px;
  }
  .close{
    border-radius: 45px;
    position: absolute;
    width: 30px;
    height: 30px;
    cursor: pointer;
    text-align: center;
    color: #333;
    top: 0;
    right: -15px;
    background: #fff;
    font-size: 25px;
    line-height: 25px;
    font-weight: 100;
  }
</style>
