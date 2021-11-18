class CustomNav extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        
        <nav class="navbar navbar-custom navbar-light fixed-top shadow" id="navbar">
            <div class="container">
                <!-- <a class="navbar-brand" href="/"><img class="img-logo" width="45"  src="/assets/images/paper-boat.svg" alt="Takacs & Verheijden"/></a> -->
                <a class="navbar-brand" href="/">Takacs <span class="text-color-secondary"> &amp;</span> Verheijden</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="/leiderschap-in-de-academie.html" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Leiderschap in de academie
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="/leiderschap-in-de-academie.html#leiderschapsontwikkeling">Leiderschapsontwikkeling</a></li>
                            <li><a class="dropdown-item" href="/leiderschap-in-de-academie.html#coaching">Coaching</a></li>
                            <li><a class="dropdown-item" href="/leiderschap-in-de-academie.html#verandertrajecten">Verandertrajecten</a></li>
                            <li><a class="dropdown-item" href="/leiderschap-in-de-academie.html#intervisie">Intervisie</a></li>
                            <li><a class="dropdown-item" href="/leiderschap-in-de-academie.html#samenwerken-in-groepen">Samenwerken in groepen</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/over-ons.html">Over ons</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/contact.html">Contact</a>
                    </li>
                
                </ul>
            </div>
            </div>
        </nav>
      
      `;
    }
}

window.customElements.define('custom-nav', CustomNav);