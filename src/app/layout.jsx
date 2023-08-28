import Header from "@/components/Header";
import "./globals.css";
import Providers from "./Providers";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/* Header */}
          <Header />
          {/* NavBar */}
          <Navbar /> 
          {/* Search Box */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
