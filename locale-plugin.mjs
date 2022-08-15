

export function localePlugin() {
  // All remark and rehype plugins return a separate function
  return function (tree, file) {
    const bits = file.history[0].split('/');
    const filename = bits.at(-1);
    const lang = bits.at(-2);

    file.data.astro.frontmatter.lang = lang;
  }
}