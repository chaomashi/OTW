## ts npm install -g typescript
### tsc --version
### tsc --init 初始化 tsconfig.json

let index = 'aaaa'

// 布尔类型 
 const flag:boolean = false;

 // 整形和数字形无区分
 let num:number = 123;

 num = 456;
 num = -456;

 // 数组
 let arr:number[] = [1,2,30];
 const arrStr:string[] = ['aa','bb'];

 let arr1:Array<number> = [1,1,1];

 // 元祖类型

 let arr2:[] = []

 // 枚举

 // 函数

 // 函数

let fun = function():void{
    
}

fun();


let fun1= function(name:string):string{
    return ''
    
}


// 重载
function funaa (name:string):string;

function funaa (age:any):any{
    return '';
}

    // 类修饰符
    pubilc: 公有 类里面 子类 类外面都可以访问
    protected: 保护类型 在类里面、子类里面可以访问 在类外部没法访问
    private 私有 在类里面可以访问 子类和类外部都无法访问
    
    // 泛型: 可以支持不特定的数据类型 要求:传入的参数和返回的参数一致
    
    //
    function getData<T>(value:T):T{
        return  value;
    }
