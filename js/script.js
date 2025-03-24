function toggleMenu() {
  document.body.classList.toggle("menu-open");
}

function closeMenu() {
  document.body.classList.remove("menu-open");
}

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".nav-links a");
  const sections = document.querySelectorAll(".container-section");

  function updateActiveLink() {
    let scrollPosition = window.scrollY + 60;

    sections.forEach((section) => {
      if (
        scrollPosition >= section.offsetTop &&
        scrollPosition < section.offsetTop + section.offsetHeight
      ) {
        links.forEach((link) => link.classList.remove("active"));

        const activeLink = document.querySelector(
          `.nav-links a[data-target="${section.id}"]`
        );
        if (activeLink) {
          activeLink.classList.add("active");
        }
      }
    });
  }

  window.addEventListener("scroll", updateActiveLink);

  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      links.forEach((l) => l.classList.remove("active"));

      const targetId = this.getAttribute("data-target");
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 60,
          behavior: "smooth",
        });
      }
    });
  });

  updateActiveLink();
});

let reasonForContact = "";

function abrirModal(reason) {
  reasonForContact = reason;
  document.getElementById("modal").style.display = "flex";
}

function fecharModal() {
  document.getElementById("modal").style.display = "none";
}

function solicitarOrcamento(name) {
  const contatos = {
    Fernando: "+5517981542929",
    Eliana: "+5517981035979",
  };
  const numero = contatos[name];
  if (reasonForContact === "tirar algumas dúvidas") {
    const message = `Olá ${name}, estou entrando em contato para ${reasonForContact}.`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  } else {
    const message = `Olá ${name}, gostaria de solicitar um orçamento para o produto ${reasonForContact}.`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const perguntas = document.querySelectorAll(".doubt-question");

  perguntas.forEach((question) => {
    question.addEventListener("click", function () {
      const resposta = this.nextElementSibling;
      const respostaAtiva = document.querySelector(".question-answer.show");

      if (respostaAtiva && respostaAtiva !== resposta) {
        respostaAtiva.classList.remove("show");
        respostaAtiva.previousElementSibling.classList.remove("active");
      }

      resposta.classList.toggle("show");
      this.classList.toggle("active");
    });
  });
});

document.getElementById("year").textContent = new Date().getFullYear();