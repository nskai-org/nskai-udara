"use client";

import { useRef, useCallback } from "react";
import QRCode from "react-qr-code";
import { toPng } from "html-to-image";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface VibeCardProps {
  username: string;
  firstName: string;
  lastName: string;
  school: string;
  rank: string;
}

export function VibeCard({
  username,
  firstName,
  lastName,
  school,
  rank,
}: VibeCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const downloadCard = useCallback(() => {
    if (cardRef.current === null) {
      return;
    }

    toPng(cardRef.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = `nskai-vibe-${username}.png`;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.error(err);
      });
  }, [username]);

  const referralLink = `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3001"}/register?ref=${username}`;

  return (
    <div className="flex flex-col gap-4 w-full max-w-sm mx-auto">
      {/* The Printable Card Area */}
      <div
        ref={cardRef}
        className="relative overflow-hidden bg-black aspect-3/4 border border-white/20 flex flex-col justify-between p-6 select-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 10%, #222 0%, #000 70%)",
        }}
      >
        {/* Holographic Overlays */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/20 blur-3xl rounded-full translate-x-10 -translate-y-10" />
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-brand-red/20 blur-3xl rounded-full -translate-x-10 translate-y-10" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[1rem_1rem] bg-repeat pointer-events-none" />

        {/* Header */}
        <div className="relative z-10 flex justify-between items-start">
          <div>
            <h3 className="font-heading font-black text-2xl uppercase tracking-tighter text-white">
              NSKAI <span className="text-brand-orange">|</span>
            </h3>
            <p className="text-[10px] uppercase tracking-widest text-zinc-400">
              Ambassador Access
            </p>
          </div>
          <div className="text-right">
            <span className="block text-2xl font-heading font-black text-brand-orange/50 uppercase tracking-widest">
              {rank}
            </span>
          </div>
        </div>

        {/* Center: QR Code */}
        <div className="relative z-10 flex justify-center my-4">
          <div className="absolute top-4 right-4 animate-pulse">
            <div className="h-2 w-2 rounded-full bg-brand-orange shadow-[0_0_10px_var(--color-brand-orange)]" />
          </div>
          <div className="bg-white p-3 rounded-sm shadow-xl shadow-brand-orange/10">
            <QRCode
              value={referralLink}
              size={140}
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              viewBox={`0 0 256 256`}
            />
          </div>
        </div>

        {/* Footer: User Details */}
        <div className="relative z-10 space-y-1">
          <div className="border-t border-white/20 pt-4">
            <div
              className={`h-8 w-24 bg-linear-to-r from-transparent via-brand-red/20 to-transparent transform rotate-45 animate-shimmer`}
            />
            <p className="text-[10px] uppercase text-zinc-500 mb-0.5">
              Ambassador
            </p>
            <h2 className="font-heading text-2xl font-bold uppercase truncate">
              {firstName} {lastName}
            </h2>
          </div>
          <div>
            <p className="text-[10px] uppercase text-zinc-500 mb-0.5">Sector</p>
            <p className="font-mono text-sm uppercase truncate text-brand-orange">
              {school}
            </p>
          </div>
          <div className="flex justify-between items-end pt-2">
            <div>
              <p className="text-[10px] uppercase text-zinc-500 mb-0.5">
                Codename
              </p>
              <p className="font-mono text-xs text-zinc-300">@{username}</p>
            </div>
            {/* Decorative Barcode */}
            <div className="flex gap-[2px] h-6 opacity-50">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className={`w-[2px] h-full ${i % 2 === 0 ? "bg-white" : "bg-transparent"}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Holo border effect */}
        <div className="absolute inset-0 border border-white/10 pointer-events-none" />
      </div>

      {/* Actions */}
      <Button
        onClick={downloadCard}
        variant="outline"
        className="w-full border-white/20 hover:bg-white/10 text-white"
      >
        <Download className="mr-2 h-4 w-4" /> Download Card
      </Button>
    </div>
  );
}
