<div>
<img width="20%" src='https://raw.githubusercontents.com/yesmore/img/main/img/aka.png'/>
</div>

# aka.js - Quickly generate static sites

## Feature

#EC63AA
...

## Development and debug

### 开发中调试命令

```bash
# complile project (run tsc -w)
pnpm dev

# then debug aka-cli (not necessary)
aka dev docs 
```

### 打包 aka.js

```bash
pnpm build
```

### ESLint

```bash
# check code
pnpm lint
# check code and fix
pnpm lint:fix
```

### 测试

```bash
# 单元测试
pnpm test:unit
# or watch it 
pnpm test:watch
# or with vitest UI
pnpm test:ui

# e2e
# 1.prepare env
pnpm prepare:e2e
# 2.then test it
pnpm test:e2e
```

## 如何使用 aka.js

> Regist all commands here: src/node/cli.ts

在docs目录下编辑你的项目，并开启调试(支持hmr):

```bash
aka dev docs 
# then visit http://127.0.0.1:5173/
```

### Build
```bash
# build ssr
aka build docs

# then start serve to preview
cd docs/build && serve . 
# or "pnpm preview"
```

## License

aka.js is open source software licensed as [GPL](LICENSE).