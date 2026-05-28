const quickLinks = ["Home", "About", "Products", "Quality", "Contact"];
const categories = [
  "Optical Lenses",
  "Reading Glasses",
  "Prescription Glasses",
  "Blue Cut Lenses",
  "Progressive Lenses",
  "Optical Frames",
];

export default function Footer() {
  return (
    <footer className="bg-[#11151b] px-5 py-14 text-[#f7f1e6] sm:px-8 lg:px-10">
      {/* Footer section */}
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.25fr_0.7fr_0.9fr_0.9fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-full bg-[#f2e5bd] text-sm font-semibold text-[#19202a]">
              BB
            </span>
            <span>
              <span className="block text-base font-semibold tracking-[0.08em]">
                BILL BIRD
              </span>
              <span className="text-sm text-[#a9a294]">Optical Glass Studio</span>
            </span>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-6 text-[#c8c1b5]">
            Premium optical lenses, eyewear glass, frames, and support for
            professional fitting and dependable everyday clarity.
          </p>
          <div className="mt-6 flex gap-3">
            {["IG", "FB", "IN"].map((item) => (
              <a
                key={item}
                href="#home"
                className="grid size-10 place-items-center rounded-full border border-white/15 text-xs font-semibold transition hover:border-[#d7bd78] hover:text-[#d7bd78]"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold">Quick Links</h3>
          <div className="mt-5 space-y-3">
            {quickLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="block text-sm text-[#c8c1b5] transition hover:text-[#f7f1e6]"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold">Products</h3>
          <div className="mt-5 space-y-3">
            {categories.map((category) => (
              <a
                key={category}
                href="#products"
                className="block text-sm text-[#c8c1b5] transition hover:text-[#f7f1e6]"
              >
                {category}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold">Contact</h3>
          <div className="mt-5 space-y-3 text-sm leading-6 text-[#c8c1b5]">
            <p>+91 98765 43210</p>
            <p>inquiries@billbirdoptics.com</p>
            <p>Mumbai, Maharashtra</p>
            <p>Mon to Sat, 10:00 AM to 7:00 PM</p>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-[#a9a294] sm:flex-row sm:items-center sm:justify-between">
        <p>(c) 2026 Bill Bird Optics. All rights reserved.</p>
        <p>Premium optical glass products and eyewear solutions.</p>
      </div>
    </footer>
  );
}
