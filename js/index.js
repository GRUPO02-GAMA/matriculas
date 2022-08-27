(function () {
  var operacao = 'A' //"A"=Adição; "E"=Edição
  var indice_selecionado = -1
  var tbMatriculas = localStorage.getItem('tbMatriculas')

  tbMatriculas = JSON.parse(tbMatriculas)

  if (tbMatriculas == null) {
    tbMatriculas = []
  } 


  

  

  

  $('#frmCadastro').on('submit', function () {
    if (operacao == 'A') {
      return Adicionar()
    } else return Editar()
  })



  
})

