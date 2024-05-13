import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Flagship() {
  return (
    <div className="flex p-6 justify-normal gap-8">
      <div>
        <Image
          className="rounded-xl"
          src="/placeholder.png"
          alt="Flagship"
          width="200"
          height="200"
        />
      </div>
      <div>
        <h3 className="font-semibold">Acme Product</h3>
        <Link href="/preorder">
          <span className="flex items-center gap-2 py-4">
            Preorder <ArrowRight size="16" />{" "}
          </span>
        </Link>
      </div>
    </div>
  );
}
