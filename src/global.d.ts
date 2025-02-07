// / <reference types="vite/client" />

declare module '*.module.scss' {
  const styles: Record<string, string>;
  export default styles;
}
