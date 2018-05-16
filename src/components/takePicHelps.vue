<template>
    <section class="helps">
        <p>下面是在使用IE浏览器上传文件的时候，遇到了一个报错“Automation 服务器不能创建对象”的问题，分析的得出的原因是有些网站的脚本处理和相关认证不是很规范，导致我们当前浏览器的安全设置阻止了某些脚本程序的执行。因此就会报这样的错误。</p>
        <img src="../images/helps1.png" alt="">        
        <p>这个问题我们可以通过更改IE浏览器的安全设置来解决，很简单的设置，继续向下看吧</p>
        <hr>
        <p>1，打开IE浏览器，鼠标点击“工具”菜单，点击后将会带出多个子菜单，如图所示：</p>
        <img src="../images/helps0.png" alt="">
        <p>2，在弹出的下拉菜单中，选择“Internet 选项（O）”选项，选择后系统自动弹出一个名为“Internet 选项”的对话框，如图所示：</p>
        <img src="../images/helps2.jpg" alt=""><br>
        <img src="../images/helps3.jpg" alt="">
        <p>3，在弹出的对话中，点击安全选项，在选择区域中有四个选项，分别为“Internet“本地Intranet“受信任的站点”和“受限制的站点”。在此我们选择“Internet”区域 --> 自定义级别按钮 --> 找到 ActiveX控件和插件 --> 第三个选项中选择启用 --> 点击下面的确定按钮 --> 会弹出一个提示框，点击确定。如图所示：</p>
        <img src="../images/helps11.jpg" alt="" style='width: 100%'>
        <p>4，接着上一步，这次我们选择“本地Internet”区域，接下来的操作和上一步一样。如图所示：</p>
        <img src="../images/helps12.jpg" alt="" style='width: 100%'>
        <p>5，以上设置完成后，然后再在“Internet选项”对话中点击“确定”按钮，这样我们就完成了浏览器安全设置的更改。更改完成后，重启浏览器，然后再进行相应的网站或系统的操作就可了。</p>
        <img src="../images/helps10.jpg" alt="">
        <h4>※注意事项：</h4>
        <ul>
            <li>（1）设置选项选择完成后，一定要点击对话框的“确定”按钮来保存设置，否则设置不会生效；</li>
            <li>（2）设置完成后，需要重启浏览器设置才会生效（重启方法：关闭浏览器，然后再重新打开）。</li>
        </ul>
    </section>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.helps {
    width: 60%;
    margin: 0 auto;
    background: #fff;
    padding: 50px;
}
.helps{
    line-height: 30px;
}
.helps img {
    width: 450px;
    margin: 10px 0;
}
.helps h4 {
    color: red;
}
</style>
