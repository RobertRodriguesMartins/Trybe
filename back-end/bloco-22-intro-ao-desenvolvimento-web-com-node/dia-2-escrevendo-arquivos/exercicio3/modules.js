const readLine = require('readline-sync');
const fs = require('fs').promises;
const process = require('process');

async function createSomeArquives(qt = 1) {
  const promises = [];
  for (let i = 1; i <= qt; i++) {
    promises.push(fs.writeFile(`file${i}.txt`, `teste arquivo ${i}`))    
  }
  try {
    await Promise.all(promises);
    console.log('arquivos gerados com sucesso!')
  } catch (err) {
    console.log('ocorreu algum erro durante a geração dos arquivos')
  }
}


function wichFileDoYouWantToRead() {
  const file = readLine.question('Qual arquivo você deseja ler? ');
  return file;
}

async function readFile(fileName) {
  try {
    const result = await fs.readFile(fileName, {
      encoding: 'utf-8'
    })
    return [result, fileName];
  } catch (err) {
    return ['arquivo não existe', fileName]
  }
}

async function replaceSomeWord(text, fileName) {
  console.log(text);
  const wordToreplace = readLine.question('qual palavra você quer substituir? ');
  const newWord = readLine.question('Digite a nova palavra: ');
  const result = text.replace(new RegExp(wordToreplace, 'g'), newWord);
  await fs.writeFile(fileName, result);
  console.log('Process finished')
}

module.exports = {
  wichFileDoYouWantToRead,
  readFile,
  createSomeArquives,
  replaceSomeWord
}