import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './sanity/schemas'

export default defineConfig({
  name: 'default',
  title: 'Bishop Portfolio',
  projectId: '14gp8bl9',
  dataset: 'production',
  basePath: '/studio',
  plugins: [deskTool()],
  schema: {
    types: schemaTypes,
  },
})
