import { defineConfig } from 'vite'
import { crx } from '@crxjs/vite-plugin'
import react from '@vitejs/plugin-react'

import manifest from './src/manifest'
//@ts-ignore
import {config} from './src/read_pages_folder'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    // define: {
    //   // Define the "process" object
    //   'process.env': {
    //     // Define environment variables
    //     NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
    //     // Add more environment variables if needed
    //   },
    // },
    build: {
      emptyOutDir: true,
      outDir: 'build',
      rollupOptions: {
        input: config,
        output: {
          chunkFileNames: 'assets/chunk-[hash].js',
        },
      },
    },

    plugins: [crx({ manifest }), react()],
  }
})
