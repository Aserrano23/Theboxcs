/* eslint-disable @typescript-eslint/no-explicit-any */
import { Footer } from "./footer";
import { Navbar } from "./navbar";
import { ScrollToTop } from "./scrollToTop";

export const Layout = ({ children }: any) => {
  return (
    <div className="w-full font-montserrat">
      <Navbar />
      <ScrollToTop />
      <>{children}</>
      <Footer />
    </div>
  );
};
