const userInput = document.getElementById('user-input')
document.getElementById('login-btn').addEventListener('click', () => {
    document.getElementById('popup').style.display = 'unset'
})

document.getElementById('mybiz-btn').addEventListener('click', () => {
    document.getElementById('personal-btn').className = 'personal'
    document.getElementById('mybiz-btn').className = 'mybiz-active'
    document.getElementById('or-el').innerText = 'OR USE'
    document.getElementById('terms-el').innerHTML = `By proceeding, you agree to MakeMyTrip'sand <a id="term-a" href="#">T&Cs</a>and<a id="term-a-mybiz" href="#">Privacy</a>`
    document.getElementById('g-text').innerText = 'Google Business Account'
    document.getElementById('input-label').innerText = 'Work Email'
    document.getElementById('user-input').ariaPlaceholder = 'Enter your work email id'
    document.getElementById('term-a').style.color = 'rgb(218, 134, 24)'
    document.getElementById('user-input').style.border = '0.1px solid rgba(218, 134, 24, 0.322)'
    if (userInput.value !== '') {
        document.getElementById('cont-btn').style.cursor = 'pointer'
        document.getElementById('cont-btn').style.backgroundImage = 'linear-gradient(to right, rgb(218, 134, 24), rgb(250, 52, 102))'
    } else {
        document.getElementById('cont-btn').style.backgroundColor = 'rgb(214, 214, 214)'
    }
})

document.getElementById('personal-btn').addEventListener('click', () => {
    document.getElementById('mybiz-btn').className = 'mybiz'
    document.getElementById('personal-btn').className = 'personal-active'
    document.getElementById('or-el').innerText = 'Or Login/Signup With'
    document.getElementById('terms-el').innerHTML = `By proceeding, you agree to MakeMyTrip's and <a id="term-a" href="#">Privacy Policy</a>,<a id="term-a" href="#">User Agreement</a>and<a id="term-a" href="#">T&Cs</a>`
    document.getElementById('g-text').innerText = 'Login with Google'
    document.getElementById('input-label').innerText = 'Email or Mobile Number'
    document.getElementById('user-input').ariaPlaceholder = 'Enter email or mobile numeber'
    document.getElementById('term-a').style.color = 'rgb(0, 101, 195)'
    document.getElementById('user-input').style.border = '0.1px solid rgba(0, 0, 0, 0.322)'
    if (userInput.value !== '') {
        document.getElementById('cont-btn').style.backgroundColor = 'rgb(0, 101, 195)'
        document.getElementById('cont-btn').style.cursor = 'pointer'
    } else {
        document.getElementById('cont-btn').style.backgroundColor = 'rgb(214, 214, 214)'
    }
})


userInput.addEventListener('change', () => {
    console.log('bsdk')
    if (userInput.value !== '' || userInput.value != '') {
        if (document.getElementById('personal-btn').className === 'personal-active') {
            document.getElementById('cont-btn').style.backgroundColor = 'rgb(0, 101, 195)'
            document.getElementById('cont-btn').style.cursor = 'pointer'
        } else {
            document.getElementById('cont-btn').style.cursor = 'pointer'
            document.getElementById('cont-btn').style.backgroundImage = 'linear-gradient(to right, rgb(218, 134, 24), rgb(250, 52, 102))'
        }
    }
})