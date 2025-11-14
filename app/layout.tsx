import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import en_GB from "antd/locale/en_GB";
import "./globals.css";
import dayjs from "dayjs";
import "dayjs/locale/en";
import weekday from "dayjs/plugin/weekday";
import localeData from "dayjs/plugin/localeData";

dayjs.extend(weekday);
dayjs.extend(localeData);
dayjs.locale("en");

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Tripzy - Book Bus, Hotel & Flights",
  description: "Search and book bus tickets, hotels, and flights",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunitoSans.variable} antialiased`}>
        <AntdRegistry>
          <ConfigProvider
            locale={en_GB}
            theme={{
              token: {
                colorPrimary: "#19C0FF",
                borderRadius: 8,
                fontFamily: "var(--font-nunito-sans)",
              },
              components: {
                Button: {
                  colorPrimary: "#19C0FF",
                  controlHeightLG: 52,
                  paddingBlockLG: 16,
                  paddingInlineLG: 20,
                  contentFontSizeLG: 14,
                },
                Input: {
                  inputFontSizeLG: 14,
                  controlHeightLG: 52,
                  fontSizeLG: 14,
                },
                InputNumber: {
                  inputFontSizeLG: 14,
                  controlHeightLG: 52,
                  fontSizeLG: 14,
                  controlWidth: 149,
                },
                Select: {
                  singleItemHeightLG: 52,
                  fontSizeLG: 14,
                },
                DatePicker: {
                  controlHeightLG: 52,
                  fontSizeLG: 14,
                },
              },
            }}
          >
            {children}
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
