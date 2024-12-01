const container = document.querySelector('body > pre');
const left = container.textContent.replaceAll('\n', '   ').split('   ').filter((value,index)=> index % 2 === 0 && Boolean(value))
const right = container.textContent.replaceAll('\n', '   ').split('   ').filter((value,index)=> index % 2 && Boolean(value))
left.map(l => {
    const factor = right.filter(r => r == l).length
    return factor * Number(l)
}).reduce((a,b) => a+b,0)
