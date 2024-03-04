/** @type {import('next').NextConfig} */
// import path from 'path'
const path = require('path')
const PROTO_PATH = path.join(process.cwd(), 'src/protos');
const nextConfig = {
    compiler: {
      // Enables the styled-components SWC transform
      styledComponents: true,
    },
    async headers() {
      return [
          {
              // matching all API routes
              source: "/api/:path*",
              headers: [
                  { key: "Content-Type", value: "application/grpc-web-text" },
                  { key: "Access-Control-Allow-Credentials", value: "true" },
                  { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
                  { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
                  { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
              ]
          }
      ]
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // 프로토 파일이 있는 디렉토리를 Next.js 빌드 구성에 추가
      config.resolve.modules.push(PROTO_PATH);
    }
    return config;
  },
}
module.exports = nextConfig