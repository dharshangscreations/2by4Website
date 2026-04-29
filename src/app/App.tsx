import { useRef } from "react";
import { motion } from "motion/react";
import svgPaths from "../imports/Frame171/svg-44ngen49ov";
import imgBitmapImage from "figma:asset/d3612e135fc6d37699d9965cd98421fb8f4499d0.png";
import imgHeroBackground from "../imports/image-1.png";
import imgEfLongLogo1 from "figma:asset/7672bd76adeca52e2671ef9f30579ee0b04b58c8.png";
import imgDithr20264141641261 from "figma:asset/b484d7c08b93c7e4d470aa6d8c948bdc4a2c9047.png";
import imgDithr20264291616331 from "figma:asset/2eee6baaa112f2ebb4da4e04f788417dee905382.png";
import imgDithr20264201921431 from "figma:asset/bbd03a54e92cad7489cb8b5885cdea465b10d550.png";
import imgDithr2026429169531 from "figma:asset/db38fd9870b3a718964679533c852880125dac0b.png";
import imgDithr20264141659431 from "figma:asset/257e19c7d8711b34b949b9973385edcfe1181c8d.png";
import imgImage26 from "figma:asset/44eefbeed8c69ffcbc3a60227ff39e69c93902b6.png";
import imgImage25 from "figma:asset/c0791668f321f684d7b9f1573a5a8b10f6842b6a.png";
import imgImage24 from "figma:asset/676118e0c81bfddb8e0ad789561f2b50b6e19e9f.png";

export default function App() {
  const tradesRef = useRef<HTMLElement>(null);
  const howItWorksRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="bg-[#fffcf4] w-full flex justify-center">
      <style>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      {/* Fixed Navbar */}
      <nav className="bg-[#fffcf4] border-b border-[#ff8400] fixed top-0 w-full h-[80px] z-50 flex justify-center">
        <div className="px-0 h-full w-full max-w-[1440px] flex items-center justify-between">
          <div className="h-[24px] w-[111.478px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 111.839 24.6177">
              <g id="Logo">
                <path d={svgPaths.p2cb1f910} fill="#FF8400" stroke="#FF8400" strokeWidth="0.308858" />
                <path d={svgPaths.p1d198600} fill="#FF8400" stroke="url(#paint0_linear_nav)" strokeWidth="0.0521115" />
              </g>
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_nav" x1="-11.4822" x2="111.787" y1="12.5461" y2="12.5461">
                  <stop offset="0.5" stopColor="white" />
                  <stop offset="1" stopColor="#8AB7E1" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="flex gap-[32px] items-center">
            <div className="flex gap-[24px] font-['Overused_Grotesk:Regular',sans-serif] text-[16px] text-black">
              <button onClick={() => scrollToSection(tradesRef)} className="hover:text-[#ff8400] transition-colors">
                Trades
              </button>
              <button onClick={() => scrollToSection(howItWorksRef)} className="hover:text-[#ff8400] transition-colors">
                How it Works
              </button>
              <button onClick={() => scrollToSection(contactRef)} className="hover:text-[#ff8400] transition-colors">
                Contact Us
              </button>
            </div>
            <button className="flex items-center justify-center overflow-clip pb-[6px] pt-[4px] px-[16px] rounded-[4px] bg-gradient-to-r from-[#ff8400] to-[#ffa03b] font-['Overused_Grotesk:SemiBold',sans-serif] text-[20px] text-[#fffcf4] hover:opacity-90 transition-opacity">
              Login
            </button>
          </div>
        </div>
      </nav>

      <div className="w-full max-w-[1440px]">
      {/* Hero Section */}
      <section className="relative min-h-screen pt-[80px] overflow-hidden border-l border-r border-[#ff8400]">
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <img alt="" className="w-full h-auto object-bottom" src={imgHeroBackground} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-[992px] mx-auto pt-[200px] pb-[100px] px-[24px] flex flex-col gap-[16px] items-center"
        >
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative">
            <div className="col-1 h-[24px] ml-[98.64px] mt-0 relative row-1 w-[214.629px]">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgEfLongLogo1} />
            </div>
            <div className="col-1 h-[14.4px] ml-0 mt-[5.33px] relative row-1 w-[95.314px]">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 95.3143 14.4">
                <g>
                  <path d={svgPaths.p2fef6580} fill="#806140" fillOpacity="0.5" />
                  <path d={svgPaths.p522b800} fill="#806140" fillOpacity="0.5" />
                  <path d={svgPaths.pa5f1c00} fill="#806140" fillOpacity="0.5" />
                  <path d={svgPaths.p4f64f00} fill="#806140" fillOpacity="0.5" />
                  <path d={svgPaths.p1010600} fill="#806140" fillOpacity="0.5" />
                  <path d={svgPaths.p8d1a1c0} fill="#806140" fillOpacity="0.5" />
                  <path d={svgPaths.p59f9f00} fill="#806140" fillOpacity="0.5" />
                  <path d={svgPaths.p5d80610} fill="#806140" fillOpacity="0.5" />
                </g>
              </svg>
            </div>
          </div>

          <div className="flex flex-col gap-[32px] items-center w-full">
            <h1 className="font-['Overused_Grotesk:Medium',sans-serif] text-[64px] text-[#4a3826] text-center leading-[1.1]">
              AI-Powered Construction Takeoffs, <span className="font-['Overused_Grotesk:SemiBold_Italic',sans-serif] italic">Verified by Experts.</span>
            </h1>
            <p className="font-['Overused_Grotesk:Regular',sans-serif] text-[24px] text-[#806140] text-center max-w-[689px]">
              Upload your plans. Get accurate material quantities quickly. We combine AI speed with human oversight to ensure 100% accuracy.
            </p>

            <div className="flex gap-[16px] items-center">
              <button className="flex items-center justify-center h-[48px] px-[24px] rounded-[5px] bg-gradient-to-r from-[#ff991e] to-[#fc6c05] font-['Overused_Grotesk:Medium',sans-serif] text-[18px] text-[#fffcf4] hover:scale-105 transition-transform">
                Book a Demo
              </button>
              <button className="flex items-center justify-center gap-[9px] h-[48px] px-[24px] border border-[#ff9e26] rounded-[5px] font-['Overused_Grotesk:Medium',sans-serif] text-[18px] text-[#806140] hover:bg-[#ff9e26] hover:text-white transition-all">
                <span>Get a Free Takeoff</span>
                <svg className="w-[16.875px] h-[11.25px]" viewBox="0 0 19.2892 13.25" fill="none">
                  <path d={svgPaths.p33506e80} stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-[60px] left-1/2 -translate-x-1/2 flex flex-col gap-[10px] items-center z-10"
        >
          <p className="font-['Overused_Grotesk:Medium',sans-serif] text-[14px] text-[#ff8400] text-center leading-[1.1]">
            Scroll Down to Learn More
          </p>
          <svg className="w-[2px] h-[68.5px]" viewBox="0 0 2 68.5" preserveAspectRatio="none">
            <defs>
              <linearGradient id="paint0_linear_scroll" x1="1.5" y1="0" x2="1.5" y2="68.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FF8400" />
                <stop offset="1" stopColor="#FF8400" stopOpacity="0" />
              </linearGradient>
            </defs>
            <line x1="1" y1="0" x2="1" y2="68.5" stroke="url(#paint0_linear_scroll)" strokeWidth="2" />
          </svg>
        </motion.div>
      </section>

      {/* Trades Section */}
      <section ref={tradesRef} className="relative min-h-screen py-[120px] px-[120px] border-t border-l border-r border-[#ff8400] overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative max-w-[1200px] mx-auto flex flex-col gap-[72px] items-center"
        >
          <div className="flex flex-col gap-[8px] items-center max-w-[751px]">
            <h2 className="font-['Overused_Grotesk:SemiBold',sans-serif] text-[24px] text-[rgba(74,56,38,0.5)] tracking-[-0.96px] uppercase text-center leading-[1.1]">
              What We Quantify
            </h2>
            <h3 className="font-['Overused_Grotesk:Medium',sans-serif] text-[48px] text-[#4a3826] text-center leading-none">
              Comprehensive material takeoffs <span className="font-['Overused_Grotesk:Medium_Italic',sans-serif] italic">for every trade.</span>
            </h3>
          </div>

          <div className="grid grid-cols-3 gap-[16px]">
            {[
              { icon: svgPaths.p3e4a3dc0, viewBox: "0 0 36.0001 44.0004", title: "Water and Sewer", desc: "Linear pipe lengths, fittings, specialized structures and Earthwork volumes.", tags: ["Fittings", "Linear Pipe Lengths", "Earthwork Volumes"] },
              { icon: svgPaths.p1e043830, viewBox: "0 0 42.279 42.2668", title: "Water and Sewer", desc: "Linear pipe lengths, fittings, specialized structures and Earthwork volumes.", tags: ["Fittings", "Linear Pipe Lengths", "Earthwork Volumes"] },
              { icon: svgPaths.pfd86b00, viewBox: "0 0 32.0577 43.5551", title: "Water and Sewer", desc: "Linear pipe lengths, fittings, specialized structures and Earthwork volumes.", tags: ["Fittings", "Linear Pipe Lengths", "Earthwork Volumes"] },
              { icon: svgPaths.p3bc8d980, viewBox: "0 0 35.4054 39.3838", title: "Water and Sewer", desc: "Linear pipe lengths, fittings, specialized structures and Earthwork volumes.", tags: ["Fittings", "Linear Pipe Lengths", "Earthwork Volumes"] },
              { icon: svgPaths.pb42a500, viewBox: "0 0 44 44", title: "Water and Sewer", desc: "Linear pipe lengths, fittings, specialized structures and Earthwork volumes.", tags: ["Fittings", "Linear Pipe Lengths", "Earthwork Volumes"] },
              { icon: svgPaths.p2e9c0000, viewBox: "0 0 40.0455 43.9685", title: "Water and Sewer", desc: "Linear pipe lengths, fittings, specialized structures and Earthwork volumes.", tags: ["Fittings", "Linear Pipe Lengths", "Earthwork Volumes"] },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white h-[250px] w-[340px] overflow-clip relative group hover:shadow-xl transition-shadow"
              >
                <div className="absolute bg-[#ff8400] opacity-25 right-0 size-[40px] top-0 group-hover:opacity-50 transition-opacity" />
                <div className="absolute left-[20px] size-[48px] top-[20px]">
                  <svg className="block size-full p-[4px]" fill="none" viewBox={item.viewBox}>
                    <path d={item.icon} stroke="#FF8400" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
                  </svg>
                </div>
                <div className="absolute bottom-[20px] left-[20px] flex flex-col gap-[24px] w-[300px]">
                  <div className="flex flex-col gap-[8px]">
                    <h4 className="font-['Overused_Grotesk:Medium',sans-serif] text-[24px] text-[#4a3826] leading-none">
                      {item.title}
                    </h4>
                    <p className="font-['Overused_Grotesk:Regular',sans-serif] text-[16px] text-[#4a3826] leading-[1.1]">
                      {item.desc}
                    </p>
                  </div>
                  <div className="flex gap-[8px] flex-wrap">
                    {item.tags.map((tag, i) => (
                      <span key={i} className="border border-[#806140] rounded-[6px] pb-[6px] pt-[4px] px-[6px] font-['Overused_Grotesk:Medium',sans-serif] text-[12px] text-[#806140] leading-none">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* How it Works Section */}
      <section ref={howItWorksRef} className="min-h-screen py-[120px] px-[120px] border-t border-l border-r border-[#ff8400]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-[1200px] mx-auto flex flex-col gap-[72px] items-center"
        >
          <div className="flex flex-col gap-[8px] items-center max-w-[751px]">
            <h2 className="font-['Overused_Grotesk:SemiBold',sans-serif] text-[24px] text-[rgba(74,56,38,0.5)] tracking-[-0.96px] uppercase text-center leading-[1.1]">
              Our process
            </h2>
            <h3 className="font-['Overused_Grotesk:Medium',sans-serif] text-[48px] text-[#4a3826] text-center leading-none">
              How it works
            </h3>
          </div>

          <div className="relative w-[1058px] h-[1053px]">
            {[
              { img: imgDithr20264141641261, imgPos: "left-[79px] top-[189px] w-[291px] h-[291px]", title: "Instant analysis", desc: "Upload your blueprints (PDF, TIFF, etc.) and let our AI instantly analyze the scope.", pos: "top-0 left-0 w-[460px] h-[343px]", textPos: "bottom-[235px] left-[28px] w-[404px]" },
              { img: imgDithr20264291616331, imgPos: "left-[276px] top-[41px] w-[225px] h-[225px]", title: "Precise Quantities", desc: "Get detailed material lists exportable to Excel or CSV. Every stud, slab, and sheet counted.", pos: "top-0 left-[472px] w-[584px] h-[343px] border border-[#ff8400]", textPos: "bottom-[19px] left-[19px] w-[408px]" },
              { img: imgDithr20264201921431, imgPos: "left-[181px] top-[62px] w-[426px] h-[281px]", title: "Human Verification", desc: "Trust but verify. Our team of expert estimators reviews every number to ensure 100% accuracy.", pos: "top-[355px] left-0 w-[627px] h-[343px]", textPos: "bottom-[20px] left-[20px] w-[447px]" },
              { img: imgDithr20264141641261, imgPos: "left-[81px] top-[-132px] w-[291px] h-[291px]", title: "Quick Turnaround", desc: "Don't wait weeks for a bid. Get your takeoff back quickly.", pos: "top-[355px] left-[639px] w-[417px] h-[343px]", textPos: "bottom-[20px] left-[20px] w-[370px]" },
              { img: imgDithr2026429169531, imgPos: "left-[242px] top-[38px] w-[257px] h-[363px]", title: "Cost Estimation", desc: "Apply your own unit costs or use regional averages to generate instant bid proposals.", pos: "top-[710px] left-0 w-[523px] h-[343px]", textPos: "bottom-[20px] left-[20px] w-[404px]" },
              { img: imgDithr20264141659431, imgPos: "left-[126px] top-0 w-[397px] h-[397px]", title: "Audit Trail", desc: "See exactly where every quantity comes from on the plan with our visual audit tool.", pos: "top-[710px] left-[535px] w-[523px] h-[343px]", textPos: "bottom-[25px] left-[16px] w-[394px]" },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`bg-white absolute overflow-clip group hover:shadow-2xl transition-all ${step.pos}`}
              >
                <img alt="" className={`absolute opacity-75 group-hover:opacity-90 transition-opacity object-cover ${step.imgPos}`} src={step.img} />
                <div className={`absolute bg-white px-[10px] py-[12px] ${step.textPos}`}>
                  <h4 className="font-['Overused_Grotesk:Medium',sans-serif] text-[32px] text-[#4a3826] leading-none mb-[8px]">
                    {step.title}
                  </h4>
                  <p className="font-['Overused_Grotesk:Regular',sans-serif] text-[20px] text-[#4a3826] leading-[1.1]">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Solutions Section */}
      <section className="relative min-h-screen py-[120px] px-[120px] border-t border-l border-r border-[#ff8400]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-[1200px] mx-auto flex flex-col gap-[72px] items-center"
        >
          <div className="flex flex-col gap-[8px] items-center max-w-[751px]">
            <h2 className="font-['Overused_Grotesk:SemiBold',sans-serif] text-[24px] text-[rgba(74,56,38,0.5)] tracking-[-0.96px] uppercase text-center leading-[1.1]">
              Solutions
            </h2>
            <h3 className="font-['Overused_Grotesk:Medium',sans-serif] text-[48px] text-[#4a3826] text-center leading-none">
              Your platform for the future of construction
            </h3>
          </div>

          <div className="flex gap-[18px] w-full">
            {[
              { img: imgImage26, title: "General Contractors", desc: "Stop drowning in manual takeoffs. Let us handle the counting while you run the job site." },
              { img: imgImage25, title: "Project Owners", desc: "Get accurate material verification and stay in control of your budget." },
              { img: imgImage24, title: "Specialty Contractors", desc: "Turn around 5x more bids. We keep your estimate queue moving so you never miss a deadline." },
            ].map((solution, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="bg-white flex-1 h-[636px] overflow-clip relative group hover:shadow-2xl transition-shadow"
              >
                <div className="absolute bg-[#ff8400] right-0 size-[40px] top-0 group-hover:opacity-80 transition-opacity" />
                <img alt="" className="absolute top-0 left-0 w-full h-[490px] object-cover group-hover:scale-105 transition-transform duration-500" src={solution.img} />
                <div className="absolute bg-white bottom-0 left-0 px-[16px] py-[20px] w-full">
                  <h4 className="font-['Overused_Grotesk:Medium',sans-serif] text-[32px] text-[#4a3826] leading-none mb-[8px]">
                    {solution.title}
                  </h4>
                  <p className="font-['Overused_Grotesk:Regular',sans-serif] text-[20px] text-[#4a3826] leading-[1.1]">
                    {solution.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer ref={contactRef} className="bg-[#fffcf4] border-t border-[#ff8400] relative h-[300px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[29px] left-1/2 -translate-x-1/2 w-[830px] h-[344px]">
            <svg className="absolute block inset-0 size-full opacity-10" fill="none" preserveAspectRatio="none" viewBox="0 0 830.108 344.104">
              <path d={svgPaths.p62dfc80} fill="#FF8400" stroke="url(#paint0_linear_footer)" strokeWidth="0.0521115" />
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_footer" x1="-767.806" x2="1205.59" y1="175.131" y2="175.131">
                  <stop offset="0.5" stopColor="white" />
                  <stop offset="1" stopColor="#8AB7E1" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        <div className="relative max-w-[1440px] mx-auto px-[120px] h-full flex flex-col justify-between py-[48px]">
          <div className="flex justify-between items-start">
            <div className="flex flex-col gap-[16px]">
              <div className="h-[24px] w-[111.478px]">
                <svg className="block size-full" fill="none" viewBox="0 0 111.839 24.6177">
                  <path d={svgPaths.p2cb1f910} fill="#FF8400" stroke="#FF8400" strokeWidth="0.308858" />
                  <path d={svgPaths.p177e9a80} fill="#FF8400" stroke="url(#paint0_linear_footer_logo)" strokeWidth="0.0521115" />
                  <defs>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_footer_logo" x1="-11.482" x2="111.787" y1="12.5461" y2="12.5461">
                      <stop offset="0.5" stopColor="white" />
                      <stop offset="1" stopColor="#8AB7E1" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <p className="font-['Overused_Grotesk:Regular',sans-serif] text-[20px] text-[#4a3826] max-w-[330px] leading-[1.1]">
                Takeoffs that take bids off the ground
              </p>
            </div>

            <div className="flex flex-col gap-[16px] items-end">
              <h4 className="font-['Overused_Grotesk:Regular',sans-serif] text-[32px] text-black leading-[1.2]">
                Contacts
              </h4>
              <div className="flex flex-col gap-[8px] items-end">
                <div className="flex gap-[8px] items-center">
                  <p className="font-['Overused_Grotesk:Regular',sans-serif] text-[20px] text-black leading-[1.2]">hari@2by4.ai</p>
                  <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                    <path d={svgPaths.p24f7ae00} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
                <div className="flex gap-[8px] items-center">
                  <p className="font-['Overused_Grotesk:Regular',sans-serif] text-[20px] text-black leading-[1.2]">+1 (916) 430-6616</p>
                  <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                    <path d={svgPaths.p2b0c60f0} stroke="black" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </div>
                <div className="flex gap-[8px] items-center">
                  <p className="font-['Overused_Grotesk:Regular',sans-serif] text-[20px] text-black leading-[1.2]">2by4 on LinkedIn</p>
                  <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                    <path d={svgPaths.p6330c80} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center font-['Overused_Grotesk:Regular',sans-serif] text-[16px] text-[#806140] opacity-50">
            <p>© 2026 2by4.ai All rights reserved.</p>
            <div className="flex gap-[27px]">
              <button className="hover:opacity-100 transition-opacity">Privacy Policy</button>
              <button className="hover:opacity-100 transition-opacity">Terms of Service</button>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}