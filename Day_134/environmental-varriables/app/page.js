export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="text-xl flex justify-center items-center gap-3">
        <h1>These environmental varriables are loaded from .env file</h1>
        <h1>There are two types of environmental varriables </h1>
        <h2>
          1. Public Environmental Varriables - Visiable Only In Server Side
        </h2>
        <h3>2. Private Environmental Varriables - Visible In Client Side</h3>
        <p>
          The Client Side Environmental Varriable Is{" - "}
          {process.env.NEXT_PUBLIC_SECRET}
        </p>
        <p>
          The Server Side Environmental Varriable Is - {process.env.SECRET} (not
          shown because the private environmental varriables are only Visible to
          the server side)
        </p>
      </div>
      <div className="my-3 flex justify-center items-center gap-3">
        <h1>
          These environmental varriables are loaded from .env.local file which
          is loaded at first
        </h1>
        <br />
        <h2>
          But this file is preferable only in development environment not in
          production environment
        </h2>
        <br />
        <p>It also works as the above demonstration</p>
      </div>
    </div>
  );
}
