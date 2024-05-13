"use client";
import {
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  Drawer as SHDrawer,
} from "@/components/ui/drawer";
import { useRouter } from "next/navigation";

export default function Drawer({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  return (
    <SHDrawer
      open
      disablePreventScroll
      onOpenChange={open => {
        !open && router.back();
      }}
    >
      <DrawerContent>
        {children}
        <DrawerFooter>
          <DrawerClose>close</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </SHDrawer>
  );
}
