"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function ScratchCard({
  cashback,
  onScratchComplete,
}: {
  cashback: number;
  onScratchComplete: () => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [scratched, setScratched] = useState(false);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = 350;
    canvas.height = 350;
    const context = canvas.getContext("2d");
    if (!context) return;

    // Fill canvas with gray
    context.fillStyle = "#2dd4bf"; // Tailwind emrald-400
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.globalCompositeOperation = "destination-out";
    setCtx(context);
  }, []);

  const handleScratch = (e: React.MouseEvent | React.TouchEvent) => {
    if (!ctx) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const isTouch = "touches" in e;
    const x = isTouch
      ? e.touches[0].clientX - rect.left
      : (e as React.MouseEvent).clientX - rect.left;
    const y = isTouch
      ? e.touches[0].clientY - rect.top
      : (e as React.MouseEvent).clientY - rect.top;

    ctx.beginPath();
    ctx.arc(x, y, 35, 0, Math.PI * 2);
    ctx.fill();

    // Calculate how much has been scratched
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let transparentPixels = 0;
    for (let i = 3; i < imageData.data.length; i += 4) {
      if (imageData.data[i] === 0) transparentPixels++;
    }
    const scratchedPercentage =
      (transparentPixels / (canvas.width * canvas.height)) * 100;
    if (scratchedPercentage > 40) {
      setScratched(true);
      onScratchComplete(); // Notify parent component
    }
  };

  return (
    <Card className="w-[300px] h-[300px] relative overflow-hidden shadow-xl rounded-2xl">
      <CardContent className="flex items-center justify-center h-full bg-yellow-200 text-xl font-bold">
        🎉 You won ₹{cashback}!
      </CardContent>
      {!scratched && (
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full"
          onMouseDown={handleScratch}
          onMouseMove={(e) => e.buttons === 1 && handleScratch(e)}
          onTouchMove={handleScratch}
        />
      )}
    </Card>
  );
}