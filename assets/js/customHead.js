class CustomHead extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">

                <title>Takacs &amp; Verheijden - ${this.getAttribute('page')}</title>

                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
                <link rel="stylesheet" href="assets/css/master.css">

                <meta name="description" content="">
                <meta name="keywords" content="">

                <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/favicons/apple-touch-icon.png">
                <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicons/favicon-32x32.png">
                <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicons/favicon-16x16.png">
                <link rel="manifest" href="/assets/images/favicons/site.webmanifest">
                <link rel="mask-icon" href="/assets/images/favicons/safari-pinned-tab.svg" color="#5bbad5">
                <link rel="shortcut icon" href="/assets/images/favicons/favicon.ico">
                <meta name="msapplication-TileColor" content="#00aba9">
                <meta name="msapplication-config" content="/assets/images/favicons/browserconfig.xml">
                <meta name="theme-color" content="#ffffff">

            </head>
        
        `;
    }
}

window.customElements.define('custom-head', CustomHead);