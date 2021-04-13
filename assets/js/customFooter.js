class CustomFooter extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <footer>
            <div class="container padding-y">
                <div class="row justify-content-start">
                    <div class="col-lg-4">
                        <h3 class="font-secondary">Takacs <span class="text-color-secondary"> &amp;</span> Verheijden</h3>
                        <p>Inspirerende quote van pak hem beet 30 woorden. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore maiores, corporis modi natus eius libero. Nisi, asperiores totam. Eius, accusamus.</p>
                    </div>
                    <div class="col-lg-4">
                        <h3 class="font-secondary">Sitemap</h3>
                        <p><i class="fas fa-play text-color-secondary"></i><a class="ps-2" href="/">Home</a></p>
                        <p><i class="fas fa-play text-color-secondary"></i><a class="ps-2" href="/contact.html">Contact</a></p>
                        <p><i class="fas fa-play text-color-secondary"></i><a class="ps-2" href="/over-ons.html">Over Ons</a></p>
                        <p><i class="fas fa-play text-color-secondary"></i><a class="ps-2" href="/coaching.html">Coaching</a></p>
                        <p><i class="fas fa-play text-color-secondary"></i><a class="ps-2" href="/intervisie.html">Intervisie</a></p>
                        <p><i class="fas fa-play text-color-secondary"></i><a class="ps-2" href="/verandertrajecten.html">Verandertrajecten</a></p>
                        <p><i class="fas fa-play text-color-secondary"></i><a class="ps-2" href="/leiderschapsontwikkeling.html">Leiderschapsontwikkeling</a></p>
                        <p><i class="fas fa-play text-color-secondary"></i><a class="ps-2" href="/samenwerken-in-groepen.html">Samenwerken in groepen</a></p>

                    </div>
                    <div class="col-lg-4">
                        <h3 class="font-secondary">Contact</h3>
                        <p>BARBARA TAKACS</p>
                        <p><a href="tel:+31624156731">+ 31 6 241 56731</a></p>
                        <p><a href="mailto:mail@barbaratakacs.nl">mail@barbaratakacs.nl</a></p>
                        <p>Molenaerstraat 18</p>
                        <p class="pb-2">2023 EK Haarlem</p>
                         
                         
                        <p>BEN VERHEIJDEN</p>
                        <p><a href="tel:+31624667064">+ 31 6 2466 7064</a></p>
                        <p><a href="mailto:benverheijden@me.com">benverheijden@me.com</a></p>
                        <p>Simon Carmiggeltstraat 56</p>
                        <p>1822 MA Alkmaar</p>
                    </div>
                </div>
            </div>
        </footer>

      
      `;
    }
}

window.customElements.define('custom-footer', CustomFooter);