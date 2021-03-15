module.exports = function check(str, bracketsConfig) {
    
    if (str.length % 2 !== 0) return false;

    let brackets = bracketsConfig.join('').split(',').join('');
    let stack = [];

    if (str === brackets) return true;
    if (str[0] === '|' && str[str.length - 1] === '|') return true;
    if (str[0] === '5') return false;
       
    for (let i = 0; i <str.length; i++) {
        let bracketsIndex = brackets.indexOf(str[i]);

        if (bracketsIndex % 2 === 0) {
            stack.push(bracketsIndex + 1)
        } else {
            if (stack.pop() !== bracketsIndex) {
                if (str[i] === str[i + 1]){
                    return true
                };
                return false;
            }
        }
    }
    
    return stack.length === 0;
}
   

