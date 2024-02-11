/*
 * Copyright (c) 2022 MKLabs. All rights reserved.
 *
 * NOTICE:  All information contained herein is, and remains the
 * property of MKLabs. The intellectual and technical concepts
 * contained herein are proprietary to MKLabs and may be covered
 * by Republic of Korea and Foreign Patents, patents in process,
 * and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from MKLabs (niklaus.lee@gmail.com).
 */

import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import "katex/dist/katex.min.css"; // `rehype-katex` does not import the CSS for you
import { Button } from "@/components/ui/button";
import { CheckIcon, CopyIcon, EyeIcon } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const markdowntest = `
sdflkj sdlfk jsadflkj sdflkj sadfkj saldfkj sladfj lsadkfj laksdj flk sdflk jsadlkfj sadflkj sadlkfj sldakfj lkj saldkj flka sdf

- ~strikethough~ and URL: https://reactjs.org
- **bold** *italic* sadfj sdjflkjasdf
- 348u34r asdflkj sdaflj 
- 23jrklj asdflkj asdlkjf

The lift coefficient ($C_L$) is a dimensionless coefficient.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
| 1 | 2 |
| 3 | 4 |
| 5 | 6 |

saflkj kalsflkjsdflkj sadlkj fasdf

~~~ts
class Test {
  constructor () {
    super();
    this.test = 100;
  }

  public test() {
    let x: string = "good";
    return "test";
  }
}
~~~

~~~js
console.log('It works!')
~~~

python code:

~~~python
def test():
  print('hello world')
~~~
`;

function MarkdownSyntaxHighlighter({ children, language, ...rest }: any) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!copied) {
      navigator.clipboard.writeText(children);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  };

  return (
    <div className="relative">
      <SyntaxHighlighter
        PreTag="div"
        children={String(children).replace(/\n$/, "")}
        language={language}
        style={oneDark}
        customStyle={{
          fontFamily: "IBM Plex Mono",
        }}
        {...rest}
      />
      <Button
        variant="outline"
        className="absolute right-2 top-2 bg-foreground text-background w-7 h-7"
        size="icon"
        onClick={handleCopy}
      >
        {copied ? <CheckIcon size={14} /> : <CopyIcon size={14} />}
      </Button>
      {language === "html" && (
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-10 top-2 bg-foreground text-background w-7 h-7"
            >
              <EyeIcon size={14} />
            </Button>
          </DialogTrigger>
          <DialogContent className="w-full md:max-w-[768px]">
            <DialogHeader>
              <DialogTitle>Preview</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <iframe
                className="w-full md:w-[720px] h-[540px]"
                srcDoc={children}
              />
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

interface MarkdownViewerProps {
  source: string;
}

export function MarkdownViewer({ source }: MarkdownViewerProps) {
  const syntaxTheme = oneDark;

  // Update theme
  syntaxTheme['code[class*="language-"]'].fontFamily =
    "IBM Plex Mono, monospace";

  return (
    <main className="markdown">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex]}
        components={{
          code(props) {
            const { children, className, node, ...rest }: any = props;
            const match = /language-(\w+)/.exec(className || "");
            return match ? (
              <MarkdownSyntaxHighlighter
                PreTag="div"
                children={String(children).replace(/\n$/, "")}
                language={match[1]}
                style={oneDark}
                customStyle={{
                  fontFamily: "IBM Plex Mono",
                }}
                {...rest}
              />
            ) : (
              <code {...rest} className={className}>
                {children}
              </code>
            );
          },
          a(props) {
            const { children, href, ...rest }: any = props;
            return (
              <a {...rest} href={href} target="_blank" rel="noreferrer">
                {children}
              </a>
            );
          },
        }}
      >
        {source}
      </ReactMarkdown>
    </main>
  );
}
