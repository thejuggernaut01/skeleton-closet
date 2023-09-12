import "./globals.css";

import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Skeleton Closet: Horizon of Revolution",
  description: "A rebellion against the familiar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
