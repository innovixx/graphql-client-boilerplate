import type { UserConfig } from 'vite';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default ({ mode }: { mode: string }): UserConfig => {
	process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

	return defineConfig({
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
