class CustomNav extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
        
        <nav class="navbar navbar-custom navbar-light fixed-top shadow" id="navbar">
            <div class="container">
                <!-- <a class="navbar-brand" href="/"><img class="img-logo" width="45"  src="/assets/images/paper-boat.svg" alt="Takacs & Verheijden"/></a> -->

                <a class="navbar-brand" href="/en/index.html">Takacs <span class="text-color-secondary"> &amp;</span> Verheijden</a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/en/index.html">Home</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="/en/leadership.html" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Academic Leadership
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="/en/leadership.html#developing-leadership">Developing Leadership</a></li>
                                <li><a class="dropdown-item" href="/en/leadership.html#intervision">Intervision</a></li>
                                <li><a class="dropdown-item" href="/en/leadership.html#coaching">Coaching</a></li>
                                <li><a class="dropdown-item" href="/en/leadership.html#advice">Advice</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/en/about-us.html">About Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/en/contact.html">Contact</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/index.html">NL</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
      
      `;
  }
}

window.customElements.define("custom-nav", CustomNav);
