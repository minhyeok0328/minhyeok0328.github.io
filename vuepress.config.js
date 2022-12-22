import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
  lang: 'ko-KR',
  title: '김민혁 블로그',
  description: '개발 | 일상 등등 쓰고 있는 블로그',
  head: [['link', { rel: 'icon', href: 'https://user-images.githubusercontent.com/78744312/193326481-508c47c7-2456-49c0-89b8-f589cd35c3f7.png' }]],
  theme: defaultTheme({
    logo: 'https://user-images.githubusercontent.com/78744312/193326481-508c47c7-2456-49c0-89b8-f589cd35c3f7.png',
    navbar: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: '개발',
        link: '/dev/',
      },
      {
        text: '노가리',
        link: '/nogari/',
      },
    ],
    sidebar: [
      {
        text: '개발',
        link: '/dev/'
      },
      {
        text: '노가리',
        children: [
          {
            text: '첫 회사에서 퇴사를 하며..',
            link: '/nogari/escape-from-si',
          }
        ]
      },
    ]
  }),
})