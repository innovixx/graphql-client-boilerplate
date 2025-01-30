import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
    plugins: [react()],
    server: {
      host: true,
      port: parseInt(`${process.env.VITE_PORT}`, 10),
      strictPort: true,
      watch: {
        usePolling: true,
      },
    },
  });
};
