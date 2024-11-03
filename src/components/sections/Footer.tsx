export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 border-t border-gray-700">
      {/* Upper Footer */}
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between">
        {/* Address Section */}
        <div className="mb-6 md:mb-0">
          <h4 className="text-lg font-semibold text-white">Wyoming</h4>
          <p className="mt-2">VERDIAN APEX GROUP</p>
          <p>30 N Gould St #46510 Sheridan, WY, 82801, USA</p>
        </div>

        {/* Work Inquiries Section */}
        <div>
          <h4 className="text-lg font-semibold text-white">Enquires</h4>
          <p className="mt-2">Email us for any enquires</p>
          <a
            href="mailto:info@justanholding.co.uk"
            className="text-gray-500 underline"
          >
            info@verdianapex.com
          </a>
        </div>
      </div>

      {/* Lower Footer */}
      <div className=" mt-6 pt-4 text-center text-sm text-gray-500">
        © 2024-2025{" "}
        <span className="font-semibold text-white"> VERIDIAN APEX GROUP</span>
      </div>
    </footer>
  );
}
