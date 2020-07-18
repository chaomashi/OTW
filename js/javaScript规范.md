**1、变量的命名 最好是具象的 布尔 需要带is  has can ,单位需要带_ms _s _px等**

      @example   
      var height_px = $("#mydiv").height(); 
      var delay_ms = 3* 1000;
      var isRead  = false;
     
**2、常量需要定义在文件头部，并使用 _ 分割**

     @example 
     var MAX_PEOPLE_SIZE = 10;
**3、console 添加自定义变量
      `` 不是'' console.info(`${value}`)
