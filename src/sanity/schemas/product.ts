import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: {type: 'category'},
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'shopee',
      title: 'Shopee',
      type: 'string',
    }),
    defineField({
      name: 'tokopedia',
      title: 'Tokopedia',
      type: 'string',
    }),
    defineField({
      name: 'blibli',
      title: 'Blibli',
      type: 'string',
    }),
  ],
})
