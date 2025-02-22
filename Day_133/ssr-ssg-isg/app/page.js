export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      A Basic Static Page Which will be Pre-rendered in Production Build.You can
      Check it using npm run build command in your development environment.
    </div>
  );
}
export const metadata = {
  title: "SSG - Static Site Generation",
  description:
    "A Basic Static Page Which will be Pre-rendered in Production Build",
  keywords: "Static Page, Pre-rendered, Production Build",
};
