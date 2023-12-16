
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