// 遍历所有文本节点
function processTextNodes(node) {
    if (node.nodeType === 3) { // 3 表示文本节点
        processText(node);
    } else {
        // 跳过不需要处理的元素
        if (node.tagName && ['SCRIPT', 'STYLE', 'TEXTAREA', 'CODE', 'PRE'].includes(node.tagName.toUpperCase())) {
            return;
        }
        
        // 递归处理子节点
        for (let i = 0; i < node.childNodes.length; i++) {
            processTextNodes(node.childNodes[i]);
        }
    }
}

// 处理文本内容
function processText(textNode) {
    const text = textNode.nodeValue;
    if (!text || !/[a-zA-Z0-9]/.test(text)) return;
    
    const parent = textNode.parentNode;
    const fragment = document.createDocumentFragment();
    
    let currentSegment = '';
    let currentIsLatin = false;
    
    // 遍历文本中的每个字符
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const isLatin = /[a-zA-Z0-9]/.test(char);
        
        // 如果当前字符类型与前一个不同，或者是第一个字符
        if (i === 0 || isLatin !== currentIsLatin) {
            // 如果已经有累积的片段，创建相应的节点
            if (currentSegment) {
                const node = currentIsLatin 
                    ? createLatinSpan(currentSegment) 
                    : document.createTextNode(currentSegment);
                fragment.appendChild(node);
            }
            
            // 重置累积的片段
            currentSegment = char;
            currentIsLatin = isLatin;
        } else {
            // 继续累积当前片段
            currentSegment += char;
        }
    }
    
    // 处理最后一个片段
    if (currentSegment) {
        const node = currentIsLatin 
            ? createLatinSpan(currentSegment) 
            : document.createTextNode(currentSegment);
        fragment.appendChild(node);
    }
    
    // 用处理后的片段替换原始文本节点
    parent.replaceChild(fragment, textNode);
}

// 创建应用新罗马字体的 span 元素
function createLatinSpan(text) {
    const span = document.createElement('span');
    span.style.fontFamily = "'Times New Roman', serif";
    span.textContent = text;
    return span;
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    processTextNodes(document.body);
    
    // 观察 DOM 变化，处理动态加载的内容
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === 1) { // 元素节点
                    processTextNodes(node);
                }
            });
        });
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});