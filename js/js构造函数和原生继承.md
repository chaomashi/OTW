# js 的构造函数和原型链新增方法

    @example
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
    
    //静态方法
    Person.todo =function(){
    }
    
    // web类 继承Person类 原型链+ 对象冒充的组合继承模式
    
    function Web(){
        Person.call(this); //对象冒充实现继承 
    }
    
    var w = new Web();
    w.run(); // 对象冒充可以继承构造函数里面的属性和方法
    
    w.work(); // 对象冒充可以继承构造函数里面的属性和方法 但是没发继承原型链上面的属性和方法

