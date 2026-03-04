import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'], // SSR(CJS)와 CSR(ESM) 모두 대응
  dts: true, // 타입 정의 파일 생성
  splitting: false,
  sourcemap: true,
  clean: true,
  minify: true,
  external: ['react', 'react-dom'], // 번들에 포함하지 않음
});