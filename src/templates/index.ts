import Config from '@config';
import { Options } from 'html-webpack-plugin';

export default function (templateParams: Options) {
  const html = /* html */ `
    <!DOCTYPE html>
    <html lang="en-US">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${templateParams.htmlWebpackPlugin.options.title}</title>
        <meta name="description" content="${Config.DESCRIPTION}" />
        <meta name="keywords" content="book, bookshelf, library, manage bookshelf, library bookshelf" />
        <meta name="image" content="${Config.HOST}/og.png" />
        <link rel="apple-touch-icon" href="/static/icons/apple-touch-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap" rel="stylesheet" />
        <noscript>You need to enable JavaScript!</noscript>
      </head>
      <body>
        <div id="__rdnsan"></div>
      </body>
    </html>
  `;

  return html;
}
