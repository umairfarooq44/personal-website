"use client";

import dynamic from "next/dynamic";

// Client only: the lap is computed in the browser, and this keeps uPlot out of
// the initial bundle.
const TelemetryDemo = dynamic(() => import("./TelemetryPlayback"), {
  ssr: false,
  loading: () => <div className="h-[42rem] rounded-md border border-rule bg-surface md:h-[34rem]" />,
});

export default TelemetryDemo;
