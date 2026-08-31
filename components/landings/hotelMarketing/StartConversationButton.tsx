"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, MessageCircle, X } from "lucide-react";

import LandingLeadForm from "@/components/site/HotelMarketingForm";

type StartConversationButtonProps = {
  className?: string;
  children?: React.ReactNode;
};

export default function StartConversationButton({
  className = "",
  children = "Start a conversation",
}: StartConversationButtonProps) {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
      document.body.classList.add("overflow-hidden");
    }

    if (!open && dialog.open) {
      dialog.close();
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [open]);

  const closeDialog = () => {
    setOpen(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={className}
      >
        {children}

        <ArrowRight
          className="h-4 w-4"
          aria-hidden
        />
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby="hotel-lead-dialog-title"
        onCancel={closeDialog}
        onClick={(event) => {
          if (event.target === dialogRef.current) {
            closeDialog();
          }
        }}
        className="
          fixed
          inset-0
          m-auto
          max-h-[92dvh]
          w-[calc(100%-1.5rem)]
          max-w-[580px]
          overflow-y-auto
          rounded-2xl
          border
          border-outline-variant/70
          bg-white
          p-0
          shadow-[0_32px_100px_-30px_rgba(0,0,0,0.55)]
          backdrop:bg-neutral-950/45
          backdrop:backdrop-blur-[2px]
        "
      >
        <div className="relative p-4 sm:p-6">
          <div className="absolute top-2 right-2 flex items-start justify-between gap-4">
            <button
              type="button"
              onClick={closeDialog}
              aria-label="Close conversation form"
              className="
                inline-flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-outline-variant
                text-neutral-700
                transition-colors
                hover:border-primary
                hover:text-primary
              "
            >
              <X
                className="h-4 w-4"
                aria-hidden
              />
            </button>
          </div>

          <LandingLeadForm
            sourcePage="/hotel-marketing"
          />
        </div>
      </dialog>
    </>
  );
}