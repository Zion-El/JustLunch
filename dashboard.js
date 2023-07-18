    const home = document.getElementById('home')
    const wallet = document.getElementById('wallet')
    const transaction = document.getElementById('transaction')
    const profile = document.getElementById('profile')

    const homebtn = document.getElementById('homebtn')
    const walletbtn = document.getElementById('walletbtn')
    const historybtn = document.getElementById('historybtn')
    const profilebtn = document.getElementById('profilebtn')


function homeAlone() {


    homebtn.classList.add('active')
    walletbtn.classList.remove('active')
    profilebtn.classList.remove('active')
    // historybtn.classList.remove('active')

    home.classList.remove('hide');
    wallet.classList.add('hide');
    // transaction.classList.toggle('hide');
    profile.classList.add('hide');
}
function profileAlone() {

    profilebtn.classList.add('active')
    homebtn.classList.remove('active')
    walletbtn.classList.remove('active')
    
    // historybtn.classList.remove('active')

    profile.classList.remove('hide');
    wallet.classList.add('hide');
    // transaction.classList.toggle('hide');
    home.classList.add('hide');
}
function walletAlone() {

    profilebtn.classList.remove('active')
    homebtn.classList.remove('active')
    walletbtn.classList.add('active')
    
    // historybtn.classList.remove('active')

    profile.classList.add('hide');
    wallet.classList.remove('hide');
    // transaction.classList.toggle('hide');
    home.classList.add('hide');
}