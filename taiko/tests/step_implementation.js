const { goto, waitFor, write, text, textBox, into, click, button, dropDown, 
    below, near, toLeftOf, radioButton, $, doubleClick, alert, accept } = require("taiko");
  var assert = require("assert");
  
  step("Quando acesso o site <site>", async function(site) {
    await goto(site, { navigationTimeout: 8000 });
  });
  
  step("E valido o título <titulo>", async function(titulo) {
    await waitFor(titulo); //na linha 36 tem outra alternativa para validar texto
  });
  
  step("E preencho <nome> no campo nome", async function(nome) {
    await write(nome, into(textBox("Nome")));
    //await write(nome, into(textBox({id: 'nome'})));
    //await write(nome, into($(`//input[@id='nome']`)));
  });
  
  step("E preencho <frase> no campo de frase inspiradora", async function(frase) {
    await write(frase, into(textBox({id: 'frase'}))); 
  });
  
  step("E seleciono <opcao> como opção da lista", async function(opcao) {
    await dropDown(below("Selecione um item da lista:")).select(opcao);
    //await dropdown({id: 'opcao'}).select(opcao);
  });
  
  step("E seleciono a opção <opcao>", async function(opcao) {
    await radioButton(toLeftOf(opcao)).select();
  });
  
  step("E clico no botão de chat", async function() {
    await doubleClick($(`//img[@id='chat']`));
  });
  
  step("E valido a mensagem <msg>", async function(msg) {
    var textoBox = await $(`//div[@id='chatBox']`).text()
    assert.ok(textoBox == msg)
  });
  
  step("E clico no botão <btn>", async function(btn) {
    alert('Aeeeee, ti fofo!', async () => await accept())
    await click(button(btn));
  });
