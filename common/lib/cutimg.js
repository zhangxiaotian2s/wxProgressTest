class CutImg {
  constructor(ctx, cutData) {
    this.ctx = ctx;
    this.c_height = cutData.c_height || 0;
    this.c_width = cutData.c_width || 0;
    this.startX = cutData.startX || 0;
    this.startY = cutData.startY || 0;
    this.imgW = 0;//首次计算后得到的
    this.imgH = 0;//首次计算后得到的
    this.percent = cutData.percent || 1;
    this.imgUrl = ''
  }
  //选放一张图片进去
  choseDrawImage() {
    const _this = this;
    wx.chooseImage({
      success: function (res) {
        _this.getImgInfo(_this.ctx, res.tempFilePaths[0])
      }
    })
  }
  init() {
    if (!this.imgUrl) {

    }
  }
  //得到图片的尺寸信息之后画入图片
  getImgInfo(ctx, imgUrl) {
    const _this = this;
    wx.getImageInfo({
      src: imgUrl,
      success: function (res) {
        console.log(res)
        _this.imgUrl = res.path
        _this.setImgFirstDraw(res.width, res.height, _this.c_width, _this.c_height)
      },
      fail: function (res) {
        console.log(res)
      },
      complete: function (res) { },
    })
  }
  //根据图片尺寸计算 把图片首次画入
  setImgFirstDraw(imgw, imgh, c_width, c_height) {
    const _this=this;
    let percent ;
    
    //当图片的宽大于高的时候
    if (imgw >= imgh) {
      percent = (imgw / c_width);
      this.percent = percent;
      percent = percent > 1 ? 1 : percent;
      this.startX = (c_width - c_width * percent) / 2;
      //如果图片高度大约屏幕高度
      if (imgh > c_height) {
        this.startY = (c_height - imgh / this.percent) / 2;
        this.imgW = imgw / this.percent;
        this.imgH = imgh / this.percent
        //当图片高度小于屏幕高度 但是图片宽度大于屏幕宽度
      } else if (imgh < c_height&&imgw>c_width){
        percent = c_width / imgw;
        this.startY = (c_height - imgh * percent) / 2;
        this.imgW = c_width ;
        this.imgH = imgh * percent;
      }else {
        this.startY = (c_height - c_height * percent) / 2;
        this.imgW = imgw;
        this.imgH = imgh;
      }

    } else {
      //当图片的高大于宽的时候
      percent = (imgh / c_height)
      this.percent = percent
      percent = percent > 1 ? 1 : percent;
      console.log(percent)
      this.startY = (c_height - c_height * percent) / 2;
      if(imgw>c_width){
        this.startX = (c_width - imgw / this.percent) / 2;
        this.imgW = imgw / this.percent;
        this.imgH = imgh / this.percent
        //当img 宽小于屏幕宽 但图片高大于屏幕高的情况
      } else if (imgw < c_width&&imgh>c_height){
        percent=c_height/imgh
        this.startX = (c_width - imgw * percent) / 2;
        this.imgW = imgw * percent;
        this.imgH = c_height;
      }else{
        this.startX = (c_width - c_width * percent) / 2;
        this.imgW = imgw;
        this.imgH = imgh;
      }
    }
    this.drawImage(this.startX, this.startY, this.imgW, this.imgH);
  }
  drawImage(startX,startY,imgw,imgh){
    this.ctx.drawImage(this.imgUrl,startX, startY,imgw , imgh);
    this.ctx.draw()
  }
}
export default CutImg