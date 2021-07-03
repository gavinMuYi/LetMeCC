const path = require('path');

module.exports = {
    resolve: {
        extensions: ['.js', '.ts', '.json'],
    },
    devtool: 'source-map', // 打包出的js文件是否生成map文件（方便浏览器调试）
    mode: 'production',
    entry: {
        'LetMeCC': './src/LetMeCC.ts',
    },
    output: {
        filename: 'LetMeCC.js',
        path: path.resolve(__dirname, 'dist'),
        // libraryTarget: 'commonjs', // 浏览器端不需要
    },
    module: {
        rules: [
            // {
            //     test: /\.ts?$/,
            //     use: [
            //         {
            //             loader: 'tslint-loader',
            //             options: {
            //                 configFile: path.resolve(__dirname, './tslint.json'),
            //             },
            //         },
            //     ],
            //     exclude: /node_modules/,
            // },
            {
                test: /\.ts?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            // 指定特定的ts编译配置，为了区分脚本的ts配置
                            configFile: path.resolve(__dirname, './tsconfig.json'),
                        },
                    },
                ],
                exclude: /node_modules/
            }
        ]
    }
};