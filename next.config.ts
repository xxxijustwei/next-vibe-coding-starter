import { execSync } from "node:child_process";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    GIT_COMMIT: execSync("git rev-parse HEAD").toString().trim(),
  },
  output: "standalone",
  serverExternalPackages: ["pino", "pino-pretty"],
};

export default nextConfig;
