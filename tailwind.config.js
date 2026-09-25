module.exports = {
  content: [
    './_drafts/**/*.html',
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/**/*.md',
    './pages/**/*.md',
    './*.md',
    './*.html',
  ],
  theme: {
    extend: {
      colors: {
        site: {
          bg:          '#0C0906',
          surface:     '#141008',
          'surface-2': '#1C160E',
          border:      '#2C2016',
          text:        '#F0E8D8',
          muted:       '#8A7860',
          accent:      '#C87A30',
          'accent-2':  '#A05E20',
          success:     '#6E9A50',
          green:       '#6E9A50',
        },
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body:    ['DM Sans', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
      typography: (theme) => ({
        site: {
          css: {
            '--tw-prose-body':         theme('colors.site.muted'),
            '--tw-prose-headings':     theme('colors.site.text'),
            '--tw-prose-lead':         theme('colors.site.muted'),
            '--tw-prose-links':        theme('colors.site.accent'),
            '--tw-prose-bold':         theme('colors.site.text'),
            '--tw-prose-counters':     theme('colors.site.muted'),
            '--tw-prose-bullets':      theme('colors.site.accent-2'),
            '--tw-prose-hr':           theme('colors.site.border'),
            '--tw-prose-quotes':       theme('colors.site.text'),
            '--tw-prose-quote-borders':theme('colors.site.border'),
            '--tw-prose-captions':     theme('colors.site.muted'),
            '--tw-prose-code':         theme('colors.site.accent'),
            '--tw-prose-pre-code':     theme('colors.site.text'),
            '--tw-prose-pre-bg':       theme('colors.site.surface'),
            '--tw-prose-th-borders':   theme('colors.site.border'),
            '--tw-prose-td-borders':   theme('colors.site.border'),
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
