/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.tenor.com",
        port: "",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "static.wixstatic.com",
        port: "",
        pathname: "/media/**"
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        port: "",
        pathname: "/**"
      }
    ]
  }
}

module.exports = nextConfig
