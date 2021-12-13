$().ready(function () {

    $('#FooterLink').append($(
        '<footer class="text-center d-flex flex-wrap justify-content-center footer align-content-center">' +
        // Privacy Policy
        '<div class="ms-5">' +
            '<a class="link-dark" aria-current="page" href="#">Privacy Policy</a>' +
        '</div>' +

        // Copyright
        '<div class="flex-fill">' +
            '© 2021, BoardGameGaGa.com, Inc. or its affiliates' +
        '</div>' +

        // Terms of Service
        '<div class="me-5">' +
            '<a class="link-dark" aria-current="page" href="#">Terms of Service</a>' +
        '</div>'
      ))
})

