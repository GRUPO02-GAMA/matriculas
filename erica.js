function Excluir(){
    tbMatriculas.splice(indice_selecionado, 1);
    localStorage.setItem("tbMatriculas", JSON.stringify(tbMatriculas));
    confirm("Deseja realmente excluir");
    alert("Registro excluído.");
}

// Ação com base nos eventos do botão Excluir
$("#tblListar").on("click", ".btnExcluir", function(){
    indice_selecionado = parseInt($(this).attr("alt"));
    Excluir();
    Listar();
});

	// ultimo codigo
	var ultimo = JSON.parse(tbMatriculas.slice(-1));
	var ultconv = parseInt(ultimo.Matricula);
	
	$("#txtMatricula").val(ultconv+1);