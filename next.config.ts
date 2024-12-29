module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.NEXT_PUBLIC_SUPABASE_HOST,
        pathname: '/storage/v1/object/public/assets/images/**',
      },
    ],
    deviceSizes: [
      320, 360, 384, 440, 640, 750, 828, 1024, 1200, 1920, 2048, 3840,
    ],
    imageSizes: [
      316, 356, 380, 436, 636, 746, 824, 1020, 1196, 1916, 2044, 3836,
    ],
  },
}
