export function mensaje(message, type) {
    Toastify({
        text: message,
        duration: 6000,
        //destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: (type != 'success') ? "red" : "green",
        },
        //onClick: function(){} // Callback after click
    }).showToast();
}