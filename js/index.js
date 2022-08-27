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

  function Listar() {
    $('#tbListar').html('')
    $('#tbListar').html(
      `
        <thead>
        <tr>
            <th></th>
            <th>Registro</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Celular</th>
            <th>Data de Cadastro</th>
            <th>Hora de Cadastro</th>
            <th>Data para realizar</th>
            <th>Hora pra realizar</th>
            <th>Nome do curso</th>
            <th>Data do curso</th>
            <th>Hora do curso</th>
        </tr>
        </thead>
        <tbody>
        
        </tbody>
        `
    )

    for (var i in tbMatriculas) {
      var cli = JSON.parse(tbMatriculas[i])

      cli.DtCad = formatDate(cli.DtCad)
      cli.DtCurso = formatDate(cli.DtCurso)
      cli.DtCursoDesejado = formatDate(cli.DtCursoDesejado)
      //falta fazer o tratamento de data e hora
      $('#tbListar tbody').append(
        `
            <tr>
                <td><img src="img/edit.png" alt='"+i+"' class="btnEditar"/>
                    <img src='img/delete.png' alt='"+i+"' class='btnExcluir'/>
                </td>
                <td>cli.Matricula</td>
                <td>cli.Nome</td>
                <td>cli.Email</td>
                <td>cli.Celular</td>
                <td>cli.DtCad</td>
                <td>cli.HoraCad</td>
                <td>cli.DtCurso</td>
                <td>cli.HoraCurso</td>
                <td>cli.CursoDesejado</td>
                <td>cli.DtCursoDesejado</td>
                <td>cli.HoraCursoDesejado</td>
            </tr>
            `
      )
    }
  }

  Listar()

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

