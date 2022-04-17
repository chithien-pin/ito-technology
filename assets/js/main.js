window.addEventListener('DOMContentLoaded', (event) => {
    $('.digit-group').find('input').each(function() {
        $(this).attr('maxlength', 1);
        $(this).on('keyup', function(e) {
            const parent = $($(this).parent());

            if(e.keyCode === 8 || e.keyCode === 37) {
                const prev = parent.find('input#' + $(this).data('previous'));

                if(prev.length) {
                    $(prev).select();
                }
            } else if((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode === 39) {
                const next = parent.find('input#' + $(this).data('next'));

                if(next.length) {
                    $(next).select();
                } else {
                    if(parent.data('autosubmit')) {
                        parent.submit();
                    }
                }
            }
        });
    });
    $(function () {
        $('[data-toggle="popover"]').popover()
        $('[data-toggle="tooltip"]').tooltip()
    })
});

function togglePassword(ele) {
    $(ele).attr('type') === 'password' ? $(ele).attr('type', 'text') : $(ele).attr('type', 'password')
}
function copyToClipboard(ele) {
    /* Get the text field */
    var copyText = document.getElementById(ele);

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);

    /* Alert the copied text */
    return copyText.value
}
function toggleMenu(id) {
    if($(id).attr('data-toggle')==="0"){
        $(id).addClass('show')
        $(id).attr('data-toggle',"1")
    }else{
        $(id).removeClass('show')
        $(id).attr('data-toggle',"0")
    }
}

function collapse(id, icon) {
    if ($(id).attr('data-text') === 'thu') {
        $(id).text('Mở rộng')
        $(id).attr('data-text', 'mo')
        $(icon).css('transform', 'rotate(180deg)')
    } else {
        $(id).text('Thu gọn')
        $(id).attr('data-text', 'thu')
        $(icon).css('transform', 'rotate(0deg)')
    }
}