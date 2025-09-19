/* eslint-disable @typescript-eslint/no-explicit-any */
import { Footer } from "./footer";
import { Navbar } from "./navbar";
import { ScrollToTop } from "./scrollToTop";

// NUEVO
import { PolicyModal } from "./policy-modal";
import { Analytics } from "./seo/analytics";
import { DefaultSeo } from "./seo/default-seo";
import { RouteSeo } from "./seo/route-seo";
import { GaPageViews } from "./seo/analytics-pageview";

export const Layout = ({ children }: any) => {
  return (
    <div className="w-full font-montserrat">
      <Navbar />
      {/* SEO por defecto + cookies + analytics */}
      <DefaultSeo />
      <RouteSeo />
      <PolicyModal />
      <Analytics />
      <GaPageViews />
      <ScrollToTop />
      <>{children}</>
      <Footer />
    </div>
  );
};
