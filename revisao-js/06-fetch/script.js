fetch("https://ranekapi.origamid.dev/json/api/produto")
  .then((r) => r.json())
  .then((json) => {
    document.querySelector("#app").innerHTML = json[0].nome;
    console.log(json);
  });

const data = { nome: "Fulano", senha: "123456" };
fetch("https://ranekapi.origamid.dev/json/api/usuario", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data),
});
