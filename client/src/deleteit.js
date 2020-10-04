import React from 'react';

export default class Deleteit extends React.Component{
    render(){
        return(
            <div>
             {/* <!-- Navbar --> */}
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar">
    <div class="container">

      {/* <!-- Brand --> */}
      <a class="navbar-brand" href="https://mdbootstrap.com/docs/jquery/" target="_blank">
        <strong>MDB</strong>
      </a>

      {/* <!-- Collapse --> */}
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      {/* <!-- Links --> */}
      <div class="collapse navbar-collapse" id="navbarSupportedContent">

        {/* <!-- Left --> */}
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://mdbootstrap.com/docs/jquery/" target="_blank">About MDB</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://mdbootstrap.com/docs/jquery/getting-started/download/"
              target="_blank">Free download</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://mdbootstrap.com/education/bootstrap/" target="_blank">Free tutorials</a>
          </li>
        </ul>

        {/* <!-- Right --> */}
        <ul class="navbar-nav nav-flex-icons">
          <li class="nav-item">
            <a href="https://www.facebook.com/mdbootstrap" class="nav-link" target="_blank">
              <i class="fab fa-facebook-f"></i>
            </a>
          </li>
          <li class="nav-item">
            <a href="https://twitter.com/MDBootstrap" class="nav-link" target="_blank">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li class="nav-item">
            <a href="https://github.com/mdbootstrap/bootstrap-material-design"
              class="nav-link border border-light rounded" target="_blank">
              <i class="fab fa-github mr-2"></i>MDB GitHub
            </a>
          </li>
        </ul>

      </div>

    </div>
  </nav>
  {/* <!-- Navbar --> */}

  {/* <!-- Full Page Intro --> */}
  <div class="view full-page-intro"
    style={{backgroundImage:"url('https://mdbootstrap.com/img/Photos/Others/images/78.jpg')",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>

    {/* <!-- Mask & flexbox options--> */}
    <div class="mask rgba-black-light d-flex justify-content-center">

      {/* <!-- Content --> */}
      <div class="container">

        {/* <!--Grid row--> */}
        <div class="basic-content row wow fadeIn">

          {/* <!--Grid column--> */}
          <div class="col-md-6 mb-4 white-text text-center text-md-left">

            <h1 class="display-4 font-weight-bold">Learn Bootstrap 4 with MDB</h1>

            <hr class="hr-light" />

            <p>
              <strong>Best & free guide of responsive web design</strong>
            </p>

            <p class="mb-4 d-none d-md-block">
              <strong>The most comprehensive tutorial for the Bootstrap 4. Loved by over 500 000 users. Video and
                written versions
                available. Create your own, stunning website.</strong>
            </p>

            <a target="_blank" href="https://mdbootstrap.com/education/bootstrap/" class="btn btn-indigo btn-lg">Start
              free tutorial
              <i class="fas fa-graduation-cap ml-2"></i>
            </a>

          </div>
          {/* <!--Grid column--> */}

          {/* <!--Grid column--> */}
          <div class="col-md-6 col-xl-5 mb-4">

            {/* <!--Card--> */}
            <div class="card">

              {/* <!--Card content--> */}
              <div class="card-body">

                {/* <!-- Form --> */}
                <form name="">
                  {/* <!-- Heading --> */}
                  <h3 class="dark-grey-text text-center">
                    <strong>Write to us:</strong>
                  </h3>
                  <hr/>

                  <div class="md-form">
                    <i class="fas fa-user prefix grey-text"></i>
                    <input type="text" id="form3" class="form-control"/>
                    <label for="form3">Your name</label>
                  </div>
                  <div class="md-form">
                    <i class="fas fa-envelope prefix grey-text"></i>
                    <input type="text" id="form2" class="form-control" />
                    <label for="form2">Your email</label>
                  </div>

                  <div class="text-center">
                    <button class="btn btn-indigo">Send</button>
                    <hr/>
                    <fieldset class="form-check">
                      <input type="checkbox" class="form-check-input" id="checkbox1" />
                      <label for="checkbox1" class="form-check-label dark-grey-text">Subscribe me to the
                        newsletter</label>
                    </fieldset>
                  </div>

                </form>
                {/* <!-- Form --> */}

              </div>

            </div>
            {/* <!--/.Card--> */}

          </div>
          {/* <!--Grid column--> */}

        </div>
        {/* <!--Grid row--> */}

        <div class="row feature-section justify-content-center align-items-center wow fadeInUp">
          <div class="col-12">
            <h2 class="text-center text-light">What's that?</h2>
          </div>
          <div class="col-12 mx-0 px-0 justify-content-center text-center feature-container">
            <div class="row h-100 justify-content-center align-items-center mx-0">
              <div class="col-12 feature-container-inside">
                <div class="feature-container-inside-text text-light">
                  A COOL hidden message!
                </div>
              </div>
            </div>
            <div class="row h-100 justify-content-center mx-0">

              <div class="feature-trigger-outline ">

                <a class="btn-floating btn-lg btn-success d-block feature-trigger mx-0 my-0 " id="featureDiscovery"><i
                    class="fas fa-bolt"></i></a>
              </div>
            </div>
          </div>
        </div>

      </div>
      {/* <!-- Content --> */}


    </div>
    {/* <!-- Mask & flexbox options--> */}

  </div>
  {/* <!-- Full Page Intro -->yy */}
  </div>
          
        )
    }
}