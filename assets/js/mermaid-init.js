document.addEventListener('DOMContentLoaded', function() {
  // 转换 Markdown 代码块为 Mermaid div
  const mermaidBlocks = document.querySelectorAll('code.language-mermaid');
  mermaidBlocks.forEach(function(block) {
    const mermaidDiv = document.createElement('div');
    mermaidDiv.className = 'mermaid';
    mermaidDiv.textContent = block.textContent;
    block.parentNode.replaceWith(mermaidDiv);
  });
  
  // 初始化 Mermaid
  mermaid.initialize({
    startOnLoad: true,
    theme: 'default',
    securityLevel: 'loose'
  });
});