"use client";

import { SkeletonTheme } from "react-loading-skeleton";
import { NextUIProvider } from "@nextui-org/react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ThemeConfig, ConfigProvider, theme } from "antd";
import MUITheme from "@/app/mui-theme";
import { ThemeProvider } from "@mui/material";

import { Poppins } from "next/font/google";
import { SocketProvider } from "@/app/context/SocketContext";

import "./globals.css";

import "@/assets/fonts/fa/css/all.min.css";
import LayoutContent from "./LayoutContent";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const customTheme: ThemeConfig = {
    algorithm: theme.darkAlgorithm,
    token: {
      colorPrimary: "#dc2626",
    },
    components: {
      Modal: {
        contentBg: "#000000",
      },
      Table: {
        headerBg: "transparent",
        colorBgContainer: "transparent",
      },
    },
  };

  return (
    <html lang="en">
      <body
        className={`min-h-screen h-fit overflow-x-hidden ${poppins.className}`}
        style={{
          background:
            "linear-gradient(121.56deg, #5D71BA 8.34%, #3B53AD 78.63%)",
        }}
      >
        <SkeletonTheme baseColor="#CCD0E08F" highlightColor="#121824">
          <ThemeProvider theme={MUITheme}>
            <NextUIProvider>
              <ConfigProvider theme={customTheme}>
                <AntdRegistry>
                  <SocketProvider>
                    <LayoutContent>{children}</LayoutContent>
                  </SocketProvider>
                </AntdRegistry>
              </ConfigProvider>
            </NextUIProvider>
          </ThemeProvider>
        </SkeletonTheme>
      </body>
    </html>
  );
}
