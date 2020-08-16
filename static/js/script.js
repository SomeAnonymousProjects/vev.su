window.onload = function () {
    // делаем ссылокой весь блок
    document.querySelectorAll('.page.sub-site').forEach(function (el) {
        el.addEventListener('click', function () {
            let href = this.querySelector('h2 a').getAttribute('href');
            if (href) {
                window.location = href;
            }
        });
    });
};
