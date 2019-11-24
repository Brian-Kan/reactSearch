const fs = require("fs")

class Documents {
  constructor() {
    this.documents = []
    fs.readdirSync(`${__dirname}/data`).forEach(filename => {
      const content = fs.readFileSync(`${__dirname}/data/${filename}`)
      const json = JSON.parse(content)
      this.documents.push(json)
    })
  }

  get(id) {
    return this.documents.find(d => d.id === id)
  }

  find(text) {
    const keywords = text.split(" ")
    const regex = new RegExp(keywords.join("|"), "gi")

    let matches = []
    this.documents.forEach(d => {
      let match = { ...d, passages: [] }

      d.passages.forEach(passage => {
        if (passage.search(regex) !== -1) {
          match.passages.push(passage)
        }
      })

      if (match.passages.length > 0) {
        matches.push(match)
      }
    })

    return matches
  }

  findByCitation(citation) {
    const regex = new RegExp(citation, "gi")
    return this.documents
      .filter(d => d.citation.search(regex) !== -1)
      .map(d => ({ ...d, passages: [] }))
  }
}

module.exports = new Documents()
