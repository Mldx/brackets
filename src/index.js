module.exports = function check(str, bracketsConfig) {
    let str1 = str.split('');
    for (let i = 0; i < bracketsConfig.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            for (let k = 0; k < bracketsConfig.length; k++) {
                for (let l = 0; l < str1.length; l++) {
                    if (str1[l] === bracketsConfig[k][0] && str1[l + 1] === bracketsConfig[k][1]) {
                        str1.splice(l, 2);
                        l = -1;
                    }
                }
            }
        }
    }
  return JSON.stringify(str1) === JSON.stringify([]);
}
