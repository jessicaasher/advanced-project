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
loading.classList +=
setTimeout(() => {
    console.log('it worked 1')
}, 500)

}