import resolve from 'rollup-plugin-node-resolve';
import commonJS from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import includePaths from 'rollup-plugin-includepaths';
import minify from 'rollup-plugin-babel-minify';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import pkg from './package.json';

export default {
    input: './src/index.js',
    output: [
        {
            file: pkg.main,
            format: 'cjs',
            sourcemap: true
        },
        {
            file: pkg.module,
            format: 'es',
            sourcemap: true
        }
    ],
    plugins: [
        peerDepsExternal(),
        includePaths({
            include: {},
            paths: ['src'],
            external: [],
            extensions: ['.js', '.jsx']
        }),
        resolve(),
        commonJS({
            include: 'node_modules/**'
        }),
        postcss({
            modules: true,
            extract: true,
            minimize: true
        }),
        babel({
            exclude: 'node_modules/**',
            runtimeHelpers: true
        }),
        minify({
            comments: false
        })
    ],
    treeshake: true
};
