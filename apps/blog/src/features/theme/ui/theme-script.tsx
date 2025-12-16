export function ThemeScript() {
  const script = `
    (function() {
      const theme = localStorage.getItem('theme') || 'system';
      const isDark = theme === 'dark' ||
        (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
      document.documentElement.classList.toggle('dark', isDark);
    })();
  `;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
