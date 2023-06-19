module.exports = {
  title: 'CSEP',
  tagline: 'CSEP very good',
  favicon: 'img/favicon.svg',
  url: 'https://csep-document.vercel.app/',
  baseUrl: '/',
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  // organizationName: 'easyops-cn', // Usually your GitHub org/user name.
  // projectName: 'docusaurus-search-example', // Usually your repo name.
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  themeConfig: {
    navbar: {
      title: 'Trang chủ',
      logo: {
        alt: 'Trang Chu Tai Lieu',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'CSEP (Quản lý Tài Sản)',
          position: 'left',
        },
        { to: 'blog', label: 'Về chúng tôi', position: 'left' },
        {
          href: "https://demoqlts.hpt.vn/sm/index.do",
          label: 'QLTS',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `© ${new Date().getFullYear()} - Bản quyền thuộc về Công ty Cổ phần Dịch vụ Công nghệ Tin học HPT.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themes: [
    [
      "@easyops-cn/docusaurus-search-local",
      {
        hashed: true,
        language: ["en"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      }
    ]
  ]
};
