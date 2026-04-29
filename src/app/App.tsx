import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FileUp, ListChecks, UserCheck, Timer, CircleDollarSign, Eye, X, Upload } from "lucide-react";
import svgPaths from "../imports/Frame171/svg-44ngen49ov";
import imgHeroBackground from "../imports/image-1.png";
import imgEfLongLogo1 from "figma:asset/7672bd76adeca52e2671ef9f30579ee0b04b58c8.png";
import imgImage26 from "figma:asset/44eefbeed8c69ffcbc3a60227ff39e69c93902b6.png";
import imgImage25 from "figma:asset/c0791668f321f684d7b9f1573a5a8b10f6842b6a.png";
import imgImage24 from "figma:asset/676118e0c81bfddb8e0ad789561f2b50b6e19e9f.png";

const heroLine1 = ["AI-Powered", "Construction", "Takeoffs,"];
const heroLine2 = ["Verified", "by", "Experts."];

export default function App() {
  const tradesRef = useRef<HTMLElement>(null);
  const howItWorksRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [takeoffOpen, setTakeoffOpen] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [selectedTrade, setSelectedTrade] = useState("");
  const [selectedProjectType, setSelectedProjectType] = useState("");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setTakeoffOpen(false); };
    if (takeoffOpen) {
      document.addEventListener("keydown", onKey);
      const scrollY = window.scrollY;
      const body = document.body;
      body.style.position = "fixed";
      body.style.top = `-${scrollY}px`;
      body.style.left = "0";
      body.style.right = "0";
      body.style.width = "100%";
      return () => {
        document.removeEventListener("keydown", onKey);
        body.style.position = "";
        body.style.top = "";
        body.style.left = "";
        body.style.right = "";
        body.style.width = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [takeoffOpen]);

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="bg-[#fffcf4] w-full flex justify-center">

      {/* Fixed Navbar — original */}
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

          <div className="flex gap-[16px] md:gap-[32px] items-center">
            <div className="hidden md:flex gap-[24px] font-['Overused_Grotesk:Regular',sans-serif] text-[16px] text-[#4a3826]">
              <button onClick={() => scrollToSection(tradesRef)} className="relative hover:text-[#ff8400] transition-colors after:absolute after:bottom-[-3px] after:left-0 after:h-[1.5px] after:w-full after:bg-[#ff8400] after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-out">
                Trades
              </button>
              <button onClick={() => scrollToSection(howItWorksRef)} className="relative hover:text-[#ff8400] transition-colors after:absolute after:bottom-[-3px] after:left-0 after:h-[1.5px] after:w-full after:bg-[#ff8400] after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-out">
                How it Works
              </button>
              <button onClick={() => scrollToSection(contactRef)} className="relative hover:text-[#ff8400] transition-colors after:absolute after:bottom-[-3px] after:left-0 after:h-[1.5px] after:w-full after:bg-[#ff8400] after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-out">
                Contact Us
              </button>
            </div>
            <button className="flex items-center justify-center overflow-clip pb-[6px] pt-[4px] px-[16px] rounded-[4px] bg-gradient-to-r from-[#ff8400] to-[#ffa03b] font-['Overused_Grotesk:SemiBold',sans-serif] text-[16px] text-[#fffcf4] hover:opacity-90 transition-opacity">
              Login
            </button>
          </div>
        </div>
      </nav>

      <div className="w-full max-w-[1440px]">
        {/* Hero Section */}
        <section className="relative min-h-screen pt-[80px] overflow-hidden border-l border-r border-[#ff8400]">
          {/* Blueprint grid backdrop */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 59px, rgba(255,132,0,0.07) 59px, rgba(255,132,0,0.07) 60px), repeating-linear-gradient(90deg, transparent, transparent 59px, rgba(255,132,0,0.07) 59px, rgba(255,132,0,0.07) 60px)`,
            }}
          />

          <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
            <img
              alt=""
              className="w-full h-auto object-bottom mix-blend-multiply"
              src={imgHeroBackground}
              style={{ filter: "saturate(0.85)" }}
            />
          </div>

          <div className="relative max-w-[1200px] mx-auto pt-[120px] pb-[120px] px-[24px] flex flex-col gap-[16px] items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative"
            >
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
            </motion.div>

            <div className="flex flex-col gap-[32px] items-center w-full px-[20px] md:px-0">
              {/* Word-staggered headline */}
              <h1 className="font-['Overused_Grotesk:Medium',sans-serif] text-[40px] md:text-[64px] text-[#4a3826] text-center leading-[1.1] md:leading-[1.05]">
                <span className="block whitespace-normal md:whitespace-nowrap">
                  {heroLine1.map((word, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
                      className="inline-block mr-[0.25em] last:mr-0"
                    >
                      {word}
                    </motion.span>
                  ))}
                </span>
                <span className="block font-['Overused_Grotesk:Medium_Italic',sans-serif] italic">
                  {heroLine2.map((word, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.34 + i * 0.08 }}
                      className="inline-block mr-[0.25em] last:mr-0"
                    >
                      {word}
                    </motion.span>
                  ))}
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.65 }}
                className="font-['Overused_Grotesk:Regular',sans-serif] text-[16px] md:text-[20px] text-[#806140] text-center max-w-[750px] leading-[1.5]"
              >
                Upload your plans. Get accurate material quantities quickly. We combine AI speed with human oversight to ensure 100% accuracy.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex gap-[16px] items-center"
              >
                <button className="shimmer-btn relative flex items-center justify-center h-[48px] px-[28px] rounded-[5px] bg-gradient-to-r from-[#ff991e] to-[#fc6c05] font-['Overused_Grotesk:Medium',sans-serif] text-[18px] text-[#fffcf4] hover:scale-105 transition-transform overflow-hidden">
                  Book a Demo
                </button>
                <button onClick={() => setTakeoffOpen(true)} className="flex items-center justify-center gap-[9px] h-[48px] px-[24px] border border-[#ff9e26] rounded-[5px] font-['Overused_Grotesk:Medium',sans-serif] text-[18px] text-[#806140] hover:bg-[#ff9e26] hover:text-white transition-all">
                  <span>Get a Free Takeoff</span>
                  <svg className="w-[16.875px] h-[11.25px]" viewBox="0 0 19.2892 13.25" fill="none">
                    <path d={svgPaths.p33506e80} stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </button>
              </motion.div>
            </div>
          </div>

          {/* Scroll indicator — animated line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute bottom-[48px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-[10px] z-10"
          >
            <p className="font-['Overused_Grotesk:Medium',sans-serif] text-[12px] text-[#ff8400]/60 tracking-[0.16em] uppercase">
              Scroll
            </p>
            <div className="relative w-[1px] h-[48px] bg-[#ff8400]/15 overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 w-full bg-[#ff8400]"
                animate={{ height: ["0%", "100%", "0%"], top: ["0%", "0%", "100%"] }}
                transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </section>

        {/* Trades Section — original */}
        <section ref={tradesRef} className="relative min-h-screen py-[60px] md:py-[120px] px-[20px] md:px-[120px] border-t border-l border-r border-[#ff8400] overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative w-full max-w-[1260px] mx-auto flex flex-col gap-[72px] items-center"
          >
            <div className="flex flex-col gap-[8px] items-center max-w-[751px]">
              <h2 className="font-['Overused_Grotesk:SemiBold',sans-serif] font-semibold text-[16px] text-[rgba(74,56,38,0.5)] tracking-[-0.96px] uppercase text-center leading-[1.1]">
                What We Quantify
              </h2>
              <h3 className="font-['Overused_Grotesk:Medium',sans-serif] text-[32px] md:text-[48px] text-[#4a3826] text-center leading-none">
                Comprehensive material takeoffs <span className="font-['Overused_Grotesk:Medium_Italic',sans-serif] italic">for every trade.</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px] w-full">
              {[
                { icon: svgPaths.p2e9c0000, viewBox: "0 0 40.0455 43.9685", title: "Water and Sewer", desc: "Linear pipe lengths, fittings, specialized structures and Earthwork volumes.", tags: ["Linear Pipe Lengths", "Fittings", "Earthwork Volumes"] },
                { icon: svgPaths.p1e043830, viewBox: "0 0 42.279 42.2668", title: "HVAC and Plumbing", desc: "Ductwork, piping, fittings, and equipment quantities with routing and layout intelligence.", tags: ["Ductwork", "Piping", "Fittings"] },
                { icon: svgPaths.p3bc8d980, viewBox: "0 0 35.4054 39.3838", title: "Poured concrete and Formwork", desc: "Concrete volumes, rebar quantities, and formwork dimensions with precision and efficiency.", tags: ["Concrete Volumes", "Rebar Quantities", "Formwork Dimensions"] },
                { icon: svgPaths.pb42a500, viewBox: "0 0 44 44", title: "Site prep Contractors", desc: "Land Clearing, excavation volume, cut-and-fill, surface area for grading.", tags: ["Land Clearing", "Excavation Volume", "Cut-and-Fill"] },
                { icon: svgPaths.pfd86b00, viewBox: "0 0 32.0577 43.5551", title: "Electrical", desc: "Conduit, cable, fixtures, panels, and devices with precise linear and count takeoffs.", tags: ["Conduit", "Cable", "Fixtures"] },
                { icon: svgPaths.p3e4a3dc0, viewBox: "0 0 36.0001 44.0004", title: "Custom Scope", desc: "Any material, any trade. Just upload your plans and tell us what you need quantified.", tags: ["Specialty", "Landscaping", "Demolition"] },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white min-h-[300px] w-full overflow-hidden relative group hover:shadow-md border border-transparent hover:border-[#ff8400] transition-all duration-300 flex flex-col justify-between p-[20px]"
                >
                  <div className="absolute bg-[#ff8400] opacity-25 right-0 size-[40px] top-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative size-[64px]">
                    <div className="absolute top-0 left-0 w-[10px] h-[10px] border-t-[1.5px] border-l-[1.5px] border-[#4a3826]/20" />
                    <div className="absolute top-0 right-0 w-[10px] h-[10px] border-t-[1.5px] border-r-[1.5px] border-[#4a3826]/20" />
                    <div className="absolute bottom-0 left-0 w-[10px] h-[10px] border-b-[1.5px] border-l-[1.5px] border-[#4a3826]/20" />
                    <div className="absolute bottom-0 right-0 w-[10px] h-[10px] border-b-[1.5px] border-r-[1.5px] border-[#4a3826]/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="size-[28px]" fill="none" viewBox={item.viewBox}>
                        <path d={item.icon} stroke="#FF8400" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[20px]">
                    <div className="flex flex-col gap-[8px]">
                      <h4 className="font-['Overused_Grotesk:SemiBold',sans-serif] font-semibold text-[24px] text-[#4a3826] leading-none">
                        {item.title}
                      </h4>
                      <p className="font-['Overused_Grotesk:Regular',sans-serif] text-[16px] text-[#4a3826] leading-[1.1]">
                        {item.desc}
                      </p>
                    </div>
                    <div className="flex gap-[8px] flex-wrap">
                      {item.tags.map((tag, i) => (
                        <span key={i} className="flex justify-center items-center border-[1.25px] border-[#806140]/50 rounded-[6px] py-[5px] px-[8px] font-['Overused_Grotesk:Medium',sans-serif] font-medium text-[12px] text-[#806140] leading-none">
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
        <section ref={howItWorksRef} className="py-[60px] md:py-[120px] px-[20px] md:px-[120px] border-t border-l border-r border-[#ff8400]">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-[1200px] mx-auto flex flex-col gap-[72px]"
          >
            <div className="flex flex-col gap-[8px] items-center max-w-[751px] mx-auto">
              <h2 className="font-['Overused_Grotesk:SemiBold',sans-serif] font-semibold text-[16px] text-[rgba(74,56,38,0.5)] tracking-[-0.96px] uppercase text-center leading-[1.1]">
                Our process
              </h2>
              <h3 className="font-['Overused_Grotesk:Medium',sans-serif] text-[32px] md:text-[48px] text-[#4a3826] text-center leading-none">
                How it works
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 border-t border-[#4a3826]/10">
              {[
                { num: "01", Icon: FileUp,            title: "Instant Analysis",    desc: "Upload your blueprints (PDF, TIFF, etc.) and let our AI instantly analyze the scope." },
                { num: "02", Icon: ListChecks,        title: "Precise Quantities",  desc: "Get detailed material lists exportable to Excel or CSV. Every stud, slab, and sheet counted." },
                { num: "03", Icon: UserCheck,         title: "Human Verification",  desc: "Trust but verify. Our team of expert estimators reviews every number to ensure 100% accuracy." },
                { num: "04", Icon: Timer,             title: "Quick Turnaround",    desc: "Don't wait weeks for a bid. Get your takeoff back quickly." },
                { num: "05", Icon: CircleDollarSign,  title: "Cost Estimation",     desc: "Apply your own unit costs or use regional averages to generate instant bid proposals." },
                { num: "06", Icon: Eye,               title: "Audit Trail",         desc: "See exactly where every quantity comes from on the plan with our visual audit tool." },
              ].map(({ num, Icon, title, desc }, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className={`flex items-start gap-[20px] py-[36px] border-b border-[#4a3826]/10 ${
                    idx % 2 === 0
                      ? "md:pr-[56px] md:border-r md:border-r-[#4a3826]/10"
                      : "md:pl-[56px]"
                  }`}
                >
                  {/* Step number */}
                  <span className="font-['Overused_Grotesk:Regular',sans-serif] text-[12px] text-[#4a3826]/35 leading-none mt-[6px] min-w-[24px] select-none">
                    {num}
                  </span>

                  {/* Icon with corner brackets */}
                  <div className="relative size-[64px] flex-shrink-0">
                    <div className="absolute top-0 left-0 w-[10px] h-[10px] border-t-[1.5px] border-l-[1.5px] border-[#4a3826]/20" />
                    <div className="absolute top-0 right-0 w-[10px] h-[10px] border-t-[1.5px] border-r-[1.5px] border-[#4a3826]/20" />
                    <div className="absolute bottom-0 left-0 w-[10px] h-[10px] border-b-[1.5px] border-l-[1.5px] border-[#4a3826]/20" />
                    <div className="absolute bottom-0 right-0 w-[10px] h-[10px] border-b-[1.5px] border-r-[1.5px] border-[#4a3826]/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon className="size-[26px] text-[#ff8400]" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Text */}
                  <div className="flex flex-col gap-[8px] flex-1 min-w-0">
                    <h4 className="font-['Overused_Grotesk:SemiBold',sans-serif] font-semibold text-[24px] md:text-[28px] text-[#4a3826] leading-none">
                      {title}
                    </h4>
                    <p className="font-['Overused_Grotesk:Regular',sans-serif] text-[15px] text-[#4a3826]/70 leading-[1.45]">
                      {desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Solutions Section */}
        <section className="relative py-[60px] md:py-[120px] px-[20px] md:px-[120px] border-t border-l border-r border-[#ff8400]">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative w-full max-w-[1200px] mx-auto flex flex-col gap-[72px] items-center"
          >
            <div className="flex flex-col gap-[8px] items-center max-w-[751px]">
              <h2 className="font-['Overused_Grotesk:SemiBold',sans-serif] font-semibold text-[16px] text-[rgba(74,56,38,0.5)] tracking-[-0.96px] uppercase text-center leading-[1.1]">
                Solutions
              </h2>
              <h3 className="font-['Overused_Grotesk:Medium',sans-serif] text-[32px] md:text-[48px] text-[#4a3826] text-center leading-[1.05]">
                Your platform for the future of construction
              </h3>
            </div>

            <div className="flex flex-col md:flex-row gap-[24px] w-full">
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
                  className="w-full md:flex-1 group hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Image with corner accent */}
                  <div className="relative overflow-hidden">
                    <div className="absolute right-0 top-0 bg-[#ff8400] size-[40px] z-10" />
                    <img
                      alt=""
                      className="w-full h-[460px] object-cover group-hover:scale-105 group-hover:brightness-105 transition-all duration-500"
                      src={solution.img}
                    />
                  </div>
                  {/* Text below image — consistent across all cards */}
                  <div className="bg-white px-[20px] pt-[20px] pb-[24px]">
                    <h4 className="font-['Overused_Grotesk:SemiBold',sans-serif] font-semibold text-[24px] text-[#4a3826] leading-none mb-[8px]">
                      {solution.title}
                    </h4>
                    <p className="font-['Overused_Grotesk:Regular',sans-serif] text-[16px] text-[#4a3826] leading-[1.4]">
                      {solution.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer ref={contactRef} className="bg-[#f08b33] relative h-auto md:h-[300px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[29px] left-1/2 -translate-x-1/2 w-[830px] h-[344px]">
              <svg className="absolute block inset-0 size-full opacity-[0.14]" fill="none" preserveAspectRatio="none" viewBox="0 0 830.108 344.104">
                <path d={svgPaths.p62dfc80} fill="white" />
              </svg>
            </div>
          </div>

          <div className="relative max-w-[1440px] mx-auto px-[20px] md:px-[120px] h-full flex flex-col justify-between py-[48px] gap-[32px] md:gap-0">
            <div className="flex flex-col md:flex-row justify-between items-start gap-[32px] md:gap-0">
              <div className="flex flex-col gap-[16px]">
                <div className="h-[24px] w-[111.478px]">
                  <svg className="block size-full" fill="none" viewBox="0 0 111.839 24.6177">
                    <path d={svgPaths.p2cb1f910} fill="white" />
                    <path d={svgPaths.p177e9a80} fill="white" />
                  </svg>
                </div>
                <p className="font-['Overused_Grotesk:Regular',sans-serif] text-[19px] text-white/90 max-w-[330px] leading-[1.4]">
                  Takeoffs that take bids off the ground
                </p>
              </div>

              <div className="flex flex-col gap-[16px] items-start md:items-end">
                <h4 className="font-['Overused_Grotesk:SemiBold',sans-serif] font-semibold text-[20px] text-white leading-[1.2]">
                  Contacts
                </h4>
                <div className="flex flex-col gap-[10px] items-start md:items-end">
                  <div className="flex gap-[8px] items-center group cursor-pointer">
                    <p className="font-['Overused_Grotesk:Regular',sans-serif] text-[16px] text-white leading-[1.5]">hari@2by4.ai</p>
                    <svg className="size-[20px] group-hover:translate-x-[2px] transition-transform duration-150" fill="none" viewBox="0 0 24 24">
                      <path d={svgPaths.p24f7ae00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                  <div className="flex gap-[8px] items-center group cursor-pointer">
                    <p className="font-['Overused_Grotesk:Regular',sans-serif] text-[16px] text-white leading-[1.5]">+1 (916) 430-6616</p>
                    <svg className="size-[20px] group-hover:translate-x-[2px] transition-transform duration-150" fill="none" viewBox="0 0 24 24">
                      <path d={svgPaths.p2b0c60f0} stroke="white" strokeLinecap="round" strokeWidth="2" />
                    </svg>
                  </div>
                  <div className="flex gap-[8px] items-center group cursor-pointer">
                    <p className="font-['Overused_Grotesk:Regular',sans-serif] text-[16px] text-white leading-[1.5]">2by4 on LinkedIn</p>
                    <svg className="size-[20px] group-hover:translate-x-[2px] transition-transform duration-150" fill="none" viewBox="0 0 24 24">
                      <path d={svgPaths.p6330c80} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-white/20 pt-[16px] flex flex-col md:flex-row justify-between items-start md:items-center gap-[16px] md:gap-0 font-['Overused_Grotesk:Regular',sans-serif] text-[14px] text-white/70">
              <p>© 2026 2by4.ai All rights reserved.</p>
              <div className="flex flex-col md:flex-row gap-[8px] md:gap-[27px]">
                <button className="text-[14px] hover:text-white transition-colors text-left">Privacy Policy</button>
                <button className="text-[14px] hover:text-white transition-colors text-left">Terms of Service</button>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Free Takeoff — Full Screen Form */}
      <AnimatePresence>
        {takeoffOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 z-[200] bg-[#fffcf4] overflow-y-auto"
            style={{ height: "100dvh" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 56 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 32 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.07 }}
              className="max-w-[1440px] mx-auto px-[24px] md:px-[120px] pt-[28px] pb-[120px]"
            >
              {/* Top bar */}
              <div className="flex items-center justify-between h-[80px] border-b border-[#ff8400]">
                <div className="h-[24px] w-[111.478px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 111.839 24.6177">
                    <g id="LogoForm">
                      <path d={svgPaths.p2cb1f910} fill="#FF8400" stroke="#FF8400" strokeWidth="0.308858" />
                      <path d={svgPaths.p1d198600} fill="#FF8400" stroke="url(#paint0_linear_form)" strokeWidth="0.0521115" />
                    </g>
                    <defs>
                      <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_form" x1="-11.4822" x2="111.787" y1="12.5461" y2="12.5461">
                        <stop offset="0.5" stopColor="white" />
                        <stop offset="1" stopColor="#8AB7E1" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <button
                  onClick={() => setTakeoffOpen(false)}
                  className="flex items-center gap-[8px] font-['Overused_Grotesk:Medium',sans-serif] text-[14px] text-[#4a3826]/70 hover:text-[#4a3826] transition-colors"
                >
                  <span>Close</span>
                  <X className="size-[14px]" />
                </button>
              </div>

              {/* Header */}
              <div className="mt-[56px]">
                <p className="font-['Overused_Grotesk:SemiBold',sans-serif] text-[13px] text-[#4a3826]/60 tracking-[-0.96px] uppercase leading-[1.1]">
                  Fill out the form
                </p>
                <h2 className="font-['Overused_Grotesk:Medium',sans-serif] text-[52px] md:text-[80px] text-[#4a3826] leading-none mt-[14px]">
                  Get a free takeoff
                </h2>
              </div>

              {/* Divider */}
              <div className="border-t border-[#4a3826]/20 mt-[44px] mb-[56px]" />

              {/* Form */}
              <form
                onSubmit={(e) => { e.preventDefault(); setTakeoffOpen(false); }}
                className="flex flex-col gap-[48px]"
              >
                {/* 1 + 2: First / Last */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px] md:gap-[80px]">
                  {[
                    { num: "1", label: "First Name", type: "text", placeholder: "John" },
                    { num: "2", label: "Last Name", type: "text", placeholder: "Smith" },
                  ].map(({ num, label, type, placeholder }) => (
                    <div key={label} className="flex flex-col gap-[12px]">
                      <label className="font-['Overused_Grotesk:SemiBold',sans-serif] text-[13px] text-[#4a3826]/65 tracking-[0.06em] uppercase">
                        {num}. {label} <span className="text-[#ff8400]">*</span>
                      </label>
                      <input
                        required
                        type={type}
                        placeholder={placeholder}
                        className="border-b-2 border-[#4a3826]/20 bg-transparent pb-[14px] font-['Overused_Grotesk:Regular',sans-serif] text-[18px] text-[#4a3826] placeholder:text-[#4a3826]/40 outline-none focus:border-[#ff8400] transition-colors w-full"
                      />
                    </div>
                  ))}
                </div>

                {/* 3 + 4: Email / Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px] md:gap-[80px]">
                  {[
                    { num: "3", label: "Email", type: "email", placeholder: "john@company.com" },
                    { num: "4", label: "Phone", type: "tel", placeholder: "+1 (555) 123-4567" },
                  ].map(({ num, label, type, placeholder }) => (
                    <div key={label} className="flex flex-col gap-[12px]">
                      <label className="font-['Overused_Grotesk:SemiBold',sans-serif] text-[13px] text-[#4a3826]/65 tracking-[0.06em] uppercase">
                        {num}. {label} <span className="text-[#ff8400]">*</span>
                      </label>
                      <input
                        required
                        type={type}
                        placeholder={placeholder}
                        className="border-b-2 border-[#4a3826]/20 bg-transparent pb-[14px] font-['Overused_Grotesk:Regular',sans-serif] text-[18px] text-[#4a3826] placeholder:text-[#4a3826]/40 outline-none focus:border-[#ff8400] transition-colors w-full"
                      />
                    </div>
                  ))}
                </div>

                {/* 5: Company */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px] md:gap-[80px]">
                  <div className="flex flex-col gap-[12px]">
                    <label className="font-['Overused_Grotesk:SemiBold',sans-serif] text-[13px] text-[#4a3826]/65 tracking-[0.06em] uppercase">
                      5. Company <span className="text-[#ff8400]">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="ABC Construction"
                      className="border-b-2 border-[#4a3826]/20 bg-transparent pb-[14px] font-['Overused_Grotesk:Regular',sans-serif] text-[18px] text-[#4a3826] placeholder:text-[#4a3826]/40 outline-none focus:border-[#ff8400] transition-colors w-full"
                    />
                  </div>
                </div>

                {/* 6: Trade chips */}
                <div className="flex flex-col gap-[18px]">
                  <label className="font-['Overused_Grotesk:SemiBold',sans-serif] text-[13px] text-[#4a3826]/65 tracking-[0.06em] uppercase">
                    6. Select your trade <span className="text-[#ff8400]">*</span>
                  </label>
                  <div className="flex flex-wrap gap-[10px]">
                    {["Water & Sewer", "HVAC & Plumbing", "Concrete", "Site Prep", "Electrical", "Custom Scope"].map(trade => (
                      <button
                        type="button"
                        key={trade}
                        onClick={() => setSelectedTrade(selectedTrade === trade ? "" : trade)}
                        className={`px-[20px] py-[10px] border text-[14px] transition-all duration-200 font-['Overused_Grotesk:Medium',sans-serif] rounded-[4px] ${
                          selectedTrade === trade
                            ? "border-[#ff8400] bg-[#ff8400]/[0.08] text-[#4a3826]"
                            : "border-[#4a3826]/25 text-[#4a3826]/70 hover:border-[#4a3826]/50 hover:text-[#4a3826]"
                        }`}
                      >
                        {trade}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 7: Project type chips */}
                <div className="flex flex-col gap-[18px]">
                  <label className="font-['Overused_Grotesk:SemiBold',sans-serif] text-[13px] text-[#4a3826]/65 tracking-[0.06em] uppercase">
                    7. Project type <span className="text-[#ff8400]">*</span>
                  </label>
                  <div className="flex flex-wrap gap-[10px]">
                    {["Residential", "Commercial", "Industrial", "Infrastructure", "Mixed-Use"].map(type => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setSelectedProjectType(selectedProjectType === type ? "" : type)}
                        className={`px-[20px] py-[10px] border text-[14px] transition-all duration-200 font-['Overused_Grotesk:Medium',sans-serif] rounded-[4px] ${
                          selectedProjectType === type
                            ? "border-[#ff8400] bg-[#ff8400]/[0.08] text-[#4a3826]"
                            : "border-[#4a3826]/25 text-[#4a3826]/70 hover:border-[#4a3826]/50 hover:text-[#4a3826]"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 8: Scope */}
                <div className="flex flex-col gap-[12px]">
                  <label className="font-['Overused_Grotesk:SemiBold',sans-serif] text-[13px] text-[#4a3826]/65 tracking-[0.06em] uppercase">
                    8. Scope of work <span className="text-[#ff8400]">*</span>
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Describe what you need quantified — areas, materials, any specific requirements..."
                    className="border-b-2 border-[#4a3826]/20 bg-transparent pb-[14px] font-['Overused_Grotesk:Regular',sans-serif] text-[18px] text-[#4a3826] placeholder:text-[#4a3826]/40 outline-none focus:border-[#ff8400] transition-colors resize-none w-full"
                  />
                </div>

                {/* 9: File upload */}
                <div className="flex flex-col gap-[12px]">
                  <label className="font-['Overused_Grotesk:SemiBold',sans-serif] text-[13px] text-[#4a3826]/65 tracking-[0.06em] uppercase">
                    9. Plan Files{" "}
                    <span className="font-['Overused_Grotesk:Regular',sans-serif] font-normal normal-case text-[#4a3826]/45 tracking-normal">(optional)</span>
                  </label>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.tif,.tiff,.zip"
                    multiple
                    className="hidden"
                    onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="border border-dashed border-[#4a3826]/25 py-[28px] flex flex-col items-center gap-[10px] hover:border-[#ff8400]/50 hover:bg-[#ff8400]/[0.02] transition-all group"
                  >
                    <Upload className="size-[24px] text-[#4a3826]/35 group-hover:text-[#ff8400]/70 transition-colors" strokeWidth={1.5} />
                    <span className="font-['Overused_Grotesk:Regular',sans-serif] text-[14px] text-[#4a3826]/55 group-hover:text-[#4a3826]/75 transition-colors">
                      {fileName ?? "Click to upload plans  ·  PDF, TIFF, ZIP"}
                    </span>
                  </button>
                </div>

                {/* Submit row */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-[20px] pt-[4px]">
                  <p className="font-['Overused_Grotesk:Regular',sans-serif] text-[14px] text-[#4a3826]/55">
                    We'll get back to you within 48 hours.
                  </p>
                  <button
                    type="submit"
                    className="shimmer-btn relative flex items-center gap-[10px] h-[52px] px-[36px] bg-gradient-to-r from-[#ff991e] to-[#fc6c05] font-['Overused_Grotesk:SemiBold',sans-serif] font-semibold text-[16px] text-white hover:brightness-110 transition-all overflow-hidden"
                    style={{ boxShadow: "0 4px 24px rgba(255,132,0,0.25)" }}
                  >
                    Submit Request
                    <svg className="w-[16.875px] h-[11.25px]" viewBox="0 0 19.2892 13.25" fill="none">
                      <path d={svgPaths.p33506e80} stroke="white" strokeLinecap="round" strokeWidth="2" />
                    </svg>
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
