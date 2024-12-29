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
    imageSizes: [16, 32, 48, 64, 96, 128, 160, 180, 192, 220, 256, 300],
  },
}
