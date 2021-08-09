function coderunfunc(cls, ind) {
    let html = document.querySelector(`.${cls} .html-code-run-${ind} code`);
    let css = document.querySelector(`.${cls} .css-code-run-${ind} code`);
    let js = document.querySelector(`.${cls} .javascript-code-run-${ind} code`);
    html.setAttribute('contenteditable','true')
    css.setAttribute('contenteditable','true')
    js.setAttribute('contenteditable','true')
    js = `const originalLog = console.log;
    console.log = (...args) => {
      parent.window.postMessage({ type: 'log', args: args }, '*')
      originalLog(...args)
    };` + js.textContent;
    let cdo = `${html.textContent} <style>${css.textContent}</style> <script>${js}</script>`
    var iframe = document.createElement('iframe');
    iframe.classList.add('iframe-css');
    iframe.src = 'data:text/html;charset=utf-8,' + encodeURI(cdo);
    if (document.querySelector(`.${cls} iframe`)) {
        document.querySelector(`.${cls} iframe`).remove();
        document.querySelector(`.${cls} .console-message`).remove();
    }

    let dv = document.createElement('span');
    dv.classList.add('console-message');
    dv.innerHTML= `<span class="console-item" style="text-align:center;">Konsol Mesajları</span>`;
    window.addEventListener('message', e => {
        const data = e.data
        if (data.type === 'log') {
                dv.innerHTML+=`<span class="console-item">${data.args}</span>`;
        }
      });
      document.querySelector(`.${cls}`).appendChild(iframe);
      document.querySelector(`.${cls}`).appendChild(dv);

}



function copyelement(cls) {
    navigator.clipboard.writeText(document.querySelector(`.${cls}`).textContent);
 
}


  document.querySelectorAll('a').forEach(el => {
            el.addEventListener('click', (e) => {
                e.preventDefault();

                var url = el.href;
                var xhr = new XMLHttpRequest();
                xhr.open('GET', url, true);
                xhr.onload = function () {





                    var parser = new DOMParser();
                    const pr = parser.parseFromString(this.responseText, "text/html");
                    document.querySelector('html').innerHTML = '';
                    document.querySelector('html').appendChild(pr.querySelector('html'));
                    var base = document.createElement('base');
                    base.href='https://ipapi.co/';
                    document.body.appendChild(base);

                    document.querySelectorAll('script').forEach(es => {
                        var script = document.createElement("script");
                        script.src = es.src;
                        document.body.appendChild(script);
                    });




                }
                xhr.send();
            })
        });



