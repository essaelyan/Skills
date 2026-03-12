/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "ui.aceternity.com" },
      { protocol: "https", hostname: "flagcdn.com" },
      { protocol: "https", hostname: "tempfile.redpandaai.co" },
    ],
  },
};

export default nextConfig;
