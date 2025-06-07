import * as vscode from 'vscode';
import markdownItContainer from 'markdown-it-container';
import emoji from 'markdown-it-emoji';

export function activate(context: vscode.ExtensionContext) {
  return {
    extendMarkdownIt(md: any) {
      md.use(markdownItContainer, 'alert', {
        validate: () => true,
        render: (tokens: any, idx: number) => {
          return tokens[idx].nesting === 1 ? '<div class="alert">' : '</div>';
        }
      });

      md.use(markdownItContainer, 'spoiler', {
        marker: '?',
        validate: () => true,
        render: (tokens: any, idx: number) => {
          if (tokens[idx].nesting === 1) {
            const summary = tokens[idx + 1].content || "Подробнее";
            return `<div class="spoiler"><details><summary>${summary}</summary>`;
          } else {
            return '</details></div>';
          }
        }
      });

      md.use(emoji);  // Добавляем emoji-поддержку

      return md;
    }
  };
}
