import { Outlet } from "react-router-dom";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navigation />
      <main className="flex-1 pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
