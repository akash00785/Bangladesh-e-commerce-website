import AccountSidebar from "@/components/account/AccountSidebar";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-muted/30">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:gap-8 lg:px-4 lg:py-10">
          <AccountSidebar />
          <main className="min-w-0 flex-1">{children}</main>
        </div>
      </div>
    </div>
  );
}
