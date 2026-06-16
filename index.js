// 

// 

// 

// function contact(event) {
//     event.preventDefault();
//     emailjs
//         .sendForm(
//             'service_g6f3t9u',
//             'template_stts2vc',
//             event.target,
//             '1WE98dJnq0vWLreyt'
//         ).then() ==> {
//             console.log('this worked1')
//         }
// })
const loading = document.querySelector('.modal__overlay--loading')
const success = document.querySelector('.modal__overlay--success')
loading.classList += " modal__overlay--visible"
setTimeout(() => {
    loading.classList.remove("modal__overlay--visible")
    console.log('it worked 1')
}, 1000);

}