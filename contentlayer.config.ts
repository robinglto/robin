import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypePrettyCode from "rehype-pretty-code"


import { type } from 'os'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: 'string', required: true },
    subtitle: {type: 'string', required:true},
    description: {type:'string', required: true},
    date: { type: 'string', required: true },
    category: {type: 'string' ,required: true}
  },
  computedFields: {
    url: { type: 'string', resolve: (post) => `/posts/${post._raw.flattenedPath}` },
  },
}))

export default makeSource({ contentDirPath: 'posts', documentTypes: [Post] })