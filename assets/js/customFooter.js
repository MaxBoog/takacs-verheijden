class CustomFooter extends HTMLElement {

    
    constructor() {
        const datum = new Date().getFullYear().toString();
        super();
        this.innerHTML = `
        <footer>
            <div class="container padding-y footer">
                <div class="row justify-content-start">
                    <div class="col-lg-4">
                        <h3 class="font-secondary pt-5 pt-md-0">Takacs <span class="text-color-secondary"> &amp;</span> Verheijden</h3>
                        <p class="footer-quote d-flex mx-auto">Wij zijn zelf geen wetenschappers, maar we hebben wel genoeg ervaring om een andere invalshoek te kunnen bieden. Aan goede plannen en intenties ontbreekt het meestal niet. Wel blijkt het lastig om voornemens ook werkelijk uit te voeren. Soms helpt een flinke duw, een echt gesprek, of een paradoxale interventie om het bootje uit het riet te krijgen.</p>
                    </div>
                    <div class="col-lg-4">
                        <h3 class="font-secondary pt-5 pt-md-0">Sitemap</h3>
                        <p><i class="fas fa-chevron-right text-color-secondary"></i><a class="ps-2" href="/">Home</a></p>
                        <p><i class="fas fa-chevron-right text-color-secondary"></i><a class="ps-2" href="/leiderschap-in-de-academie.html">Leiderschap in de academie</a></p>
                        <p><i class="fas fa-chevron-right text-color-secondary"></i><a class="ps-2" href="/over-ons.html">Over Ons</a></p>
                        <p><i class="fas fa-chevron-right text-color-secondary"></i><a class="ps-2" href="/contact.html">Contact</a></p>

                    </div>
                    <div class="col-lg-4">
                        <h3 class="font-secondary pt-5 pt-md-0">Contact</h3>
                        <p>BARBARA TAKACS</p>
                        <p><a href="tel:+31624156731">+ 31 6 241 56731</a></p>
                        <p><a href="mailto:mail@barbaratakacs.nl">mail@barbaratakacs.nl</a></p>
                        <p>Molenaerstraat 18</p>
                        <p class="pb-2">2023 EK Haarlem</p>
                    </div>
                </div>
                <hr/>
                <div class="row">
                    <div class="col">
                        <div class="copyright">
                            <p>&copy; ${datum} - <a href="www.takacs-verheijden.nl">takacs-verheijden.nl</a></p>
                            <p class="pt-2 dbw">a design by: <a href="www.delbellowebdesign.nl">delbellowebdesgin.nl</a></p>
                            <p class="icon-note pt-2">icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>
                        </div>
                    </div>
                </div>
            </div>
            
        </footer>

      
      `;
    }
}

window.customElements.define('custom-footer', CustomFooter);