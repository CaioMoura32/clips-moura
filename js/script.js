
function copiarTexto() {
    let textoCopiado = document.getElementById("texto");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");
}
function copiarTextoAquelequickScopeCego() {
    let textoCopiadoAquelequickScopeCego = document.getElementById("textoAquelequickScopeCego");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");
}
function pr() {
    document.getElementById("result").innerHTML =  '<div class="preview-post"><li class="' + document.getElementById('nome').value + '">' + '<div  class=""><div class="uk-card uk-card-default"><div class="uk-card-media-top"><iframe src="' + document.getElementById('linkIframe').value + '" width="100%" height="339px" allow="fullscreen"></iframe></ br></div></ br><div class="uk-card-body"><p class="name">' + document.getElementById('nome').value + '</p><h3 uk-slider-parallax="x: 100,-100" class="uk-card-title">' + document.getElementById('tituloVideo').value + '</h3><p uk-slider-parallax="x: 200,-200">' + document.getElementById('descricaoVideo').value + '</p><div class="felx-botoes-filter" uk-slider-parallax="y: 50,0,0; opacity: 1,1,0"><div class="uk-flex campo-botoes-compartilhar-baixar"><a uk-tooltip="Download" href="/videos/' + document.getElementById('descricaoVideoDownload').value + '"' + ' download=""><span uk-icon="icon: download"></span></a></div></div></div></div></div></li></div><br>' + '<div><ul uk-accordion><li><a class="uk-accordion-title" href>Copie o código de envio!</a><div class="uk-accordion-content">' + '<@li class="' + document.getElementById('nome').value + '"@><br/>' + '<@div><br/><@div class="uk-card uk-card-default"><br/><@div class="uk-card-media-top"><br/><@iframe src="' + document.getElementById('linkIframe').value + '" width="100%" height="339px" allow="fullscreen"><@/iframe></ br><@/div></ br><@div class="uk-card-body"><br/><@p class="name">' + document.getElementById('nome').value + '<@/p><br/><@h3 uk-slider-parallax="x: 100,-100" class="uk-card-title">' + document.getElementById('tituloVideo').value + '<@/h3><br/><@p uk-slider-parallax="x: 200,-200">' + document.getElementById('descricaoVideo').value + '<@/p><br/><@div class="felx-botoes-filter" uk-slider-parallax="y: 50,0,0; opacity: 1,1,0"><br/><@div class="uk-flex campo-botoes-compartilhar-baixar"><br/><@a uk-tooltip="Download" href="/videos/' + document.getElementById('descricaoVideoDownload').value + '"' + ' download=""><@span uk-icon="icon: download"><@/span><@/a><br/><@/div><br/><@/div><br/><@/div><br/><@/div><br/><@/div><br/><@/li>' + '</div></li></ul></div>';
}
