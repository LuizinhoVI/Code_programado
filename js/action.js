function resetPageOnVisibilityChange() {
    // Verifica se o status de visibilidade da página mudou para "invisível"
    if (document.hidden) {
        // Faz a página recarregar
        location.reload();
    }
}

// Adiciona o evento visibilitychange à página
document.addEventListener('visibilitychange', resetPageOnVisibilityChange);


function abrir() {

    // document.getElementById("perfil1").style.display = "block";
    // document.getElementById("home1").style.display = "none";

    // $('#teste').css({ color: "red", backgroundColor: "#000" });

}