class Bold {
  constructor (quillJS) {
    this.quillJS = quillJS
    this.name = 'italic'
    this.pattern = /(\*|_){1}(.+?)(?:\1){1}/g
    this.getAction.bind(this)
  }

  getAction () {
    return {
      name: this.name,
      pattern: this.pattern,
      action: (text, selection, pattern, lineStart) => {
        let match = pattern.exec(text)

        if (!match) {
          return
        }

        const [annotatedText, matchedToken, matchedText] = match
        const firstToken = (this.quillJS.getText())[lineStart + match.index]
        const secondToken = (this.quillJS.getText())[lineStart + match.index + 1]

        if (matchedToken === firstToken && firstToken === secondToken) {
          // duplicated match string tag. ** or __
          return
        }

        const startIndex = lineStart + match.index

        setTimeout(() => {
          this.quillJS.deleteText(startIndex, annotatedText.length)
          this.quillJS.insertText(startIndex, matchedText, { italic: true })
          this.quillJS.format('italic', false)
        }, 0)
      }
    }
  }
}

export default Bold
