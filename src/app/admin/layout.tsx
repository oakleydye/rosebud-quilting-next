import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../(rosebud-quilting)/globals.css";
import "@/styles/fonts.css";
import { AdminSidebar } from "./_components/admin-sidebar";
import { AdminHeader } from "./_components/admin-header";
import { AdminAuthProvider } from "./_components/admin-auth-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Admin Dashboard - Rosebud Quilting",
  description: "Manage your quilting business",
  robots: "noindex, nofollow",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AdminAuthProvider>
          <div className="min-h-screen bg-gray-50">
            <AdminHeader />
            <div className="flex">
              <AdminSidebar />
              <main className="flex-1 ml-64 pt-16">
                <div className="p-6">
                  {children}
                </div>
              </main>
            </div>
          </div>
        </AdminAuthProvider>
      </body>
    </html>
  );
}
