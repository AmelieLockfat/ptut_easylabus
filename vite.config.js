import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      external: ['src/assets/LogoISIS-Blanc.png','src/assets/GrosLogo.png','src/assets/CoeurISIS.png','src/assets/Bouclier.png','src/assets/logo.svg','src/assets/LogoISISFichEns.png']
    }
  },
});