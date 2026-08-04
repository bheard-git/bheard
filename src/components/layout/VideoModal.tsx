"use client";

import { useEffect, useState } from "react";
import { Modal } from "@/components/ui/Modal";

export function StoriesModal() {
    const [videoId, setVideoId] =
        useState<string | null>(null);

    useEffect(() => {
        function click(e: MouseEvent) {
            const card = (e.target as HTMLElement).closest(
                "[data-youtube-id]"
            );

            if (!card) return;

            setVideoId(
                card.getAttribute("data-youtube-id")
            );
        }

        document.addEventListener("click", click);

        return () =>
            document.removeEventListener(
                "click",
                click
            );
    }, []);

    return (
        <Modal
            isOpen={!!videoId}
            onClose={() => setVideoId(null)}
            className="max-w-5xl"
            title=""
        >
            {videoId && (
                <div className="aspect-video overflow-hidden rounded-xl">
                    <iframe
                        className="h-full w-full"
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    />
                </div>
            )}
        </Modal>
    );
}