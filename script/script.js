
const theme = localStorage.getItem('theme');

if( theme == null){
    setTheme('style1')
}else{
    setTheme(theme)
};


let themeDots = document.getElementsByClassName('theme-dot');


for(let i=0; themeDots.length > i; i++){
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode;
        //console.log('clicked:', mode)
        setTheme(mode);
    });
};

function setTheme(mode){
    if(mode == 'style1'){
        document.getElementById('theme-style').href = 'style1.css'
    }

    if(mode == 'style2'){
        document.getElementById('theme-style').href = 'style2.css'
    }

    if(mode == 'style3'){
        document.getElementById('theme-style').href = 'style3.css'
    }

    if(mode == 'style4'){
        document.getElementById('theme-style').href = 'style4.css'
    }

    localStorage.setItem('theme', mode)
}