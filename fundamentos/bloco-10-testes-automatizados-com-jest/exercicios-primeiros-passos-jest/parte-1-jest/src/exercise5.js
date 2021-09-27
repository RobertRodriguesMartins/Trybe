const trybeTech = (arr = ['digite uma tecnologia'], nome = 'robert') => arr.map((elemento) => {
  return { tech: elemento, nome }
}).sort((a, b) => (a.tech > b.tech) ? 1: -1)

module.exports = trybeTech;