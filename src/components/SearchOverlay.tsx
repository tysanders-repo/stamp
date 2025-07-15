"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

const SearchOverlay = ({ children }: { children?: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchWord, setSearchWord] = useState("");

  useEffect(() => {
    const keyPressEvent = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      if (e.key === "/") {
        e.preventDefault();
        setIsOpen(true);
      }

      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
        setSearchWord("");
      }
    };

    window.addEventListener("keydown", keyPressEvent);
    return () => window.removeEventListener("keydown", keyPressEvent);
  }, [isOpen]);

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 backdrop-blur-[2px] bg-white/20" />
        <Dialog.Content
          className="fixed top-[20%] left-1/2 -translate-x-1/2 bg-white rounded-xl p-6 shadow-xl w-[90vw] max-w-md z-50"
        >
          <Dialog.Title asChild>
            <VisuallyHidden.Root>Search</VisuallyHidden.Root>
          </Dialog.Title>
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default SearchOverlay;
