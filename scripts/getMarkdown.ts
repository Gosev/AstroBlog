
let fs = require('fs');

const mediumToMarkdown = require('medium-to-markdown');


function convert(url: string, filename: string) {
  mediumToMarkdown.convertFromUrl(url)
  .then(function (markdown: string) {
    console.log(markdown); //=> Markdown content of medium post
    fs.writeFile(`../src/content/posts/en/${filename}.mdx`, markdown, () => console.log("done"));

  });
  
}


const stories = [
  'https://kodaps.com/publishing-a-static-website-to-aws-with-your-own-https-domain-name-in-8-easy-steps-with-a-nextjs-5ec1e57e8ac8?source=friends_link&sk=756fdb2b03eaa110e5b08b3e356d0977',
  'https://kodaps.com/creating-a-quiz-app-with-react-hooks-and-typescript-part-1-a-simple-math-quiz-f33bfe27098a?source=friends_link&sk=873007ea700c178f227068d980647c56'
]


stories.forEach(element => {

  let slug = element.split('/')?.at(-1)?.split('?')?.at(0);

  if (slug) {
    let words = slug.split('-');
    words.pop(); // remove mkdown id
    convert(element, words.join('-'));
  }
});

export {}