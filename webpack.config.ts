import createExpoWebpackConfigAsync from '@expo/webpack-config/webpack';
import { Arguments, Environment } from '@expo/webpack-config/webpack/types';

module.exports = async function (env: Environment, argv: Arguments) {
    const config = await createExpoWebpackConfigAsync(env, argv);

    if (config.resolve?.alias) {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@/*': './src/*',
            '@/api': './src/api',
            '@/components': './src/components',
            '@/constants': './src/constants',
            '@/navigation': './src/navigation',
            '@/screens': './src/screens',
            '@/storage': './src/storage',
            '@/styles': './src/styles',
            '@/types': './src/types',
            '@/utils': './src/utils',
        };
    }

    return config;
};