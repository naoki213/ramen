document.addEventListener('DOMContentLoaded', () => {
    // ナビゲーションのリンクを取得
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // デフォルトのクリック動作をキャンセル
            e.preventDefault();

            // リンクのhref属性からターゲットIDを取得
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // ターゲット要素へスムーズにスクロール
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
