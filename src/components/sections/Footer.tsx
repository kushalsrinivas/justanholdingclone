export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 border-t border-gray-700">
      {/* Upper Footer */}
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between">
        {/* Address Section */}
        <div className="mb-6 md:mb-0">
          <h4 className="text-lg font-semibold text-white">London</h4>
          <p className="mt-2">Just an Holding LTD</p>
          <p>71-75 Shelton Street, Covent Garden, WC2H 9JQ</p>
          <p>London, United Kingdom</p>
        </div>

        {/* Work Inquiries Section */}
        <div>
          <h4 className="text-lg font-semibold text-white">Work inquiries</h4>
          <p className="mt-2">Interested in working with us?</p>
          <a
            href="mailto:info@justanholding.co.uk"
            className="text-gray-500 underline"
          >
            info@justanholding.co.uk
          </a>
        </div>
      </div>

      {/* Lower Footer */}
      <div className=" mt-6 pt-4 text-center text-sm text-gray-500">
        © 2023-2024{" "}
        <span className="font-semibold text-white">Just an Holding LTD</span>
      </div>
    </footer>
  );
}
