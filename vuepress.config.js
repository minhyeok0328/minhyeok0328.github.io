import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
  lang: 'ko-KR',
  title: '김민혁 블로그',
  description: '개발 | 일상 등등 쓰고 있는 블로그',
  head: [['link', { rel: 'icon', href: 'https://user-images.githubusercontent.com/78744312/193326481-508c47c7-2456-49c0-89b8-f589cd35c3f7.png' }]],
  theme: defaultTheme({
    logo: 'https://user-images.githubusercontent.com/78744312/193326481-508c47c7-2456-49c0-89b8-f589cd35c3f7.png',
    toggleSidebar: 'toggle',
    navbar: [
      {
        text: 'github',
        link: 'https://github.com/minhyeok0328',
      },
      // {
      //   text: '노가리',
      //   link: '/nogari/',
      // },
    ],
    sidebar: [
      {
        text: 'javascript',
        collapsible: true,
        children: [
          {
            text: '실행 컨텍스트',
            link: '/js/execution-context',
          },
        ],
      },
    ],
  }),
})