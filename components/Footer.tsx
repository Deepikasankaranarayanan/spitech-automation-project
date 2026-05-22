export default function Footer() {
  return (
    <footer className="bg-[#111827] text-white pt-24 pb-10 px-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Company */}
        <div>

          <h2 className="text-3xl font-bold text-purple-400">
            SPi-Tech
          </h2>

          <p className="mt-6 text-gray-400 leading-7">
            Advanced surveillance, automation and enterprise
            security solutions for modern businesses.
          </p>

        </div>

        {/* Links */}
        <div>

          <h3 className="text-xl font-semibold">
            Quick Links
          </h3>

          <div className="mt-6 flex flex-col gap-4 text-gray-400">

            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Gallery</a>
            <a href="#">Contact</a>

          </div>

        </div>

        {/* Services */}
        <div>

          <h3 className="text-xl font-semibold">
            Services
          </h3>

          <div className="mt-6 flex flex-col gap-4 text-gray-400">

            <p>CCTV Surveillance</p>
            <p>Biometric Access</p>
            <p>Networking</p>
            <p>Fire Alarm Systems</p>
            <p>Automation</p>

          </div>

        </div>

        {/* Contact */}
        <div>

          <h3 className="text-xl font-semibold">
            Contact
          </h3>

          <div className="mt-6 text-gray-400 space-y-4">

            <p>Chennai & Tenkasi</p>

            <p>
              +91 7540039521
            </p>

            <p>
              spitechautomation@gmail.com
            </p>

          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 mt-16 pt-8 text-center text-gray-500">

        © 2026 SPi-Tech Automation. All Rights Reserved.

      </div>

    </footer>
  );
}