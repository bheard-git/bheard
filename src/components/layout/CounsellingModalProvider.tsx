"use client";

import { createContext, useCallback, useMemo, useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { HeroCounsellingForm } from "@/components/sections/home/HeroCounsellingForm";

export interface CounsellingModalOptions {
  defaultExam?: string;
}

interface CounsellingModalContextValue {
  isOpen: boolean;
  openCounsellingModal: (options?: CounsellingModalOptions) => void;
  closeCounsellingModal: () => void;
}

export const CounsellingModalContext = createContext<CounsellingModalContextValue | null>(null);

export function CounsellingModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [defaultExam, setDefaultExam] = useState("");

  const openCounsellingModal = useCallback((options?: CounsellingModalOptions) => {
    setDefaultExam(options?.defaultExam ?? "");
    setIsOpen(true);
  }, []);

  const closeCounsellingModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const value = useMemo(
    () => ({ isOpen, openCounsellingModal, closeCounsellingModal }),
    [isOpen, openCounsellingModal, closeCounsellingModal]
  );

  return (
    <CounsellingModalContext.Provider value={value}>
      {children}
      <Modal
        isOpen={isOpen}
        onClose={closeCounsellingModal}
        title="Book Your Free Counselling"
        className="max-w-md"
      >
        <p className="mb-4 text-body-sm text-text-muted">
          Our experts will help you choose the right course.
        </p>
        <HeroCounsellingForm
          key={defaultExam || "default"}
          variant="modal"
          showHeader={false}
          defaultExam={defaultExam}
        />
      </Modal>
    </CounsellingModalContext.Provider>
  );
}
