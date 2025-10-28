import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { ResponsiveDebug } from "@/hooks/use-responsive";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1">{children}</main>
      <Footer />
      <ResponsiveDebug />
    </div>
  );
}
