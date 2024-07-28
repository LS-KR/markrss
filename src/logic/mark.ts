import {marked} from 'marked'

export function build(title: string, markdown: string): string {
  const content = `<![CDATA[${marked(markdown)}]]>`;
  const summary = `<summary type="html">${title}</summary>`;
  const now = new Date();
  return `<entry><title>${title}</title><id>${rand(0, 2147483647)}${title}${rand(0, 2147483647)}</id><content type="html">${content}</content>${summary}<published>${now.toISOString()}</published><updated>${now.toISOString()}</updated></entry>`
}

export function rand(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min)) + min;
}