import React from "react";

export const SkillsSection = (): JSX.Element => {
  // Data for the three rows of repeating text
  const skillsData = [
    {
      word: "LEARN",
      fontSize: "text-[54.3px]",
      highlightColors: [
        "text-manishrajnetlifyapplucky-point",
        "text-manishrajnetlifyappsail",
      ],
    },
    {
      word: "ADAPT",
      fontSize: "text-[52.3px]",
      highlightColors: [
        "text-manishrajnetlifyappsail",
        "text-manishrajnetlifyappwild-watermelon",
      ],
    },
    {
      word: "THRIVE",
      fontSize: "text-[52.5px]",
      highlightColors: [
        "text-manishrajnetlifyappspring-green",
        "text-manishrajnetlifyappsail",
      ],
    },
  ];

  return (
    <section className="w-full h-[276px] overflow-hidden relative">
      {/* First row - LEARN */}
      <div className="flex items-center justify-start gap-4 w-full overflow-hidden py-4">
        <div className="flex items-center animate-marquee">
          {Array.from({ length: 10 }).map((_, index) => (
            <React.Fragment key={`learn-${index}`}>
              {index < 5 ? (
                <div className="relative w-[169.56px] h-[60px]" />
              ) : (
                <>
                  <div className="inline-flex flex-col items-start">
                    <div
                      className={`relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal ${index % 5 === 0 ? skillsData[0].highlightColors[0] : skillsData[0].highlightColors[1]} ${skillsData[0].fontSize} tracking-[-3.00px] leading-[60px] whitespace-nowrap`}
                    >
                      {skillsData[0].word}
                    </div>
                  </div>
                  <div className="inline-flex flex-col items-start">
                    <img
                      className="relative w-6 h-6"
                      alt="Separator dot"
                      src="https://c.animaapp.com/mc46fmevF9sLme/img/component-2.svg"
                    />
                  </div>
                </>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Second row - ADAPT */}
      <div className="flex items-center justify-start gap-4 w-full overflow-hidden py-4">
        <div className="flex items-center animate-marquee-reverse">
          {Array.from({ length: 10 }).map((_, index) => (
            <React.Fragment key={`adapt-${index}`}>
              {index > 7 ? (
                <div className="relative w-[173.97px] h-[60px]" />
              ) : (
                <>
                  <div className="inline-flex flex-col items-start">
                    <div
                      className={`relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal ${index === 4 ? skillsData[1].highlightColors[1] : skillsData[1].highlightColors[0]} ${skillsData[1].fontSize} tracking-[-3.00px] leading-[60px] whitespace-nowrap`}
                    >
                      {skillsData[1].word}
                    </div>
                  </div>
                  <div className="inline-flex flex-col items-start">
                    <img
                      className="relative w-6 h-6"
                      alt="Separator dot"
                      src="https://c.animaapp.com/mc46fmevF9sLme/img/component-2.svg"
                    />
                  </div>
                </>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Third row - THRIVE */}
      <div className="flex items-center justify-start gap-4 w-full overflow-hidden py-4">
        <div className="flex items-center animate-marquee">
          {Array.from({ length: 10 }).map((_, index) => (
            <React.Fragment key={`thrive-${index}`}>
              {index < 5 ? (
                <div className="relative w-[182.31px] h-[60px]" />
              ) : (
                <>
                  <div className="inline-flex flex-col items-start">
                    <div
                      className={`relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal ${index % 5 === 0 ? skillsData[2].highlightColors[0] : skillsData[2].highlightColors[1]} ${skillsData[2].fontSize} tracking-[-3.00px] leading-[60px] whitespace-nowrap`}
                    >
                      {skillsData[2].word}
                    </div>
                  </div>
                  <div className="inline-flex flex-col items-start">
                    <img
                      className="relative w-6 h-6"
                      alt="Separator dot"
                      src="https://c.animaapp.com/mc46fmevF9sLme/img/component-2.svg"
                    />
                  </div>
                </>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
