module.exports = function check(str, bracketsConfig) {
    const map = {
      '(': ')',
      '[': ']',
      '{': '}',
    };
    const closing = Object.values(map);
    const stack = [];
          
    for (let char of str) {
      if (map[char]) {
        stack.push(char);
      } else if (closing.includes(char) && char !== map[stack.pop()]) {
        return false;
      }
    }
    return !stack.length;
  }
  /*let chars = str.split(''),
        stack = [],
        open = ['{', '(', '['],
        close = ['}', ')', ']'],
        closeIndex,
        openIndex;
        for (let i = 0, len = chars.length; i < len; i++) {
          openIndex = open.indexOf(chars[i]);
          if (openIndex !== -1) {
              // Нашли открывающую скобку. Помещаем ее в стек 
              stack.push(openIndex);
              continue;
          }
   
          closeIndex = close.indexOf(chars[i]);
          if (closeIndex !== -1) {
              // Нашли закрывающую скобку. Проверяем ее соответствие открывающей
              openIndex = stack.pop();
              if (closeIndex !== openIndex) {
                  return false;
              }
          }
       }
   
       if (stack.length !== 0) {
           return false;
       }
   
       return true;
   }*/

  /*let brackets = {
    ')': '(', 
    '}': '{',
    ']': '[',
    '|': '|'
  }

  for (let i = 0; i < str.length; i++) {
    const current = str[i];
    if (isClosedBracket(current)) {
if (brackets[current] !== stack.pop()) return false;
    } else {
      stack.push(current);
    }
  }
  return stack.length === 0;
}

function isClosedBracket(bracketsConfig) {
  return [')', '}', ']', '|'].indexOf(bracketsConfig) > -1;*/