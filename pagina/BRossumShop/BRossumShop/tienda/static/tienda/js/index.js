$(document).ready(function () {
    num = 1

    for (let i = 1; i <= 18; i++) {
        if (num <= 6) {
            $.get("https://fakestoreapi.com/products/" + num, function (data) {
                indice = extraer(data.title)
                $(".cc1").append(
                    "<div class='card me-3 mb-3 d-flex align-items-center justify-content-center'>"
                    + "<img src='" + data.image + "' class='card-img-top' alt='...'>"
                    + "<div class='card-body no-padding'>"
                    + "<p class='card-text'>" + (data.title).substr(0, indice) + "</p>"
                    + "</div>"
                    + "</div>");

            });
        }
        if (num > 6 && num <= 12) {
            $.get("https://fakestoreapi.com/products/" + num, function (data) {
                indice = extraer(data.title)
                $(".cc2").append(
                    "<div class='card me-3 mb-3'>"
                    + "<img src='" + data.image + "' class='card-img-top' alt='...'>"
                    + "<div class='card-body no-padding'>"
                    + "<p class='card-text'>" + (data.title).substr(0, indice) + "</p>"
                    + "</div>"
                    + "</div>");
            });
        }
        if (num > 12) {
            $.get("https://fakestoreapi.com/products/" + num, function (data) {
                indice = extraer(data.title)
                $(".cc3").append(
                    "<div class='card me-3 mb-3'>"
                    + "<img src='" + data.image + "' class='card-img-top' alt='...'>"
                    + "<div class='card-body no-padding'>"
                    + "<p class='card-text'>" + (data.title).substr(0, indice) + "</p>"
                    + "</div>"
                    + "</div>");

            });

        }
        num++
        if (num % 20 == 1) num = 1


    }

});

function extraer(texto) {
    indice = 0;
    espacios = 0;
    for (let i = 0; i <= texto.length; i++) {
        console.log(texto[i]);
        if (texto[i] == ' ') {
            espacios++
            if (espacios == 3) {
                indice = i;
                break
            }
        }
    }
    if (espacios == 2) {
        indice = texto.length;
    }

    return indice
}