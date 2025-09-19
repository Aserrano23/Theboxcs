/* eslint-disable @typescript-eslint/no-explicit-any */
import { Footer } from "./footer";
import { Navbar } from "./navbar";
import { ScrollToTop } from "./scrollToTop";
import { PolicyModal } from "./policy-modal";

export const Layout = ({ children }: any) => {
  return (
    <div className="w-full font-montserrat">
      <Navbar />
      <PolicyModal />
      <ScrollToTop />
      <>{children}</>
      <Footer />
    </div>
  );
};
