import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['src/css/app.css', 'src/js/app.js'],
            refresh: true,
        }),
    ],
});
