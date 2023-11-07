import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    process.env.NODE_ENV = env.MODE;

    let config = {
        build: {
            outDir: 'dist'
        },
        plugins: [
            vue()
        ]
    };

    if (env.MODE == 'development') {
        config.build.minify = false;
    }

    if (env.IS_LIB) {
        config.build.lib = {
            entry: 'src/component.js',
            name: 'v-strap-toggle',
            fileName: 'v-strap-toggle'
        };

        config.build.rollupOptions = {
            external: ['vue'],
            output: {
                globals: 'Vue'
            }
        };
    }

    return config;
});
