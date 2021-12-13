$().ready(function () {

    $('#HeaderLink').append($(
        '<nav class="navbar navbar-expand-lg">' +
            '<div class="container-fluid">' +
            // Logo Image
              '<a class="navbar-brand col-md-4 link-dark" href="dashboard.html">' +
                '<img src="img/bgggLogoText.png" class="titleLogo" alt="Responsive image">' +
              '</a>' +

            // Search Bar
              '<div class="col-md-4">' +
                '<div class="d-flex flex-row">' +
                // Categories
                    '<select id = "SearchBar-Filter" name="SearchBar-Filter" class="form-select search-menu SearchBar-Filter">' +
                    '</select>' +
                //Search Bar and button
                    '<input id = "SearchBar-string" name="SearchBar-string" class="form-control search-bar" type="search" placeholder="Search" aria-label="Search">' +
                    '<button class="btn btn-primary" type="submit">Search</button>' +
                '</div>' +
            '</div>' +
            // Login and Register Buttons
              '<div class="collapse navbar-collapse " id="navbarSupportedContent">' +
                '<ul class="navbar-nav mb-2 mb-lg-0 ms-auto">' +
                  '<li class="nav-item card secondary_color rounded-pill">' +
                    '<button type="button" class="nav-link active link-dark btn" data-bs-toggle="modal" data-bs-target="#loginModal">Login</button>' +

                  '</li>' +
                  '<li class="nav-item card ms-2 secondary_color rounded-pill">' +
                    '<button type="button" class="nav-link active link-dark btn" data-bs-toggle="modal" data-bs-target="#registerModal">SignUp</button>' +

                  '</li>' +
                '</ul>' +
              '</div>' +
    
            '</div>' +
          '</nav>' +

          '<div class="modal" id="registerModal" tabindex="-1" aria-hidden="true">' +
          '<div class="modal-dialog modal-dialog-centered">' +
            '<div class="modal-content" style="border-radius: 40px;">' +
              '<div class="modal-body px-4 py-5">' +
                '<div class="p-3 shadow text-center" style="border-radius: 10px; background-color: #89BCC4;">' +
                  '<h4>Register</h4>' +
                '</div>' +
              '</div>' +
              '<div class="px-4 pb-5">' +
                '<form id="RegisterForm" class="pb-5">' +
                  '<div>' +
                    '<label for="username_register" class="form-label">Username</label>' +
                    '<input type="text" class="form-control check-validity-event" id="username_register" pattern="[a-zA-Z0-9]{1,32}" required>' +
                  '</div>' +
                  '<br>' +
                  '<div>' +
                    '<label for="email_register" class="form-label">Email</label>' +
                   '<input type="password" class="form-control check-validity-event" id="email_register" required>' +
                  '</div>' +
                  '<br>' +
                  '<div>' +
                    '<label for="password_register" class="form-label">Password</label>' +
                    '<input type="password" class="form-control check-validity-event" id="password_register" pattern="[a-zA-Z0-9#?!@$ %^&*-]{1,32}" required>' +
                  '</div>' +
                  '<br>' +
                  '<div>' +
                    '<div class="form-check d-flex align-items-center justify-content-center">' +
                      '<input class="form-check-input check-validity-event mx-2" type="checkbox" value="" id="flexCheckDefault" required>' +
                      '<label class="form-check-label" for="flexCheckDefault">' +
                           'I agree to the <abbr class="dummyLink" title="Dummy link">Terms and Conditions</abbr>' +
                      '</label>' +
                    '</div>' +
                  '</div>' +
                '</form>' +
    
                '<div class="py-5 container justify-content-center col-md-6">' +
                  '<div class="row py-1">' +
                      '<button type="button" class="btn btn-primary" onclick="register()">Register</button>' +
                 '</div>' +
                  '<div class="row py-1">' +
                    '<button type="button" class="btn btn-secondary" onclick="swapRegisterToLogin()">Login</button>' +
                  '</div>' +
                '</div>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>' +

        '<div class="modal" id="loginModal" tabindex="-1" aria-hidden="true" >' +
        '<div class="modal-dialog modal-dialog-centered">' +
          '<div class="modal-content" style="border-radius: 40px;">' +
            '<div class="modal-body px-4 py-5">' +
              '<div class="p-3 shadow text-center" style="border-radius: 10px; background-color: #89BCC4;">' +
                '<h4>Login</h4>' +
              '</div>' +
            '</div>' +
            '<div class="px-4 pb-5">' +
              '<form id="LoginForm" class="pb-5">' +
                '<label for="username_login" class="form-label">Username</label>' +
                '<input type="text" class="form-control check-validity-event" id="username_login" pattern="[a-zA-Z0-9]{1,32}" required>' +
                '<br>' +
                '<label for="password_login" class="form-label">Password</label>' +
                '<input type="password" class="form-control check-validity-event" id="password_login" pattern="[a-zA-Z0-9#?!@$ %^&*-]{1,32}" required>' +
              '</form>' +
  
              '<div class="py-5 container justify-content-center col-md-6">' +
                '<div class="row py-1">' +
                    '<button type="button" class="btn btn-primary" onclick="login()">Login</button>' +
                '</div>' +
                '<div class="row py-1">' +
                  '<button type="button" class="btn btn-secondary" onclick="swapLoginToRegister()">Register</button>' +
                '</div>' +
  
              '</div>' +
              '<div class="pb-3 container justify-content-center col-md-6">' +
                '<div class="row">' +
                  '<button type="button" class="btn btn-secondary">Forgot Password?</button>' +
                '</div>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>'

      ))
})