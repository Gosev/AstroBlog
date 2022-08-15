
interface Heading {
  depth: number, 
  test: string,
  slug: string
}

export interface Post {
  frontmatter: {
    /** Frontmatter from a blog post */
    title: string,
    date: string,
    author: string,
    img: string,
    description: string,
    lang: string
    /** Generated values */

    slug: string,
  },
  file: string,
  url: string,
  headings: Array<Heading>,
  rawContent: () => string,
  compiledContent: () => string,
}



export function getPosts(allposts: Array<Post>, locale: string, limit:number = null) {

  const sortedposts = allposts
    .filter(item => !!item.frontmatter?.img)
    .filter(item => (item.frontmatter.lang == locale))
    .sort((a,b) => a.frontmatter.date > b.frontmatter.date ? -1 : 1)
    ;

  return sortedposts.slice(0, limit || sortedposts.length)
}


export function getSlug(post:Post) {

  let pathElements = post.file.split('/');

  let filename = pathElements.at(-1);
  return filename.split(".")[0];
}


export function getFullPath(post:Post) {

  let pathElements = post.file.split('/');

  let filename = pathElements.at(-1);
  let slug = filename.split(".")[0];
  let locale = pathElements.at(-2);

  let localePath = locale == "en" ? "" : `${locale}`;

  return `${localePath}/blog/${slug}`;

}

