const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputName = document.getElementById("name").value;
  const inputSobrenome = document.getElementById("sobrenome").value;
  const inputEmail = document.getElementById("email").value;
  const inputSenha = document.getElementById("senha").value;
  const textArea = document.getElementById("text-area").value;

  if (
    !inputName ||
    !inputSobrenome ||
    !inputEmail ||
    !inputSenha ||
    !textArea
  ) {
    alert("Preencha todos os campos!");
  } else {
    form.reset();
    alert(`Usuário ${inputName} cadastrado com sucesso!`);
    console.log({
      inputName,
      inputSobrenome,
      inputEmail,
      inputSenha,
      textArea,
    });
  }
});
