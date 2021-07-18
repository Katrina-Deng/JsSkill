/*
 * @Des:
 * @Version:
 * @Author: Ellen
 * @Date: 2021-07-18 16:24:21
 * @LastEditors: Ellen
 * @LastEditTime: 2021-07-18 16:49:14
 */
// origin
// ["bar.txt  ", "  foo.txt","   ","baz.txt"]
// target
// @/files/test/
// ["@/files/test/bar.txt", "@/files/test/foo.txt","@/files/test/baz.txt"]

let files = ["bar.txt  ", "  foo.txt","   ","baz.txt"]
// way one
function loopWays () {
    let result =[]
    for (const file of files) {
        let filename = file.trim()
        if (filename) {
          let  fileitem = `@/files/test/${filename}`
            result.push(fileitem)
        }
    }
    // console.log('res',result);
}
loopWays()

function reduce () {
    let filePath = files.reduce((result,file)=>{
        let filename = file.trim()
        if (filename) {
            let fileitem = `@/files/test/${filename}`
            result.push(fileitem)
        }
        return result
    },[])
    // console.log('path',filePath);
}
reduce()

function chain () {
    let filePath = files.map(item=>item.trim())
                        .filter(item=>item!=='')
                        .map(item=>item = `@/files/test/${item}`)
    console.log('f',filePath);
}

chain()