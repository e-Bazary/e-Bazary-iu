/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: process.env.API_URL,
  },
  images: {
    domains: ["res.cloudinary.com", "pngimg.com"],
  },
};

export default nextConfig;
