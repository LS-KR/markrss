import {marked} from 'marked'

export function build(title: string, markdown: string): string {
  const content = `<![CDATA[${marked(markdown)}]]>`;
  const summary = `<summary type="html">${title}</summary>`;
  const now = new Date();
  return `<entry><title>${title}</title><id>${title}</id><content type="html">${content}</content>${summary}<published>${now.toISOString()}</published><updated>${now.toISOString()}</updated></entry>`
}