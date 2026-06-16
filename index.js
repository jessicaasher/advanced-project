// 

// 

// 

function contact(event) {
    event.preventDefault();
    emailjs
        .sendForm(
            'service_g6f3t9u',
            'template_stts2vc',
            event.target,
            '1WE98dJnq0vWLreyt'
        ).then()
}