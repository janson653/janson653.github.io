// 主题切换
document.querySelector('.theme-toggle').addEventListener('click', () => {
    document.documentElement.classList.toggle('dark-theme');
    const isDark = document.documentElement.classList.contains('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// 移动端导航菜单
document.querySelector('.navbar-toggle').addEventListener('click', () => {
    document.querySelector('.navbar-menu').classList.toggle('active');
});

// 回到顶部按钮
const backToTop = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// 图片懒加载
document.addEventListener('DOMContentLoaded', () => {
    const lazyImages = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
});

// 代码高亮
document.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightBlock(block);
});

// 目录生成
if (document.querySelector('.post-content')) {
    const headings = document.querySelectorAll('.post-content h2, .post-content h3');
    const toc = document.querySelector('.table-of-contents');
    
    if (toc && headings.length > 0) {
        const tocList = document.createElement('ul');
        headings.forEach((heading) => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            const id = heading.textContent.toLowerCase().replace(/\s+/g, '-');
            
            heading.id = id;
            a.href = `#${id}`;
            a.textContent = heading.textContent;
            a.classList.add(`toc-${heading.tagName.toLowerCase()}`);
            
            li.appendChild(a);
            tocList.appendChild(li);
        });
        toc.appendChild(tocList);
    }
} 