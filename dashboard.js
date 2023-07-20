    const home = document.getElementById('home')
    const wallet = document.getElementById('wallet')
    const transaction = document.getElementById('history')
    const profile = document.getElementById('profile')
    const dmenu = document.getElementById('dmenu')

    const homebtn = document.getElementById('homebtn')
    const walletbtn = document.getElementById('walletbtn')
    const historybtn = document.getElementById('historybtn')
    const profilebtn = document.getElementById('profilebtn')
    const menubtn = document.getElementById('dmenubtn')



function homeAlone() {


    homebtn.classList.add('active')
    walletbtn.classList.remove('active')
    profilebtn.classList.remove('active')
    menubtn.classList.remove('active')
    historybtn.classList.remove('active')

    home.classList.remove('hide');
    wallet.classList.add('hide');
    transaction.classList.add('hide');
    profile.classList.add('hide');
    dmenu.classList.add('hide')
}
function profileAlone() {

    profilebtn.classList.add('active')
    homebtn.classList.remove('active')
    walletbtn.classList.remove('active')
    menubtn.classList.remove('active')
    historybtn.classList.remove('active')
    
    // historybtn.classList.remove('active')

    profile.classList.remove('hide');
    wallet.classList.add('hide');
    dmenu.classList.add('hide')
    transaction.classList.add('hide');
    home.classList.add('hide');
}
function walletAlone() {
    profilebtn.classList.remove('active')
    homebtn.classList.remove('active')
    walletbtn.classList.add('active')
    menubtn.classList.remove('active')
    historybtn.classList.remove('active')

    profile.classList.add('hide');
    wallet.classList.remove('hide');
    dmenu.classList.add('hide')
    transaction.classList.add('hide');
    home.classList.add('hide');
}

function menuAlone() {
    profilebtn.classList.remove('active')
    homebtn.classList.remove('active')
    walletbtn.classList.remove('active')
    menubtn.classList.add('active')
    historybtn.classList.remove('active')

    profile.classList.add('hide');
    wallet.classList.add('hide');
    dmenu.classList.remove('hide')
    transaction.classList.add('hide');
    home.classList.add('hide');
}

function historyAlone() {
    profilebtn.classList.remove('active')
    homebtn.classList.remove('active')
    walletbtn.classList.remove('active')
    menubtn.classList.remove('active')
    historybtn.classList.add('active')

    profile.classList.add('hide');
    wallet.classList.add('hide');
    dmenu.classList.add('hide')
    transaction.classList.remove('hide');
    home.classList.add('hide');
}