"use client"

interface PascalCodeBlockProps {
  code: string
  title?: string
  className?: string
}

export function PascalCodeBlock({ code, title, className = "" }: PascalCodeBlockProps) {
  const highlightPascal = (code: string) => {
    const keywords = [
      'program', 'uses', 'const', 'var', 'type', 'begin', 'end', 'if', 'then',
      'else', 'while', 'do', 'for', 'to', 'repeat', 'until', 'case', 'of',
      'function', 'procedure', 'array', 'record', 'string', 'integer', 'real',
      'boolean', 'char', 'true', 'false', 'nil', 'and', 'or', 'not', 'div',
      'mod', 'in', 'writeln', 'write', 'readln', 'read', 'unit', 'interface',
      'implementation', 'initialization', 'finalization'
    ]
    
    const lines = code.split('\n')
    
    return lines.map((line, lineIndex) => {
      const parts: JSX.Element[] = []
      let remaining = line
      let keyIndex = 0
      
      // Handle comments first { }
      if (remaining.includes('{')) {
        const commentMatch = remaining.match(/(\{[^}]*\})/)
        if (commentMatch) {
          const beforeComment = remaining.substring(0, remaining.indexOf('{'))
          const comment = commentMatch[1]
          const afterComment = remaining.substring(remaining.indexOf('}') + 1)
          
          if (beforeComment) {
            parts.push(<span key={`before-${lineIndex}`}>{processText(beforeComment, keywords, lineIndex)}</span>)
          }
          parts.push(<span key={`comment-${lineIndex}`} className="pascal-comment">{comment}</span>)
          remaining = afterComment
        }
      }
      
      // Handle the rest of the line
      if (remaining || parts.length === 0) {
        parts.push(<span key={`rest-${lineIndex}-${keyIndex++}`}>{processText(remaining, keywords, lineIndex)}</span>)
      }
      
      return (
        <div key={lineIndex} className="leading-relaxed">
          {parts}
        </div>
      )
    })
  }

  const processText = (text: string, keywords: string[], lineIndex: number): JSX.Element[] => {
    const result: JSX.Element[] = []
    const regex = /('[^']*')|(\b\d+\b)|(\b\w+\b)|([^\w']+)/g
    let match
    let keyIndex = 0

    while ((match = regex.exec(text)) !== null) {
      const [fullMatch, stringLiteral, number, word, other] = match
      
      if (stringLiteral) {
        result.push(<span key={`str-${lineIndex}-${keyIndex++}`} className="pascal-string">{stringLiteral}</span>)
      } else if (number) {
        result.push(<span key={`num-${lineIndex}-${keyIndex++}`} className="pascal-number">{number}</span>)
      } else if (word) {
        if (keywords.includes(word.toLowerCase())) {
          result.push(<span key={`kw-${lineIndex}-${keyIndex++}`} className="pascal-keyword">{word}</span>)
        } else if (word[0] === word[0].toUpperCase() && word.length > 1) {
          result.push(<span key={`type-${lineIndex}-${keyIndex++}`} className="pascal-type">{word}</span>)
        } else {
          result.push(<span key={`word-${lineIndex}-${keyIndex++}`}>{word}</span>)
        }
      } else if (other) {
        result.push(<span key={`other-${lineIndex}-${keyIndex++}`}>{other}</span>)
      }
    }

    return result
  }

  return (
    <div className={`rounded-lg overflow-hidden border border-border bg-card/80 backdrop-blur-sm shadow-xl ${className}`}>
      {title && (
        <div className="px-4 py-2 bg-muted/50 border-b border-border flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-accent" />
            <div className="w-3 h-3 rounded-full bg-secondary" />
            <div className="w-3 h-3 rounded-full bg-primary" />
          </div>
          <span className="font-mono text-sm text-muted-foreground ml-2">{title}</span>
        </div>
      )}
      <div className="p-4 md:p-6 overflow-x-auto">
        <pre className="pascal-code text-sm md:text-base">
          {highlightPascal(code)}
        </pre>
      </div>
    </div>
  )
}
