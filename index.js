// 

// 

// 

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')

    emailjs
        .sendForm(
            'service_g6f3t9u',
            'template_stts2vc',
            event.target,
            '1WE98dJnq0vWLreyt'
        ).then() ==> {
            loading.classList.remove("modal__overlay--visible")
            success.classList += " modal__overlay--visible"
        }
}).catch(() => {
    loading.classList.remove("modal__overlay--visible")
})



loading.classList += " modal__overlay--visible"
setTimeout(() => {
   
    console.log('it worked 1')
}, 1000);

}