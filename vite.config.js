import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

import fs from 'fs';

// https://vitejs.dev/config/

export default defineConfig({
  server: {
      port: 8081,
  /*    https: {
      key: fs.readFileSync('C:/work/key.pem'),
      cert: fs.readFileSync('C:/work/cert.pem'),
    }, */
  }, 
    plugins: [vue(),Components({
    resolvers: [AntDesignVueResolver()],
  })],
});
  
