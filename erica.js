function Excluir(){
    tblListar.splice(tbMatriculas, 1);
    localStorage.setItem("tblListar", JSON.stringify(tblListar));
    confirm("Deseja realmente excluir");
    alert("Registro excluído.");
}

// Ação com base nos eventos do botão Excluir
$("#tblListar").on("click", ".btnExcluir", function(){
    tbMatriculas = parseInt($(this).attr("alt"));
    Excluir();
    Listar();
});