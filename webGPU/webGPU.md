WebGPU
================
## 认识webGPU
    WebGL 中上下文是 JavaScript 和 GPU 交互的重要桥梁，几乎所有的 WebGL 接口都是通过上下文来实现的；但是在 WebGPU 标准中，由于摒弃了固定渲染管线，并且从理念和设计哲学上高度借鉴 DirectX 12、Vulkan、Metal 这三大现代图形标准，所以 WebGPU 的上下文将不再承担如此繁重的工作，而仅仅成为和 HTML <canvas> 元素交互的桥梁


    + WebGPU 渲染语言派系
         Apple 为代表的使用基于文本的 WSL 语言作为着色器语言
         Google 为代表的使用 GLSL 4.5 并编译成二进制的 SPIR-V 作为着色器语言
    + GPUAdapter 
        一个适配器代表了操作系统中一个 WebGPU 的实现。每个适配器标志着一个硬件加速器（例如 GPU 或 CPU）实例和一个浏览器在该硬件加速器之上对 WebGPU 的实现。
        —— 摘自 WebGPU 标准

当我们未来在生产环境中，可以自由的根据应用的不同情况，来选择不同的显示适配器，这也是在 WebGL 中做不到的。
