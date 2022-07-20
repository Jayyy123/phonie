// onload(alert('loaded'))

// window.onload()


const logos = document.querySelector('.images'),
        countryLogo = document.querySelector('.country'),
        providerLogo = document.querySelector('.provider'),
        select = document.querySelector('select'),
        option = select.options[select.selectedIndex];


const changeFlag = (code) => {
    const countryLogo = document.querySelector('.country'),
    providerLogo = document.querySelector('.provider');
    switch(code){
        case 'ng':
            logos.style.visibility = 'visible'
            countryLogo.style.backgroundImage = 'url(https://cdn.britannica.com/68/5068-004-72A3F250/Flag-Nigeria.jpg)';
        break
        case 'gh':
            logos.style.visibility = 'visible'
            countryLogo.style.backgroundImage = 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Ghana.svg/255px-Flag_of_Ghana.svg.png)';
        break
        case 'ky':
            logos.style.visibility = 'visible'
            countryLogo.style.backgroundImage = 'url(https://cdn.britannica.com/15/15-004-B5D6BF80/Flag-Kenya.jpg)';
        break
        case 'uk':
            logos.style.visibility = 'visible'
            countryLogo.style.backgroundImage = 'url(https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png)';
        break
        case 'us':
            logos.style.visibility = 'visible'
            countryLogo.style.backgroundImage = 'url(https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg)';
        break
    }
}

const changeProvider = () => {
    const number = document.querySelector('.number'),
        logos = document.querySelector('.images'),
        countryLogo = document.querySelector('.country'),
        providerLogo = document.querySelector('.provider'),
        box = document.querySelector('.suggestions'),
        message = document.querySelector('.slideshow'),
        mtn = ['0703','0706','0803','0806','0810','0813','0814','0816','0903','0906','0913'],
        etisalat = ['0809','0817','0818','0908','0909'],
        airtel = ['0701','0708','0802','0808','0812','0902','0907','0901','0912'],
        glo = ['0705','0805','0807','0811','0815','0905'];

    setTimeout(() => {
        message.style.visibility = 'hidden'
        message.classList.remove('animation')
    }, 1500);

    if(number.value === '0'){
        number.value = '';
        message.style.visibility = 'visible'
        message.classList.add('animation')
    }
    
    if(number.value.length === 0){
        // number.style.borderBottomColor = '#6658d3';
    }else if(number.value.length === 9){
        number.style.borderBottomColor = 'green';
    }else if(number.value.length === 10){
        number.value = number.value;
        message.style.visibility = 'visible'
        message.innerHTML = 'Number cannot be more than 10 digits'
        message.classList.add('animation')
    }else{

        if(number.value.length  > 0 && number.value.length < 3){
            box.style.visibility = 'visible'
            if(number.value === '70'){
                box.innerHTML = '<p>0703</p><p>0706</p><p>0701</p><p>0704</p>'
            }else if(number.value === '90'){
                box.innerHTML = '<p>0907</p><p>0903</p><p>0908</p><p>0902</p>'
            }else{
                box.innerHTML = '<p>0803</p><p>0806</p><p>0802</p><p>0809</p>'
            }
        }

        if(number.value.length === 3){
            const provider  = number.value
            box.style.visibility = 'hidden'

            let line;

            mtn.forEach(digits => '0' + provider === digits && (line = 'mtn'))
            etisalat.forEach(digits => '0' + provider === digits && (line = 'etisalat'))
            airtel.forEach(digits => '0' + provider === digits && (line = 'airtel'))
            glo.forEach(digits => '0' + provider === digits && (line = 'glo'))

            line === undefined && (line = null);

            switch(line){
                case 'mtn':
                    logos.style.visibility = 'visible'
                    providerLogo.style.backgroundImage = 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/New-mtn-logo.jpg/800px-New-mtn-logo.jpg)';
                break;
                case 'etisalat':
                    logos.style.visibility = 'visible'
                    providerLogo.style.backgroundImage = 'url(https://cdn.punchng.com/wp-content/uploads/2017/07/19170207/9Mobile-Telecom-Logo.jpg)';
                    
                break;
                case 'airtel':
                    logos.style.visibility = 'visible'
                    providerLogo.style.backgroundImage = 'url(https://seeklogo.com/images/A/airtel-logo-439F62AEA0-seeklogo.com.png)';
                break;
                case 'glo':
                    logos.style.visibility = 'visible'
                    providerLogo.style.backgroundImage = 'url(https://pbs.twimg.com/profile_images/2852304637/0d37ecc552a6ac49f9a80e6069591159_400x400.jpeg)';
                break;
            }
        }

        number.style.borderBottomColor = 'red';
    }
}


const countryChange = () => {
    const select = document.querySelector('select'),
    option = select.options[select.selectedIndex];
    switch(option.value){
        case 'ng':
            // alert(option.text);
            changeFlag('ng');
        break
        case 'gh':
            changeFlag('gh');
        break
        case 'ky':
            changeFlag('ky');
        break
        case 'uk':
            changeFlag('uk');
        break
        case 'us':
            changeFlag('us');
        break
    }
}

countryChange()
changeProvider()

