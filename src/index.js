//adding headder
class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <header class="main-header">
      <!-- navigation -->
      <div class="container-xl container">
          <nav class="main-navbar navbar navbar-expand-lg navbar-light ">
  
              <a class="navbar-brand" href="#">The Authentic Corner</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse"
                  data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                  aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
  
              <div class="collapse navbar-collapse text-center text-xl-start justify-content-end"
                  id="navbarSupportedContent">
                  <ul class="navbar-nav ">
                      <li class="nav-item ">
                          <a class="nav-link  mr-lg-5 data-link" href="index.html">Home <span
                                  class="sr-only">(current)</span></a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link mr-lg-5 data-link" href="about.html">About</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link mr-lg-5 data-link" href="contact.html">Contact</a>
                      </li>
                  </ul>
                  <form class="d-flex justify-content-center form-inline my-2 my-lg-0">
                      <input class="form-control " type="search" placeholder="Search" aria-label="Search">
                  </form>
          </nav>
      </div>
      <hr class="m-0">
  </header>
          `
    }
  }

customElements.define('main-header', Header);
console.log("index");
