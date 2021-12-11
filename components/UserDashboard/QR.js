import React, {useEffect, useRef, useState} from "react";

export default function QR() {

  const [url, setUrl] = useState(Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5));
  const ref = useRef(null);

  let qrCode = null;

  useEffect(() => {

    if (typeof window !== "undefined") {
      if (qrCode == null){
        import("qr-code-styling").then(({default: QRCodeStyling}) => {
          qrCode = new QRCodeStyling({
            width: 300,
            height: 300,
            image:
                "http://localhost:3000/assets/dehotel-red.png",
            dotsOptions: {
              color: "#D01F61",
              type: "rounded"
            },
            imageOptions: {
              crossOrigin: "anonymous",
              margin: 5
            },

            data: url
          });

          if (ref.current.children.length) {
            ref.current.removeChild(ref.current.children[0]);
          }
          qrCode.append(ref.current);
        });
      }

      if (qrCode != null) {
        qrCode.update({
          data: url
        });
      }
    }
  }, [[url, qrCode]]);


  return (
    <div className="mb-20 mt-5">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="lg:ml-40 flex flex-col items-center justify-between lg:flex-row">

          <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
            <div className="max-w-xl mb-6">
              <h2
                style={{ fontFamily: "Poppins" }}
                className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none"
              >
                Unlock your hotel door
                <br className="hidden md:block" />
                with this unique QR.
              </h2>
            </div>
            <div className="flex flex-col items-center md:flex-row">
              <a
                href="#"
                style={{ fontFamily: "Poppins" }}
                className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wid0e text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-primary hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                <span className="" ref={ref} onClick={(e) => {e.preventDefault();
                  setUrl(Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5));}}>Regenerate QR</span>
              </a>
            </div>
          </div>
          <div className="relative lg:w-1/2">
            <div ref={ref} />
          </div>
        </div>
      </div>
    </div>
  );
}
