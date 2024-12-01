const container = document.querySelector('body > pre');
const left = container.textContent.replaceAll('\n', '   ').split('   ').filter((value,index)=> index % 2 === 0 && Boolean(value))
const right = container.textContent.replaceAll('\n', '   ').split('   ').filter((value,index)=> index % 2 && Boolean(value))
const sortedLeft = left.sort((a,b) => a > b ? 1 : -1)
const sortedRight = right.sort((a,b) => a > b ? 1 : -1)
const answers = sortedLeft.map((left, index) => Math.abs(left - sortedRight[index])).reduce((a,b) => a + b, 0)
console.log(answers)
