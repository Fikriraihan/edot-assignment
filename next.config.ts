import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL(
        "https://st5.depositphotos.com/36563516/70380/i/1600/depositphotos_703806038-stock-photo-small-toy-red-tractor-large.jpg"
      ),
      new URL(
        "https://static5.depositphotos.com/1032932/423/i/950/depositphotos_4231002-stock-photo-studio-shot-of-a-fish.jpg"
      ),
      new URL(
        "https://static7.depositphotos.com/1050070/691/i/950/depositphotos_6910790-stock-photo-mother-and-child-walking-on.jpg"
      ),
    ],
  },
};

export default nextConfig;
