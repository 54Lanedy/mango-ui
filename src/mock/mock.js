import Mock from 'mockjs';//es6语法引入mock模块

Mock.mock('http://localhost:8080/login', {
    data:{
        'token':'4344323121398'
        //其他...
    }
});

Mock.mock('http://localhost:8080/user', {
    'name':'@name',  //随机生成姓名
    'email':'@email',//随机生成邮箱
    'age|1-10':5     //年龄
    //其他...
});
Mock.mock('http://localhost:8080/menu', {
    'id':'@increment', //随机id
    'name':'menu',
    'order|10-20':12
    //其他...
});

