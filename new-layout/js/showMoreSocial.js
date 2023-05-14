const listSocial = document.getElementById('listSocial');
const showMore = document.getElementById('showMoreSocial');
if (listSocial.clientHeight < listSocial.scrollHeight) {
    showMore.classList.remove('d-none')
}

function showMoreSocial() {
    const listSocial = document.getElementById('listSocial');
    listSocial.classList.add('full')
    const showMore = document.getElementById('showMoreSocial');
    showMore.classList.add('d-none')
}