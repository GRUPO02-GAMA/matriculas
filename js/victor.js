function editar(id) {
    
    var tbListar = localStorage.getItem('tbListar');
    
    if( tbListar[id] === undefined ) {
        alert('Id invalido');
        return false;
    }
    
    tbListar[id] = JSON.stringify({
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
    
    localStorage.setItem("tbListar", JSON.stringify(tbListar));
    return true;
}  