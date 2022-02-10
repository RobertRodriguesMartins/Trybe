const mod = require('./modules');

async function callMods() {
  await mod.createSomeArquives(5);
  const file = mod.wichFileDoYouWantToRead();
  const [text, fileName] = await mod.readFile(file);
  await mod.replaceSomeWord(text, fileName)
}

callMods()