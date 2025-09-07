"use client"

export default function SplineSection() {
  return (
    <section aria-label="Interactive 3D" className="relative bg-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="rounded-3xl overflow-hidden border border-[hsl(var(--border))] shadow-sm">
          <div className="relative h-[50vh] md:h-[70vh]">
            <iframe
              src="https://my.spline.design/claritystream-XMXpc1f1ZbR1Pfo8PVXj7dUi/"
              frameBorder={0}
              className="absolute inset-0 w-full h-full"
              title="Spline Animation"
              allow="fullscreen"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
