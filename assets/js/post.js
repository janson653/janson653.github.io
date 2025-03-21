// 创建目录
function createTableOfContents() {
    const headings = document.querySelectorAll('.markdown-content h2, .markdown-content h3');
    const toc = document.getElementById('toc');
    
    if (headings.length === 0) {
        toc.innerHTML = '<p>此文章没有目录</p>';
        return;
    }
    
    let tocHtml = '<ul class="list-unstyled ps-0">';
    
    headings.forEach((heading, index) => {
        // 为标题添加ID
        const id = `heading-${index}`;
        heading.id = id;
        
        // 根据标题级别添加不同的缩进
        const isH3 = heading.tagName.toLowerCase() === 'h3';
        const indentClass = isH3 ? 'ps-3' : '';
        
        tocHtml += `
            <li class="${indentClass} mb-1">
                <a href="#${id}" class="text-decoration-none ${isH3 ? 'text-secondary' : 'text-dark'}">${heading.textContent}</a>
            </li>
        `;
    });
    
    tocHtml += '</ul>';
    toc.innerHTML = tocHtml;
}

// 代码块语言标签
function addLanguageLabels() {
    const codeBlocks = document.querySelectorAll('.markdown-content pre code');
    codeBlocks.forEach(block => {
        const className = block.className;
        if (className && className.startsWith('language-')) {
            const language = className.replace('language-', '');
            block.parentElement.setAttribute('data-lang', language);
        }
    });
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 代码高亮
    if (typeof Prism !== 'undefined') {
        Prism.highlightAll();
    }
    
    // 创建目录
    createTableOfContents();
    
    // 添加代码语言标签
    addLanguageLabels();
}); 