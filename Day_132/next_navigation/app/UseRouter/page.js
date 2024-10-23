"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const UseRouter = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 2000);
  }, []);

  return (
    <div>Wait for 2 seconds to see the working of useRouter Hook in NextJs</div>
  );
};

export default UseRouter;
