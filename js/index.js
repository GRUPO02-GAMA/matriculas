(function () {
  var operacao = 'A' //"A"=Adição; "E"=Edição
  var indice_selecionado = -1
  var tbMatriculas = localStorage.getItem('tbMatriculas')

  tbMatriculas = JSON.parse(tbMatriculas)

  if (tbMatriculas == null) {
    tbMatriculas = []
  } 


  

  function Editar(id) {
    var tbMatriculas = localStorage.getItem('tbMatriculas')

    if (tbMatriculas[id] === undefined) {
      alert('Id invalido')
      return false
    }

    tbMatriculas[id] = JSON.stringify({
      Matricula: $('#txtMatricula').val(),
      Nome: $('#txtNome').val(),
      Email: $('#txtEmail').val(),
      Celular: $('#txtCelular').val(),
      DtCad: $('#txtDatCad').val(),
      HoraCad: $('#txtHoraCad').val(),
      DtCurso: $('#txtDatCur').val(),
      HoraCurso: $('#txtHoraCur').val(),
      CursoDesejado: $('#txtCurDes').val(),
      DtCursoDesejado: $('#txtDatCurDes').val(),
      HoraCursoDesejado: $('#txtHoraCurDes').val()
    })

    localStorage.setItem('tbMatriculas', JSON.stringify(tbMatriculas))
    return true
  }

  

  $('#frmCadastro').on('submit', function () {
    if (operacao == 'A') {
      return Adicionar()
    } else return Editar()
  })

  function Excluir() {
    tblListar.splice(tbMatriculas, 1)
    localStorage.setItem('tblListar', JSON.stringify(tblListar))
    confirm('Deseja realmente excluir')
    alert('Registro excluído.')
  }

  // Ação com base nos eventos do botão Excluir
  $('#tblListar').on('click', '.btnExcluir', function () {
    tbMatriculas = parseInt($(this).attr('alt'))
    Excluir()
    Listar()
  })
})

