import history from './history'
export const checkLocalRedirect = href => {
    const searchPattern = new RegExp('^/[a-z]');
    const origin = window.location.origin;
    const target = href.replace(origin, '');
    return searchPattern.test(target)
};

export const onPageClick = (e) => {
    console.log('onPageClick', e.target)
    // Функция перехватывает все нажатия на странице и если ссылка
    // либо роутит если ссылка на внутреннюю страницу/копонент
    // либо открывает в новой вкладке если ссылка на внешний ресурс
    if (e.target.href !== undefined && e.target.tagName.toLocaleUpperCase() === "A") {
        if (e.target.target !== undefined && e.target.target !== '_blank')
                e.preventDefault();
        if (checkLocalRedirect(e.target.href)) {
            const redirect_to = e.target.href.replace(window.location.origin, '');
            history.push(redirect_to)
        } else {
            if (e.target.target) {
                window.open(e.target.href, e.target.target)
            } else {
                window.location.href = e.target.href;
            }

        }
    }
};