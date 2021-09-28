const getRepos = require('../src/exercise4');

const url = 'https://api.github.com/orgs/tryber/repos';

describe('Testing getRespos fetch function (using promise sintax here)', () => {
  it('should return an array', () => (
    getRepos(url)
      .then((resp) => expect(Array.isArray(resp)).toBe(true))
  ))
  it('should includes "sd-01-week4-5-project-todo-list"(using async/await here)', async () => {
    expect(await getRepos(url)).toContain("sd-01-week4-5-project-todo-list");
  })
  it('should includes "sd-01-week4-5-project-meme-generator"(using promise sintax here)', () => (
    getRepos(url)
      .then((resp) => expect(resp).toContain('sd-01-week4-5-project-meme-generator'))
  ))
})