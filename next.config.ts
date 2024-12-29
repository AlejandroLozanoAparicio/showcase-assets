module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.NEXT_PUBLIC_SUPABASE_HOST,
        pathname: '/storage/v1/object/public/assets/images/**',
      },
    ],
  },
}
