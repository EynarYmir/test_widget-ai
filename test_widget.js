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
    }

    var addCode = function(selector, htmlCode, after) {
        var element = $(selector);
        if(checkNotUndefined(after) === true && after === true) {
            element.append(htmlCode);
        } else {
            element.prepend(htmlCode);
        }
    }

    $(document).find('body').append('<link href="https://chat.autofaq.ai/widget/static/css/main.css" rel="stylesheet">')

    addCode(HORIZONTAL_MENU_BUTTONS_SELECTOR,
        '<script data-widget-host="https://chat.autofaq.ai" data-widget-service-id="d9821287-eca1-4a0f-a9cd-f08e8f92e876" data-widget-channel-id="c2c00d17-926f-4984-b4fb-721e8e2589c4" data-widget-user-login="default" data-widget-user-name="" data-widget-user-email="" data-widget-auto-open="{"timer": 1,"once": false}" data-widget-operator-name="true" data-widget-sizes="{"resizeable": true}" data-widget-new-messages="{"badge": true,"favicon": true,"notifications": true}" src="https://chat.autofaq.ai/widget/static/js/main.js" id="autofaqWidget"></script>'
    )
});