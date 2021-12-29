'use strict';

//template container
const opts = document.querySelectorAll('.opt');

//Order Printer templates logo substitution
const btnUrl = document.querySelector('#btnUrl');
const logoUrl = document.querySelector('#logoUrl');
const imgSrc = document.querySelectorAll('.logo-placeholder')

//Color input
let primaryColor = this.document.querySelector('#primaryColor');

//logo width
const logoWidth = document.querySelector('#logoWidth');
const rangeWidth = document.querySelector('#rangeWidth');

//message
const tempTextarea = document.querySelector('#message');
const messagePlaceholder = document.querySelectorAll('.message-placeholder')


rangeWidth.addEventListener('change', function () {
    logoWidth.value = rangeWidth.value;
})

//Removing unsupported attributes in liquid templates
const attributeRemover = function (selector, attribute) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
        el.removeAttribute(attribute);
    })
}


//set templates
btnUrl.addEventListener('click', function () {
    if (logoUrl.value) {
        imgSrc.forEach(img => img.src = logoUrl.value);
        messagePlaceholder.forEach(msg => msg.innerText = tempTextarea.value);

        opts.forEach(opt => {
            opt.firstElementChild.innerHTML = "";
            opt.firstElementChild.innerHTML =
                `.opt b{color:${primaryColor.value};} img.logo-placeholder {width: ${logoWidth.value}px;}`;
        })
        attributeRemover('link', 'wfd-invisible')
        attributeRemover('style', 'wfd-invisible')

        Swal.fire({
            icon: "success",
            title: "¡Plantillas listas!",
            position: "center",
            timer: 3000,
            showConfirmButton: true
        });

    } else {
        Swal.fire({
            icon: "warning",
            title: "Ingresa la URL de tu logo",
            position: "center",
            timer: 3000,
            showConfirmButton: true
        });
    }
})

//Color input

//Order printer template copy function

const opsCopyBtn = document.querySelectorAll('.ops__copy-btn');
const liquidTemplates = document.querySelectorAll('.opt__liquid');

const copyToClip = function (str) {
    function listener(e) {
        e.clipboardData.setData("text/html", str);
        e.clipboardData.setData("text/plain", str);
        e.preventDefault();
    }
    document.addEventListener("copy", listener);
    document.execCommand("copy");
    document.removeEventListener("copy", listener);

    Swal.fire({
        icon: "success",
        title: "Código copiado",
        toast: true,
        position: "top-end",
        timer: 2000,
        showConfirmButton: false,
    });
};

opsCopyBtn.forEach((btn, i) => {
    opsCopyBtn[i].addEventListener('click', function () {
        copyToClip(liquidTemplates[i].innerHTML)
    })
})


