import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

// Data for social links and profiles
const contactData = {
  email: {
    icon: "https://c.animaapp.com/mc46fmevF9sLme/img/component-2-37.svg",
    text: "manish__raj@outlook.com",
    url: "mailto:manish__raj@outlook.com",
  },
};

const digitalSpaces = [
  {
    icon: "https://c.animaapp.com/mc46fmevF9sLme/img/component-2-45.svg",
    text: "Bento",
    url: "https://bento.me/manishraj",
  },
  {
    icon: "https://c.animaapp.com/mc46fmevF9sLme/img/component-2-20.svg",
    text: "Github",
    url: "https://github.com/manishraj27",
  },
  {
    icon: "https://c.animaapp.com/mc46fmevF9sLme/img/component-2-19.svg",
    text: "LinkedIn",
    url: "https://www.linkedin.com/in/manishraj27",
  },
  {
    icon: "https://c.animaapp.com/mc46fmevF9sLme/img/component-2-9.svg",
    text: "X [Twitter]",
    url: "https://x.com/manish_rraaj",
  },
  {
    icon: "https://c.animaapp.com/mc46fmevF9sLme/img/component-2-17.svg",
    text: "YouTube",
    url: "https://www.youtube.com/channel/UCmhi2NSl9RdC5biFARM3nsw",
  },
];

const profiles = [
  {
    icon: "https://c.animaapp.com/mc46fmevF9sLme/img/component-2-8.svg",
    text: "Stack Overflow",
    url: "https://stackoverflow.com/users/20992654/manish-raj",
  },
  {
    icon: "https://c.animaapp.com/mc46fmevF9sLme/img/component-2-5.svg",
    text: "HackerRank",
    url: "https://www.hackerrank.com/profile/manish_raj27",
  },
  {
    icon: "https://c.animaapp.com/mc46fmevF9sLme/img/component-2-11.svg",
    text: "CodeChef",
    url: "https://www.codechef.com/users/manishraj_27",
  },
  {
    icon: "https://c.animaapp.com/mc46fmevF9sLme/img/component-2-3.svg",
    text: "Leetcode",
    url: "https://leetcode.com/manish_raj27/",
  },
  {
    icon: "https://c.animaapp.com/mc46fmevF9sLme/img/component-2-13.svg",
    text: "Codeforces",
    url: "https://codeforces.com/profile/manish_raj27",
  },
];

export const ContactSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center pt-16 pb-4 px-0 relative self-stretch w-full bg-[linear-gradient(180deg,rgba(227,242,253,0)_0%,rgba(227,242,253,0.3)_100%)]">
      <div className="flex flex-col max-w-screen-xl w-full items-start gap-12 px-8 py-0 relative">
        <div className="relative self-stretch w-full h-0.5">
          <div className="w-[43px] h-0.5 bg-manishrajnetlifyapplucky-point-50 backdrop-blur-sm backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4px)_brightness(100%)]" />
        </div>

        <div className="flex items-start justify-center gap-12 relative self-stretch w-full flex-wrap">
          {/* Left Column */}
          <div className="flex flex-col w-full md:w-[373px] items-start gap-[15.4px] relative self-stretch">
            <div className="flex flex-col items-start relative self-stretch w-full">
              <h2 className="self-stretch font-manishraj-netlify-app-semantic-heading-2 font-[number:var(--manishraj-netlify-app-semantic-heading-2-font-weight)] text-manishrajnetlifyappblack text-[length:var(--manishraj-netlify-app-semantic-heading-2-font-size)] tracking-[var(--manishraj-netlify-app-semantic-heading-2-letter-spacing)] leading-[var(--manishraj-netlify-app-semantic-heading-2-line-height)] relative mt-[-1.00px] [font-style:var(--manishraj-netlify-app-semantic-heading-2-font-style)]">
                Let&#39;s Connect
              </h2>
            </div>

            <div className="flex flex-col max-w-md items-start relative w-full">
              <p className="relative self-stretch mt-[-1.00px] font-manishraj-netlify-app-semantic-item font-[number:var(--manishraj-netlify-app-semantic-item-font-weight)] text-manishrajnetlifyappindigo text-[length:var(--manishraj-netlify-app-semantic-item-font-size)] tracking-[var(--manishraj-netlify-app-semantic-item-letter-spacing)] leading-[var(--manishraj-netlify-app-semantic-item-line-height)] [font-style:var(--manishraj-netlify-app-semantic-item-font-style)]">
                I&#39;m always open to new opportunities,
                <br />
                collaborations, or just a friendly chat about
                <br />
                technology and design.
              </p>
            </div>

            <div className="flex flex-col items-start pt-[16.6px] pb-0 px-0 relative self-stretch w-full">
              <div className="flex flex-col items-start relative self-stretch w-full">
                <div className="pt-0 pb-2 px-0 self-stretch w-full flex flex-col items-start relative">
                  <div className="flex-col items-start flex relative self-stretch w-full">
                    <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-manishrajnetlifyapplucky-point text-[23.4px] tracking-[-0.72px] leading-9">
                      On Spotify
                    </h3>
                  </div>
                </div>

                <div className="flex pt-0 pb-3 px-0 relative self-stretch w-full flex-col items-start">
                  <div className="flex flex-col items-start relative self-stretch w-full">
                    <p className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-manishrajnetlifyappindigo text-[12.4px] tracking-[0] leading-5">
                      Music fuels my coding sessions. Here&#39;s what&#39;s been
                      in my ears
                      <br />
                      lately.
                    </p>
                  </div>
                </div>
              </div>

              <Card className="flex flex-col items-start relative self-stretch w-full rounded-lg overflow-hidden shadow-[0px_2px_4px_-2px_#0000001a,0px_4px_6px_-1px_#0000001a] backdrop-blur-sm backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4px)_brightness(100%)] bg-[linear-gradient(168deg,rgba(32,29,102,0.05)_0%,rgba(42,54,142,0.1)_100%)]">
                <CardContent className="flex items-center p-3 relative self-stretch w-full">
                  <div className="inline-flex pl-0 pr-3 py-0 relative flex-col items-start">
                    <div className="flex flex-col w-12 h-12 items-start justify-center relative bg-manishrajnetlifyappwhite-02 rounded-md overflow-hidden shadow-[0px_1px_2px_-1px_#0000001a,0px_1px_3px_#0000001a]">
                      <div className="relative flex-1 max-w-12 w-full grow bg-[url(https://c.animaapp.com/mc46fmevF9sLme/img/luther--with-sza--album-art.png)] bg-cover bg-[50%_50%]" />

                      <div className="flex w-12 h-1.5 items-start justify-center px-0.5 py-0 absolute top-[42px] left-0 bg-manishrajnetlifyappblack-30">
                        <div className="flex w-1 justify-center pl-0 pr-0.5 py-0 relative self-stretch flex-col items-start">
                          <div className="relative flex-1 w-0.5 grow bg-manishrajnetlifyappmalibu rounded" />
                        </div>

                        <div className="flex w-1 justify-center pl-0 pr-0.5 py-0 relative self-stretch flex-col items-start">
                          <div className="relative flex-1 w-0.5 grow bg-manishrajnetlifyappmalibu rounded" />
                        </div>

                        <div className="relative self-stretch w-0.5 bg-manishrajnetlifyappmalibu rounded" />
                      </div>
                    </div>
                  </div>

                  <div className="flex pl-0 pr-3 py-0 relative flex-1 grow flex-col items-start">
                    <div className="flex flex-col items-start relative self-stretch w-full">
                      <div className="flex items-center relative self-stretch w-full">
                        <div className="w-[16.31px] h-[12.31px] pl-0 pr-1 py-0 flex flex-col items-start relative">
                          <div className="flex flex-col w-[12.31px] h-[12.31px] items-start justify-center relative">
                            <img
                              className="relative flex-1 w-[12.31px] grow"
                              alt="Spotify icon"
                              src="https://c.animaapp.com/mc46fmevF9sLme/img/component-2-16.svg"
                            />
                          </div>
                        </div>

                        <div className="inline-flex flex-col items-start relative">
                          <div className="relative w-fit mt-[-1.00px] font-manishraj-netlify-app-inter-medium font-[number:var(--manishraj-netlify-app-inter-medium-font-weight)] text-manishrajnetlifyappmoody-blue text-[length:var(--manishraj-netlify-app-inter-medium-font-size)] tracking-[var(--manishraj-netlify-app-inter-medium-letter-spacing)] leading-[var(--manishraj-netlify-app-inter-medium-line-height)] whitespace-nowrap [font-style:var(--manishraj-netlify-app-inter-medium-font-style)]">
                            Last Played
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start self-stretch w-full flex-col relative">
                        <div className="relative self-stretch mt-[-1.00px] font-manishraj-netlify-app-semantic-heading-3 font-[number:var(--manishraj-netlify-app-semantic-heading-3-font-weight)] text-manishrajnetlifyappblack text-[length:var(--manishraj-netlify-app-semantic-heading-3-font-size)] tracking-[var(--manishraj-netlify-app-semantic-heading-3-letter-spacing)] leading-[var(--manishraj-netlify-app-semantic-heading-3-line-height)] [font-style:var(--manishraj-netlify-app-semantic-heading-3-font-style)]">
                          luther (with sza)
                        </div>
                      </div>

                      <div className="flex gap-1 w-full items-start relative self-stretch">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-manishrajnetlifyappindigo text-[11.1px] tracking-[0] leading-4 whitespace-nowrap">
                          Kendrick Lamar
                        </div>

                        <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-manishrajnetlifyappmoody-blue text-[10.5px] tracking-[0] leading-4 whitespace-nowrap">
                          · Yesterday
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="inline-flex flex-col items-start relative">
                    <img
                      className="relative w-5 h-5"
                      alt="Play button"
                      src="https://c.animaapp.com/mc46fmevF9sLme/img/component-2-22.svg"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col w-full md:w-[794px] items-start relative self-stretch">
            <div className="flex items-start justify-center gap-6 relative self-stretch w-full flex-wrap">
              {/* Contact Column */}
              <div className="flex flex-col w-full sm:w-[248px] items-start gap-4 relative self-stretch">
                <div className="flex-col items-start flex relative self-stretch w-full">
                  <h3 className="self-stretch font-medium text-manishrajnetlifyapplucky-point text-[23.8px] tracking-[-0.72px] relative mt-[-1.00px] [font-family:'Inter',Helvetica] leading-9">
                    Contact
                  </h3>
                </div>

                <div className="flex items-center relative self-stretch w-full">
                  <div className="flex flex-col w-[25.59px] h-[17.59px] items-start pl-0 pr-2 py-0 relative">
                    <div className="w-[17.59px] flex flex-col h-[17.59px] items-start justify-center relative">
                      <img
                        className="relative flex-1 w-[17.59px] grow"
                        alt="Email icon"
                        src={contactData.email.icon}
                      />
                    </div>
                  </div>

                  <div className="inline-flex flex-col items-start relative ml-[-8.17e-14px]">
                    <div className="flex items-start relative self-stretch w-full">
                      <a
                        className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-manishrajnetlifyappsapphire text-[15.5px] tracking-[0] leading-[26.4px] whitespace-nowrap"
                        href={contactData.email.url}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {contactData.email.text}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Digital Spaces Column */}
              <div className="flex flex-col w-full sm:w-[248px] items-start gap-4 relative self-stretch">
                <div className="flex-col items-start flex relative self-stretch w-full">
                  <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-manishrajnetlifyapplucky-point text-[23.1px] tracking-[-0.72px] leading-9">
                    Digital Spaces
                  </h3>
                </div>

                <div className="flex flex-col items-start gap-3 relative self-stretch w-full">
                  {digitalSpaces.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center relative self-stretch w-full"
                    >
                      <div className="flex flex-col w-[25.59px] h-[17.59px] items-start pl-0 pr-2 py-0 relative">
                        <div className="w-[17.59px] flex flex-col h-[17.59px] items-start justify-center relative">
                          <img
                            className="relative flex-1 w-[17.59px] grow"
                            alt={`${item.text} icon`}
                            src={item.icon}
                          />
                        </div>
                      </div>

                      <div className="inline-flex flex-col items-start relative ml-[-8.17e-14px]">
                        <div className="flex items-start relative self-stretch w-full">
                          <a
                            className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-manishrajnetlifyappsapphire text-[16.1px] tracking-[0] leading-[26.4px] whitespace-nowrap"
                            href={item.url}
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            {item.text}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Profiles Column */}
              <div className="flex flex-col w-full sm:w-[248px] items-start gap-10 relative self-stretch">
                <div className="flex flex-col items-start gap-4 relative self-stretch w-full">
                  <div className="items-center gap-[1.71e-13px] flex relative self-stretch w-full">
                    <h3 className="relative w-fit mt-[-1.00px] font-manishraj-netlify-app-semantic-heading-4 font-[number:var(--manishraj-netlify-app-semantic-heading-4-font-weight)] text-manishrajnetlifyapplucky-point text-[length:var(--manishraj-netlify-app-semantic-heading-4-font-size)] tracking-[var(--manishraj-netlify-app-semantic-heading-4-letter-spacing)] leading-[var(--manishraj-netlify-app-semantic-heading-4-line-height)] whitespace-nowrap [font-style:var(--manishraj-netlify-app-semantic-heading-4-font-style)]">
                      Profiles
                    </h3>

                    <div className="w-[18px] h-3.5 pl-1 pr-0 py-0 flex flex-col items-start relative">
                      <div className="w-3.5 h-3.5 items-start flex flex-col justify-center relative">
                        <img
                          className="relative flex-1 w-3.5 grow"
                          alt="New icon"
                          src="https://c.animaapp.com/mc46fmevF9sLme/img/component-2-41.svg"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-start gap-3 relative self-stretch w-full">
                    {profiles.map((profile, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-[1.46e-13px] relative self-stretch w-full"
                      >
                        <div className="flex flex-col w-[25.59px] h-[17.59px] items-start pl-0 pr-2 py-0 relative">
                          <div className="w-[17.59px] flex flex-col h-[17.59px] items-start justify-center relative">
                            <img
                              className="relative flex-1 w-[17.59px] grow"
                              alt={`${profile.text} icon`}
                              src={profile.icon}
                            />
                          </div>
                        </div>

                        <div className="inline-flex flex-col items-start relative">
                          <div className="flex items-start relative self-stretch w-full">
                            <a
                              className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-manishrajnetlifyappsapphire text-[15.8px] tracking-[0] leading-[26.4px] whitespace-nowrap"
                              href={profile.url}
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              {profile.text}
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Location Section */}
                <div className="flex flex-col items-start gap-4 relative self-stretch w-full">
                  <div className="flex-col items-start flex relative self-stretch w-full">
                    <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-manishrajnetlifyapplucky-point text-[23.1px] tracking-[-0.72px] leading-9">
                      Location
                    </h3>
                  </div>

                  <div className="flex items-start gap-[1.46e-13px] relative self-stretch w-full">
                    <div className="w-[25.59px] h-[19.59px] pl-0 pr-2 pt-0.5 pb-0 flex flex-col items-start relative">
                      <img
                        className="relative w-[17.59px] h-[17.59px]"
                        alt="Location icon"
                        src="https://c.animaapp.com/mc46fmevF9sLme/img/component-2-6.svg"
                      />
                    </div>

                    <div className="inline-flex flex-col items-start gap-[4.39px] pb-[5.83e-13px] pt-[3px] px-0 relative">
                      <div className="relative w-32 h-5 overflow-hidden">
                        <a
                          className="absolute w-32 h-[27px] -top-1 left-0 [font-family:'Inter',Helvetica] font-medium text-manishrajnetlifyappsapphire text-[15.4px] tracking-[0] leading-[26.4px] whitespace-nowrap"
                          href="https://maps.app.goo.gl/dPjAwKErtBJW6kRo9"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          Vijayawada, India
                        </a>
                      </div>

                      <div className="flex flex-col items-start relative self-stretch w-full">
                        <div className="text-manishrajnetlifyappindigo text-[15.8px] tracking-[0] leading-7 relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal whitespace-nowrap">
                          07:30:01
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="flex flex-col items-start pt-px pb-0 px-0 relative self-stretch w-full border-t [border-top-style:solid] border-[#bbddfa80]">
          <div className="flex items-end justify-between pt-[15.1px] pb-4 px-0 relative self-stretch w-full">
            <div className="flex w-full md:w-[1062px] items-start justify-between pr-[2.27e-13px] pl-0 py-0 relative">
              <div className="inline-flex items-end relative self-stretch">
                <div className="inline-flex justify-center pl-0 pr-1 py-0 relative self-stretch flex-col items-start">
                  <div className="inline-flex flex-col h-[31.19px] items-start relative">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-manishrajnetlifyappblack text-[17.2px] tracking-[0] leading-[26.4px] whitespace-nowrap">
                      ©
                    </div>
                  </div>
                </div>

                <div className="inline-flex justify-center pl-0 pr-1 py-0 relative self-stretch flex-col items-start">
                  <div className="inline-flex flex-col h-[31.19px] items-start relative">
                    <div className="mt-[-1.00px] text-manishrajnetlifyappblack text-[16.8px] leading-[26.4px] relative w-fit [font-family:'Inter',Helvetica] font-normal tracking-[0] whitespace-nowrap">
                      2025
                    </div>
                  </div>
                </div>

                <div className="inline-flex flex-col h-[32.19px] items-start relative">
                  <div className="relative w-fit mt-[-1.00px] font-manishraj-netlify-app-inter-extra-bold-upper font-[number:var(--manishraj-netlify-app-inter-extra-bold-upper-font-weight)] text-manishrajnetlifyappblack text-[length:var(--manishraj-netlify-app-inter-extra-bold-upper-font-size)] tracking-[var(--manishraj-netlify-app-inter-extra-bold-upper-letter-spacing)] leading-[var(--manishraj-netlify-app-inter-extra-bold-upper-line-height)] whitespace-nowrap [font-style:var(--manishraj-netlify-app-inter-extra-bold-upper-font-style)]">
                    MANISH RAJ
                  </div>
                </div>
              </div>

              <div className="inline-flex flex-col items-start relative self-stretch">
                <div className="relative w-[242.56px] h-[31.19px]">
                  <div className="relative w-[243px] h-8 -top-0.5">
                    <div className="absolute w-[227px] h-8 top-0 left-0 font-manishraj-netlify-app-inter-regular font-[number:var(--manishraj-netlify-app-inter-regular-font-weight)] text-manishrajnetlifyappblack text-[length:var(--manishraj-netlify-app-inter-regular-font-size)] tracking-[var(--manishraj-netlify-app-inter-regular-letter-spacing)] leading-[var(--manishraj-netlify-app-inter-regular-line-height)] whitespace-nowrap [font-style:var(--manishraj-netlify-app-inter-regular-font-style)]">
                      Designed and coded with
                    </div>

                    <img
                      className="absolute w-4 h-4 top-2.5 left-[227px]"
                      alt="Heart icon"
                      src="https://c.animaapp.com/mc46fmevF9sLme/img/component-2-2.svg"
                    />
                  </div>
                </div>
              </div>
            </div>

            <Button
              variant="ghost"
              className="inline-flex items-center relative ml-[-0.5px]"
            >
              <div className="inline-flex pl-0 pr-2 py-0 relative flex-col items-start">
                <div className="inline-flex flex-col items-center pl-[18.53px] pr-[18.55px] py-0 relative">
                  <div className="relative w-fit mt-[-1.00px] font-manishraj-netlify-app-semantic-button-upper font-[number:var(--manishraj-netlify-app-semantic-button-upper-font-weight)] text-manishrajnetlifyappblack text-[length:var(--manishraj-netlify-app-semantic-button-upper-font-size)] text-center tracking-[var(--manishraj-netlify-app-semantic-button-upper-letter-spacing)] leading-[var(--manishraj-netlify-app-semantic-button-upper-line-height)] [font-style:var(--manishraj-netlify-app-semantic-button-upper-font-style)]">
                    BACK TO
                    <br />
                    TOP
                  </div>
                </div>
              </div>

              <div className="inline-flex flex-col items-start relative ml-[-5.68e-14px]">
                <img
                  className="relative w-6 h-6"
                  alt="Up arrow"
                  src="https://c.animaapp.com/mc46fmevF9sLme/img/component-3.svg"
                />
              </div>
            </Button>
          </div>
        </footer>
      </div>
    </section>
  );
};
