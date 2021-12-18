module.exports = {
  components: './playroom/index.ts',
  outputPath: './dist',
  snippets: './playroom/snippets.ts',
  widths: [320, 768, 1024],
  port: 9000,
  openBrowser: true,
  paramType: 'search', // default is 'hash'
  exampleCode: `
    <Frame charsPerLine="large">
      <H1>Заголовок первого уровня</H1>
      <Paragraph>Многострочный текст</Paragraph>
    </Frame>
  `,
  baseUrl: './',
  webpackConfig: () => ({
    module: {
      rules: [
        {
          test: /\.css$/i,
          exclude: /node_modules/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-typescript',
                '@babel/preset-react',
              ],
            },
          },
        },
      ],
    },
  }),
  iframeSandbox: 'allow-scripts',
  frameComponent: './playroom/Frame.tsx',
  typeScriptFiles: ['playroom/**/*.{ts,tsx}', '!**/node_modules'],
}