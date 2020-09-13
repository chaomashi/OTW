# js 的构造函数和原型链新增方法
    function Person(){
        this.name = 'zhangsan';
        this.age = 20;
        this.run = function(){
            console.log('奔')
        }
    }
    // 原型链上面的属性会被多个实例共享 构造函数不会
    Persion.prototype.sex = '男'
    Persion.prototype.work = function(){
    console.log('正在工作')
    }
    
    var p = new Persion();
    p.work();
    


