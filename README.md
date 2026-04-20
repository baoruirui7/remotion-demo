# Remotion Demo Project

这是一个标准的 Remotion 动画项目，基于官方 `helloworld` 模板创建。

## 快速开始

1. **安装依赖** (已完成):
   ```bash
   npm install
   ```

2. **启动预览**:
   在本地开发时，运行以下命令启动 Remotion Studio 预览窗口：
   ```bash
   npm start
   ```
   或者
   ```bash
   npm run dev
   ```

3. **构建 bundle**:
   如果需要导出或部署，可以运行构建命令：
   ```bash
   npm run build
   ```

## 项目结构

- `src/Root.tsx`: 注册视频 Composition 的入口。
- `src/HelloWorld.tsx`: 核心动画逻辑，包含文本飞入、React Logo 旋转等示例。
- `src/HelloWorld/`: 存放具体的动画组件（Title, Subtitle, Logo 等）。

## 提示

鲍老师，您可以随时修改 `src/HelloWorld.tsx` 中的代码来观察动画变化。Remotion 支持 React Hooks 和所有的 Web 技术。