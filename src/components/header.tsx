import Link from "next/link";
import UserInfo from "./user-info";

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-gray-200">
      <nav className="py-4 px-6">
        <ul className="flex space-x-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/preorder">Preorder</Link>
          </li>
        </ul>
      </nav>
      <div className="p-6">
        <UserInfo />
      </div>
    </header>
  );
}
