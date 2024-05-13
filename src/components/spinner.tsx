import { LoaderCircle } from "lucide-react";

export default function Spinner() {
  return (
    <div className="flex items-center justify-center animate-spin">
      <LoaderCircle />
    </div>
  );
}
