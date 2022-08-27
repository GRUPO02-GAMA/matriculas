function Adicionar() {
  var student = GetMatricula('Matricula', $('#txtMatricula').val())

  if (student != null) {
    alert('Aluno já cadastrado.')
    return
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

  })

  tbMatriculas.push(aluno)
  localStorage.setItem('tbMatriculas', JSON.stringify(tbMatriculas))
  alert('Aluno adicionado.')
  return true
}
