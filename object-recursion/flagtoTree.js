/*
 * @Des: flag to tree
 * @Version:
 * @Author: Ellen
 * @Date: 2021-07-21 18:17:39
 * @LastEditors: Ellen
 * @LastEditTime: 2021-07-21 21:18:55
 */

/**
 * @name: Ellen
 * @test: flag to tree
 * @msg:
 *  target：
 *  [
 *      {province:'广东省',city:'广州市',district:'天河区'},
 *      {province:'广东省',city:'广州市',district:'白云区'},
 *      {province:'广东省',city:'东莞市',district:'常平镇'},
 *      { province: "广西省", city: "玉林市", district: "茂林镇" }
 * ]
 * to
 * [
 *      {
 *          name:'广东省',
 *          children:[
 *            {  name:'广州市',
 *              children:[{name:'天河区'},{name:'白云区'}]
 *            },
 *            {  name:'东莞市',
 *              children:[{name:'常平镇'}]
 *            },
 *          ]
 *      }
 * ]
 * @param {*}
 * @return {*}
 */

/**
 *  阶乘：factorial(n)  = factorial(n-1)*n
 *  factorial(0)=1
 *  例如
 *  function factorial(n){
 *      if(n==0) {return 1}
 *    return n*factorial(n-1)
 *    https://www.bilibili.com/video/BV1GJ411Y72V?from=search&seid=13227113497316558846
 * }
 *
 */
let raw = [
  { province: "广东省", city: "广州市", district: "天河区" },
  { province: "广东省", city: "广州市", district: "白云区" },
  { province: "广东省", city: "东莞市", district: "常平镇" },
];

function recursion(rawArray) {
  let parent = rawArray.map((p) => p.province === "广东省"),
    children = rawArray.map((c) => c.province !== "广东省");

  dataTree(parent, children);
  return parent;

  function dataTree(parent, children) {
    parent.map((p) => {
      children.map((c, i) => {
        if (c.city === p.city) {
          let _children = JSON.parse(JSON.stringify(children));
          _children.splice(i, 1);
          dataTree([c], _children);
          if (c.children) {
            c.children.push(c);
          } else {
            c.children = [c];
          }
        }
      });
    });
  }
}

let raws = recursion(raw);
console.dir(raws);
