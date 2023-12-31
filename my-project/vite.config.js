import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

build: {
    assetsInlineLimit: 0
}

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
    outDir: '../public',
});
