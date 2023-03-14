import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

export default function OtherPage() {
  const router = useRouter();

  return (
    <div>
      <main>
        <button onClick={() => router.push("/")}>go to home</button>
      </main>
    </div>
  );
}
