"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Home() {
  const PathName = usePathname();
  return (
    <div>
      <div>
        All of the hooks inside this Next APP must be used inside of a client
        component.
      </div>
      This is the path: {PathName}
      <Link className="block" href="/SearchParams?param=about&hello=world">
        Demonstrate useSearchParams Hook
      </Link>
      <Link className="block" href="/UseRouter">
        Demonstrate useRouter Hook
      </Link>
      <Link className="block" href="/UseParams/HelloWorld">
        Demonstrate useParams Hook
      </Link>
    </div>
  );
}
