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

function Adicionar() {
    // var student = GetMatricula('Matricula', $('#txtMatricula').val())

    // if (student != null) {
    //   alert('Aluno já cadastrado.')
    //   return
    // }

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
    return true;

    /* */
    // 
    // 
    // alert('Aluno adicionado.')
    // return true
}

function Listar() {
    var tbMatriculas = JSON.parse( localStorage.getItem('tbMatriculas') );
    // alert(tbMatriculas);
    $('#tbListar').html('');
    if( tbMatriculas !== undefined ) {
        
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
        );    
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
                  </tr>
                  `
            )
        }
    }
}
  Listar();