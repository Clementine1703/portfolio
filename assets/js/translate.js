const select = document.querySelectorAll('.lang-toggler');
const allLang = ['en', 'ru'];


function langChange(hash){
	window.location.hash = hash;
	changeLanguage()
}


function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substr(1);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#en';
        location.reload();
    }
    for (let key in langArr) {
        let elem = document.querySelector('.lng-' + key);
        if (elem) {
            elem.innerHTML = langArr[key][hash];
        }

    }
}

changeLanguage();