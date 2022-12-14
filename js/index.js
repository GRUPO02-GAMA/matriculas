function course_type(course) {
	switch (course) {
		case 'node':
			return 'Node.JS'
		case 'express':
			return 'Express'
		case 'html5':
			return 'HTML 5'
		case 'css':
			return 'CSS'
		default:
			return 'Curso não cadastrado'
	}
}

function GetMatricula(propriedade, valor) {
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
        const form = document.getElementById('frmCadastro');
        var input = document.createElement('input');
        input.type = 'hidden';
        input.value = id;
        input.id = 'elIndex';
        form.appendChild(input);
       
        const estudante = JSON.parse(tbMatriculas[id]);
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
        document

        showEditar();
    }
}

function Editar() {
    
    var tbMatriculas = JSON.parse( localStorage.getItem('tbMatriculas') );
    var elIndex = document.getElementById('elIndex');
    tbMatriculas[elIndex.value] = JSON.stringify({
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

    localStorage.setItem('tbMatriculas', JSON.stringify(tbMatriculas));
    window.location.reload();
}
  
const dataInput = document.getElementById('txtDatCad');
dataInput.value = new Date().toISOString().slice(0, 10);
const horaInput = document.getElementById('txtHoraCad');
horaInput.value = new Date().toLocaleTimeString().slice(0, 5);

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
        HoraCursoDesejado: $('#txtHoraCurDes').val(),
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
            <tr class="columns">
                <th class="column">Registro</th>
                <th class="column">Nome</th>
                <th class="column">E-mail</th>
                <th class="column">Celular</th>
                <th class="column">Data de Cadastro</th>
                <th class="column">Hora de Cadastro</th>
                <th class="column">Data para realizar</th>
                <th class="column">Hora pra realizar</th>
                <th class="column">Nome do curso</th>
                <th class="column">Data do curso</th>
                <th class="column">Hora do curso</th>
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
                      <td>${course_type(cli.CursoDesejado)}</td>
                      <td>${cli.DtCursoDesejado}</td>
                      <td>${cli.HoraCursoDesejado}</td>
                      <td nowrap>
                        <img src="img/icon-update.svg" alt="${i}" class="btnEditar" onclick="select(${i})" />
                        <img src="img/icon-delete.svg" alt="${i}" class="btnExcluir" />
                      </td>
                  </tr>
                  `
            )
        }
    }

    var nMatricula = JSON.parse(localStorage.getItem('tbMatriculas'));
	if (nMatricula === null) {
		$("#txtMatricula").val(1);
    } else {
        var ultMatricula = JSON.parse(tbMatriculas.slice(-1));
        var valMatricula = parseInt(ultMatricula.Matricula) ;
		$("#txtMatricula").val(valMatricula+1);
	}
}
Listar();