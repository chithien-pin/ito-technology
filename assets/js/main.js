window.addEventListener('DOMContentLoaded', (event) => {

});

function togglePassword(ele) {
    $(ele).attr('type') === 'password' ? $(ele).attr('type', 'text') : $(ele).attr('type', 'password')
}