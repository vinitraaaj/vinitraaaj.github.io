import { ChevronLeft, ChevronRight, Copy, Share2 } from "lucide-react";

export function WindowChrome() {
  return (
    <div className="window-chrome" aria-hidden="true">
      <div className="window-controls">
        <i />
        <i />
        <i />
        <ChevronLeft size={16} />
        <ChevronRight size={16} />
      </div>
      <div className="window-title">Vinit Raj · Portfolio</div>
      <div className="window-tools">
        <Share2 size={15} />
        <span>+</span>
        <Copy size={15} />
      </div>
    </div>
  );
}
