import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Mario Franco | Full Stack Developer",
  description: "An analytic Full Stack Web developer from Colombia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
