"use client"

import { Inter } from "next/font/google";
import "./globals.css";
import "swiper/css";
import {
  QueryClient,
  QueryClientProvider,
} from "react-query";

const queryClient = new QueryClient();

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <QueryClientProvider client={queryClient}>
        <body className={`bg-[rgb(246,250,251)] lg:bg-white ${inter.className}`}>{children}</body>
      </QueryClientProvider>
    </html>
  );
}
