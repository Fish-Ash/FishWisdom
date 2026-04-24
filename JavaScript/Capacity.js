document.querySelectorAll('.Formula').forEach(formula =>{
  formula.addEventListener('click', function(){
    this.closest('.Formula').querySelector('.Derivation').classList.toggle('active');
  });
});

function escapeHTML(str) {
    return str.replace(/[&<>]/g, function(match) {
        if (match === '&') return '&amp;';
        if (match === '<') return '&lt;';
        if (match === '>') return '&gt;';
        return match;
    });
}

// 代码块去空白
function trimCodeBlockLeadingWhitespace() {
    const codeBlocks = document.querySelectorAll('pre code');

    codeBlocks.forEach(item => {

      let text = item.innerText;
      let lines = text.split('\n');
      lines = lines.slice(1,-1);
      console.log(lines)
      let minLeading = Infinity;
      lines.forEach(line => {
          // 匹配行首连续空白（空格或制表符）
          const match = line.match(/^[ \t]+/);
          if (match) {
              // 如果行首有空白，记录长度
              minLeading = Math.min(minLeading, match[0].length);
          } else if (line.trim() !== '') {
              // 非空行且行首没有空白，则公共空白长度为0
              minLeading = 0;
          }
          // 空行忽略，不参与计算
      });

        // 如果所有行都是空行或没有公共空白，则无需处理
        if (minLeading === Infinity || minLeading === 0) return;

        // 从每一行移除 minLeading 长度的前导空白
        const trimmedLines = lines.map(line => {
            if (line.length === 0) return line; // 空行保留
            // 只移除前 minLeading 个字符（假设它们都是空白）
            // 注意：如果一行实际空白少于 minLeading（例如混合行），可能出错，但根据计算 minLeading 是所有非空行的最小值，所以不会出现这种情况
            return line.substring(minLeading);
        });

        // 重新组合文本并写回
        item.textContent = trimmedLines.join('\n');
    });
}

// 在页面加载完成后执行
document.addEventListener('DOMContentLoaded', trimCodeBlockLeadingWhitespace);
