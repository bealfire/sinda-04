var a = 1;
// exports.a = a;


/**
 * es6暴露方法
 * 
 * 只能暴露一个声明式的变量
 */
// export var b = 2;
export let c =3;
export let d = 5;


/**
 * 获取时，如果写在同一行，那么export default最先获取，export 后获取
 * 
 * 每个模块只有一个export default
 */
export default a;