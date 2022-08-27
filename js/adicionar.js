// $('#formCadastro').on('submit', function(e) {
//     e.preventDefault();
//     Adicionar();
// }); 

function GetMatricula(propriedade, valor){
    var cli = null;
    for (var item in tbClientes) {
        var i = JSON.parse(tbClientes[item]);
        if (i[propriedade] == valor)
            cli = i;
    }
    return cli;
}

function formatDate(date) {
    return date.substring(8,10) + "/" +date.substring(5,7)  +"/"  +date.substring(0,4);
}

// Ação com base nos eventos do botão Excluir
$('#tbListar').on('click', '.btnExcluir', function () {
    const id = parseInt( $(this).attr('alt') );
    const resposta = confirm('Deseja realmente excluir?');
    if(resposta){
        Excluir(id);
    }
})

function Excluir(id) {
    var tbMatriculas = JSON.parse( localStorage.getItem('tbMatriculas'));
    if( tbMatriculas[id] != null ){
        tbMatriculas.splice(id, 1);
        localStorage.setItem('tbMatriculas', JSON.stringify(tbMatriculas));
        window.location.reload();
    }
}

function showEditar() {
    document.getElementById('btnSalvar').style.display = 'none';
    document.getElementById('btnEditar').style.display = 'block';
}

function showSalvar() {
    document.getElementById('btnSalvar').style.display = 'block';
    document.getElementById('btnEditar').style.display = 'none';
}

function select(id) {
    const tbMatriculas = JSON.parse(localStorage.getItem('tbMatriculas'));
    if( tbMatriculas[id] != null ) {
        const estudante = JSON.parse(tbMatriculas[id]);
        // set all elements in form
        document.getElementById('txtMatricula').value = estudante.Matricula;
        document.getElementById('txtNome').value = estudante.Nome;
        document.getElementById('txtEmail').value = estudante.Email;
        document.getElementById('txtCelular').value = estudante.Celular;
        document.getElementById('txtDatCad').value = estudante.DtCad;
        document.getElementById('txtHoraCad').value = estudante.HoraCad;
        document.getElementById('txtDatCur').value = estudante.DtCurso;
        document.getElementById('txtHoraCur').value = estudante.HoraCurso;
        document.getElementById('txtCurDes').value = estudante.CursoDesejado;
        document.getElementById('txtDatCurDes').value = estudante.DtCursoDesejado;
        document.getElementById('txtHoraCurDes').value = estudante.HoraCursoDesejado;
        showEditar();
    }
}

function Editar(id) {
    
    var tbMatriculas = JSON.parse( localStorage.getItem('tbMatriculas') );

    // if (tbMatriculas[id] === undefined) {
    //   alert('Id invalido')
    //   return false
    // }

    tbMatriculas[id] = JSON.stringify({
      Matricula: $('#txtMatricula').val(),
      Nome: document.getElementById('txtNome').value,
      Email: $('#txtEmail').val(),
      Celular: $('#txtCelular').val(),
      DtCad: $('#txtDatCad').val(),
      HoraCad: $('#txtHoraCad').val(),
      DtCurso: $('#txtDatCur').val(),
      HoraCurso: $('#txtHoraCur').val(),
      CursoDesejado: $('#txtCurDes').val(),
      DtCursoDesejado: $('#txtDatCurDes').val(),
      HoraCursoDesejado: $('#txtHoraCurDes').val()
    });

    // document.getElementById('txtMatricula').value = estudante.Matricula;
    //  = estudante.Nome;
    // document.getElementById('txtEmail').value = estudante.Email;
    // document.getElementById('txtCelular').value = estudante.Celular;
    // document.getElementById('txtDatCad').value = estudante.DtCad;
    // document.getElementById('txtHoraCad').value = estudante.HoraCad;
    // document.getElementById('txtDatCur').value = estudante.DtCurso;
    // document.getElementById('txtHoraCur').value = estudante.HoraCurso;
    // document.getElementById('txtCurDes').value = estudante.CursoDesejado;
    // document.getElementById('txtDatCurDes').value = estudante.DtCursoDesejado;
    // document.getElementById('txtHoraCurDes').value = estudante.HoraCursoDesejado;



    localStorage.setItem('tbMatriculas', JSON.stringify(tbMatriculas));
    window.location.reload();
  }

function Adicionar() {
    var tbMatriculas = JSON.parse( localStorage.getItem('tbMatriculas') );

    if( tbMatriculas == undefined ) {
        tbMatriculas = [];
    }

    var aluno = JSON.stringify({
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
    });

    tbMatriculas.push(aluno);
    localStorage.setItem('tbMatriculas', JSON.stringify(tbMatriculas));
    window.location.reload();
}

function Listar() {
    var tbMatriculas = JSON.parse( localStorage.getItem('tbMatriculas') );

    $('#tbListar').html('');
    if( tbMatriculas !== undefined ) {
        
    $('#tbListar').html(
        `
            <thead>
            <tr>
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
                <th></th>
            </tr>
            </thead>
            <tbody>
            
            </tbody>
            `
        );    
        for (var i in tbMatriculas) {
            var cli = JSON.parse(tbMatriculas[i])
      
            cli.DtCad = formatDate(cli.DtCad);
            cli.DtCurso = formatDate(cli.DtCurso);
            cli.DtCursoDesejado = formatDate(cli.DtCursoDesejado);

            //falta fazer o tratamento de data e hora
            $('#tbListar tbody').append(
              `
                  <tr>
                      <td>${cli.Matricula}</td>
                      <td>${cli.Nome}</td>
                      <td>${cli.Email}</td>
                      <td>${cli.Celular}</td>
                      <td>${cli.DtCad}</td>
                      <td>${cli.HoraCad}</td>
                      <td>${cli.DtCurso}</td>
                      <td>${cli.HoraCurso}</td>
                      <td>${cli.CursoDesejado}</td>
                      <td>${cli.DtCursoDesejado}</td>
                      <td>${cli.HoraCursoDesejado}</td>
                      <td nowrap>
                        <img src="img/icon-edit.png" alt="${i}" class="btnEditar" onclick="select(${i})" />
                        <img src="img/icon-delete.png" alt="${i}" class="btnExcluir" />
                      </td>
                  </tr>
                  `
            )
        }
    }
}

Listar();