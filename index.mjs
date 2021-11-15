import * as fs from 'fs';
import { unified } from 'unified';
import {visit} from 'unist-util-visit'
import rehypeParse from 'rehype-parse';

const doc = fs.readFileSync('./public/index.html');

const tree = unified().use(rehypeParse).parse(doc);

console.log(tree);

visit(tree, 'text', (node) => {
  console.log(node.value.trim());
});