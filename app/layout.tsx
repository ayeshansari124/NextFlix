import "./globals.css";

export const metadata = {
  title: "Netflix India – Watch TV Shows Online, Watch Movies Online",
  icons: {
    icon: "/images/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
