$(function() {
    var STAFF_ID = CurrentStaffId;
    var HEADER_MENU_SELECTOR = '.header-container';
    var HORIZONTAL_MENU_BUTTONS_SELECTOR = '.global-actions > .global-actions-list:last-child';
    var HORIZONTAL_MENU_ELEMENTS_SELECTOR = '.primary-nav';

    var TOP_PANEL_SELECTOR = '#alpha1_panel';
    var RECORD_SELECTOR = '.req-tr.req-data-row';
    var RECOR_INFO_SELECTOR = '.req-td.req-inf';

    var checkNotUndefined = function(data) {
        return (typeof data === 'undefined') ? false : true;
    };

    var addCode = function(selector, htmlCode, after) {
        var element = $(selector);
        if (checkNotUndefined(after) === true && after === true) {
            element.append(htmlCode);
        } else {
            element.prepend(htmlCode);
        }
    };

    // Добавляем CSS
    $('body').append('<link href="https://chat.autofaq.ai/widget/static/css/main.css" rel="stylesheet">');

    // Загружаем библиотеку js-cookie
    var cookieScript = document.createElement('script');
    cookieScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/js-cookie/3.0.1/js.cookie.min.js';
    cookieScript.onload = function() {
        // После загрузки js-cookie загружаем виджет
        var widgetScript = document.createElement('script');
        widgetScript.setAttribute('data-widget-host', 'https://chat.autofaq.ai');
        widgetScript.setAttribute('data-widget-service-id', 'd9821287-eca1-4a0f-a9cd-f08e8f92e876');
        widgetScript.setAttribute('data-widget-channel-id', 'c2c00d17-926f-4984-b4fb-721e8e2589c4');
        widgetScript.setAttribute('data-widget-user-login', 'default');
        widgetScript.setAttribute('data-widget-user-name', '');
        widgetScript.setAttribute('data-widget-user-email', '');
        widgetScript.setAttribute('data-widget-auto-open', '{"timer": 1, "once": true}');
        widgetScript.setAttribute('data-widget-operator-name', 'true');
        widgetScript.setAttribute('data-widget-sizes', '{"resizeable": true}');
        widgetScript.setAttribute('data-widget-new-messages', '{"badge": true, "favicon": true, "notifications": true}');
        widgetScript.src = 'https://chat.autofaq.ai/widget/static/js/main.js';
        widgetScript.id = 'autofaqWidget';

        // Добавляем скрипт виджета после загрузки js-cookie
        document.body.appendChild(widgetScript);
    };
    document.body.appendChild(cookieScript);

    // Проверка доступности cookies
    function checkCookiesEnabled() {
        try {
            document.cookie = 'testcookie';
            var cookiesEnabled = document.cookie.indexOf('testcookie') !== -1;
            document.cookie = 'testcookie=; expires=Thu, 01 Jan 1970 00:00:00 GMT';
            return cookiesEnabled;
        } catch (e) {
            return false;
        }
    }

    if (!checkCookiesEnabled()) {
        console.error('Cookies are disabled in the browser. Widget may not work correctly.');
        alert('Для работы виджета необходимо включить cookies в настройках браузера.');
    }
})();
