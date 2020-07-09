module.exports={
    publicPath:"./",
    // 构建时的输出目录
    outputDir:"dist",
    // 静态资源
    assetsDir:"static",
    indexPath:'index.html',
    // 多页配置
    // pages:undefined,
    lintOnSave:true,
    css:{
        // 为所有css及预处理文件开启css modules
        modules:true,
        // 不将组件中的css提取至一个独立的css文件中
        extract:false,
        // 向css相关的loader传递相关的选项
        loaderOptions:{}
    },
    // 代理
    // devServer:{}
}