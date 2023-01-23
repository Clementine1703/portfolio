let select = '';
let allLang = [];

window.onload = function () {
    select = document.querySelectorAll('.lang-toggler');
    allLang = ['en', 'ru'];
    changeLanguage()
}

function langChange(hash){
	window.location.hash = hash;
	changeLanguage()
    localStorage.setItem('lang', window.location.hash);
    location.reload();
}


function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substr(1);
    if (!allLang.includes(hash)) {
        if (localStorage.getItem('lang')){
            hash = localStorage.getItem('lang')
            location.href = window.location.pathname + hash;
            hash = hash.substr(1)
        }
        else {
            location.href = window.location.pathname + '#en';
        }
    }
    for (let key in langArr) {
        let elem = document.querySelector('.lng-' + key);
        if (elem) {
            elem.innerHTML = langArr[key][hash];
        }

    }
}


