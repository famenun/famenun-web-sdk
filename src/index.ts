export const init = (website: string) => {
    let domain = new URL(window.location.href).host;
    fetch(`https://api.famenun.com/getWebsite?website=${website}&domain=${domain}`)
        .then(res => res.json())
        .then(response => {
            if (!response.error) {
                const websiteObject = response.data;
                const url = `https://famenun.com/run/${websiteObject.ap}?entry=${encodeURIComponent(websiteObject.pa)}`;

                var style = document.createElement("style");
                style.innerHTML = "*{margin: 0px; padding: 0px;} html, body {width: 100%; height: 100%; overflow:hidden; }";
                document.head.appendChild(style);

                var iframe: any = document.createElement("iframe");
                iframe.id = `website-${website}`;
                iframe.style = "width: 100%; height: 100%; position: absolute; top: 0; left: 0; z-index: 9999;";
                iframe.src = url;
                iframe.setAttribute("frameborder", "0");
                iframe.setAttribute("hspace", "0");
                iframe.setAttribute("vspace", "0");
                document.body.append(iframe);

            } else {
                console.log(response.message);
            }
        }).catch(error => console.log(error));
}

(function () {
    try {
        var win: any = window;
        win.__famenun__ = {
            init: init
        };
    } catch (e) { }
})();
