document.getElementById("formAdocao").addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const cpf = document.getElementById("cpf").value;
    const idade = parseInt(document.getElementById("idade").value);
    const moradia = document.getElementById("moradia").value;
    const horas = parseInt(document.getElementById("horas").value);
    const motivo = document.getElementById("motivo").value;
    const termo = document.getElementById("termos").checked;

    const quintalRadio = document.querySelector('input[name="quintal"]:checked');
    const quintal = quintalRadio ? quintalRadio.value : "";

    const petRadio = document.querySelector('input[name="pet"]:checked');
    const pet = petRadio ? petRadio.value : "";

    const cpfsExistentes = ["12345678900", "11122233344"];
    const motivosInvalidos = ["quero", "porque sim"];

    if (nome.length < 3) return alert("Nome Inválido");
    if (!email.includes("@")) return alert("Email inválido");
    if (telefone.length < 10) return alert("Telefone inválido");
    if (cpf === "") return alert("CPF é obrigatório");
    if (cpfsExistentes.includes(cpf)) return alert("CPF já está cadastrado");
    if (isNaN(idade) || idade < 18) return alert("Você deve ser maior de idade");
    if (moradia === "") return alert("Selecione a moradia");
    if (quintal === "") return alert("Informe sobre o quintal");
    if (pet === "") return alert("Informe se já teve pet");
    if (isNaN(horas)) return alert("Horas inválidas");
    if (motivo.length < 10) return alert("Motivo muito curto");
    if (!termo) return alert("Aceite o termo");

    if (moradia === "apartamento" && quintal === "sim") {
        return alert("Erro: Apartamento geralmente não possui quintal.");
    }
    
    if (motivosInvalidos.includes(motivo.toLowerCase())) {
        return alert("Motivo inválido (muito genérico)");
    }

    if (horas > 8) {
        alert("Atenção: O animal ficará muito tempo sozinho!");
    }

    if (pet === "nao") {
        alert("A ONG poderá acompanhar sua adaptação com o pet.");
    }

    alert(`
        Formulário enviado com sucesso!
        
        Nome: ${nome} 
        Email: ${email} 
        Telefone: ${telefone} 
        CPF: ${cpf} 
        Idade: ${idade} 
        Moradia: ${moradia} 
        Quintal: ${quintal} 
        Já teve pet: ${pet}
        Horas sozinho: ${horas}
        Motivo: ${motivo}
    `);
    
});