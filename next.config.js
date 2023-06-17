/** @type {import('next').NextConfig} */
const nextConfig = {
  // async redirects() {
  //   return [
  //     {
  //       source: "/detail_freelancer/:id",
  //       destination: "/detail_freelancer/[id]",
  //       permanent: true,
  //     },
  //   ];
  // },
  // i18n: {
  //   locales: ["en", "vi"],
  //   defaultLocale: "en",
  // },
  output: 'export',
  images: {
    unoptimized: true,
    // domains: ['picsum.photos'],
  },
};

module.exports = nextConfig;
