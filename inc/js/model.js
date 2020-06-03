$.ready(function() {
    alert();
    var $template = $('template').html();
    $('.codeIt').each(function(i) {
        var $elementHTML = $(this).html();
        $(this).html("");
        $(this).append($template);
        $(this).find('.nav-item a').each(function(q) {
            $(this).prop('href', "#tab" + i.toString() + q.toString());
        });
        $(this).find('.tab-pane').each(function(q) {
            $(this).attr('id', "tab" + i.toString() + q.toString());
        });

        $(this).find('.tab-pane:nth-child(1)').html($elementHTML);
        $(this).find('.tab-pane:nth-child(2)').html('<pre class="prettyprint">' + $elementHTML.replace(/</g, '&lt;') + "</pre>");
    });
})