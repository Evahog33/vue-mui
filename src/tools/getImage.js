export default function(cb){
    
    if(!plus){
        console.log('没有plus')
        return
      }

      var btnArray = [{title:"拍照"},{title:"选取现有的"}];
        plus.nativeUI.actionSheet( {
            title:"选择照片",
            cancel:"取消",
            buttons:btnArray
        }, function(e){
            var index = e.index;
            switch (index){
                case 0:
                    break;
                case 1:
                    getImage()
                    break;
                case 2:
                    appendByGallery()
                    break;
            }
        } );

         function getImage() {
          var cmr = plus.camera.getCamera(); 
          cmr.captureImage(function(p) {
              plus.io.resolveLocalFileSystemURL(p, function(entry) {
                  appendFile(entry.fullPath); //处理图片的地方
              }, function(e) {
                  plus.nativeUI.alert(e.message);
              });
          }, function(e) {}, {
              filename: "_doc/camera/"
          });  
      } 
         // 从相册添加文件 
    function appendByGallery(){
        plus.gallery.pick(function(path){

            appendFile(path);//处理图片的地方
        });
    }
    function appendFile(path){
      var img = new Image();
    img.src = path;        // 传过来的图片路径在这里用。
    img.onload = function () {
        var that = this;
        //生成比例 
        var w = that.width,
            h = that.height,
            scale = w / h; 
            w = 800 || w;              //480  你想压缩到多大，改这里
            h = w / scale;

        //生成canvas
        var canvas = document.createElement('canvas');

        var ctx = canvas.getContext('2d');

        canvas.setAttribute('width' , w);
        canvas.setAttribute('height' , h);

        ctx.drawImage(that, 0, 0, w, h);

        var base64 = canvas.toDataURL('image/jpeg', 0.8 );   //1最清晰，越低越模糊。有一点不清楚这里明明设置的是jpeg。弹出 base64 开头的一段 data：image/png;却是png。哎开心就好，开心就好
            
        cb(base64) 
      }
    }
}