// src/components/SolutionShowcase.jsx
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

// Fake data styled to match screenshots
const fulfillmentData = [
  { tracking: "2767956367", order: "357048", trans: "1486085", customer: "Customer A", wh: "Robbinsville NJ Facility", status: "Picked", color: "bg-red-500" },
  { tracking: "2767956368", order: "357049", trans: "1486086", customer: "Customer D", wh: "Robbinsville NJ Facility", status: "Delivered", color: "bg-green-500" },
  { tracking: "2767956369", order: "357050", trans: "1486087", customer: "Customer J", wh: "Robbinsville NJ Facility", status: "Paused", color: "bg-cyan-600" },
  { tracking: "2767956370", order: "357051", trans: "1486088", customer: "Customer O", wh: "Robbinsville NJ Facility", status: "Stored", color: "bg-amber-500" },
];

const transportationSteps = [
  { time: "03/29/2024 4:32 AM PDT", status: "Open", icon: "circle" },
  { time: "03/29/2024 7:32 AM PDT", status: "Sent to carrier", icon: "arrow-right" },
  { time: "03/29/2024 8:45 AM PDT", status: "Carrier Confirmed", icon: "check-circle" },
];

export default function SolutionShowcase() {
  const [activeTab, setActiveTab] = useState('fulfillment');

  const solutions = {
    fulfillment: {
      title: "Fulfillment",
      paragraph: "Run detailed quotes to check prices and transit times. Use our system to set up custom rate shopping! Check your order status while it's in the warehouse and once it ships - you receive live updates throughout the process!",
      bullets: [
        "Same day shipping",
        "Discounted shipping rates",
        "Real-time order updates",
        "Seamless platform integration",
      ],
      mockup: (
        <div className="relative bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-700 transform rotate-[3deg] scale-[0.98] hover:rotate-0 hover:scale-100 transition-transform duration-500">
          <div className="bg-gradient-to-r from-blue-800 via-indigo-700 to-purple-800 h-8 flex items-center px-4 gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-4 text-xs text-white/80">Shipping history</span>
          </div>
          <div className="p-4 text-xs text-gray-300 font-mono">
            <div className="flex justify-between mb-3">
              <span>Transaction #</span>
              <span>My Custom Views ▼</span>
            </div>
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="py-2">TRACKING #</th>
                  <th>ORDER</th>
                  <th>TRANSACTION #</th>
                  <th>CUSTOMER</th>
                  <th>WH</th>
                  <th>STATUS</th>
                </tr>
              </thead>
              <tbody>
                {fulfillmentData.map((row, i) => (
                  <tr key={i} className="border-b border-gray-800 hover:bg-gray-800/50">
                    <td className="py-3">{row.tracking}</td>
                    <td>{row.order}</td>
                    <td>{row.trans}</td>
                    <td>{row.customer}</td>
                    <td>{row.wh}</td>
                    <td>
                      <span className={`px-2 py-1 rounded text-xs ${row.color} text-white`}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    transportation: {
      title: "Transportation",
      paragraph: "Is your team tracking containers with Excel Sheets, emails and constant phone calls...? We are the first in the industry to give full, live visibility of each container from pick up to delivery and back to the port!",
      bullets: [
        "Real-time container tracking",
        "Competitive LTL and FTL rates",
        "Setup shipments with ease",
        "Two day ground delivery",
      ],
      mockup: (
        <div className="relative bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-700 transform -rotate-[2deg] scale-[0.97] hover:rotate-0 hover:scale-100 transition-transform duration-500">
          <div className="bg-gradient-to-r from-teal-800 via-cyan-700 to-blue-800 h-8 flex items-center px-4 gap-3 text-xs text-white/90">
            <span>Overview</span>
            <span>Documents</span>
            <span>Photos</span>
            <span className="bg-white/20 px-2 py-0.5 rounded">Activity</span>
            <span>Billing</span>
          </div>
          <div className="p-5 text-sm">
            <div className="mb-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-white">Container #HASU4667209</h4>
                  <p className="text-gray-400 text-xs">Size 40</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-400">Ship from</p>
                  <p className="text-white">APM (E425) NJ</p>
                </div>
              </div>
              <div className="mt-2 text-right">
                <p className="text-xs text-gray-400">Ship to</p>
                <p className="text-white">Robbinsville NJ Facility</p>
              </div>
            </div>
            <div className="space-y-3">
              {transportationSteps.map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-cyan-900/50 flex items-center justify-center flex-shrink-0">
                    {/* You can use lucide icons here instead of text */}
                    <span className="text-cyan-400 text-xs">→</span>
                  </div>
                  <div>
                    <p className="text-white">{step.status}</p>
                    <p className="text-xs text-gray-500">{step.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    warehousing: {
      title: "Warehousing",
      paragraph: "We offer clear and transparent invoices and advanced reporting - all in one place. Check your KPIs and metrics daily. Know what ships each day and all your costs!",
      bullets: [
        "Scalable storage options",
        "Multiple warehouse locations",
        "24/7 security monitoring",
        "Advanced reporting",
        "Real-time pallet visibility",
      ],
      mockup: (
        <div className="relative bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-700 transform rotate-[1.5deg] scale-[0.98] hover:rotate-0 hover:scale-100 transition-transform duration-500">
          <div className="bg-gradient-to-r from-purple-800 via-pink-700 to-rose-800 h-8 flex items-center px-4 text-xs text-white/90">
            Main KPI's
          </div>
          <div className="p-5 text-sm">
            <div className="flex justify-between mb-4">
              <select className="bg-gray-800 border border-gray-700 rounded px-3 py-1 text-xs text-gray-300">
                <option>CA Facility</option>
              </select>
              <div className="text-xs text-gray-400">
                From 06/15/2024 To 07/11/2024
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-gray-400 text-xs">All orders</p>
                <p className="text-2xl font-bold text-white">5740</p>
              </div>
              <div>
                <p className="text-gray-400 text-xs">Closed within lead time</p>
                <p className="text-2xl font-bold text-cyan-400">5458 (95%)</p>
              </div>
            </div>
            {/* Simple fake bar chart */}
            <div className="h-40 bg-gray-800/50 rounded flex items-end justify-between px-2 pt-2">
              {[120, 180, 220, 380, 450, 320, 280, 410, 360, 480, 520, 380].map((h, i) => (
                <div key={i} className="w-4 bg-gradient-to-t from-cyan-600 to-cyan-400 rounded-t-sm" style={{ height: `${h/6}%` }} />
              ))}
            </div>
          </div>
        </div>
      )
    }
  };

  const current = solutions[activeTab];

  return (
    <section className="relative bg-[#020617] py-16 md:py-24 overflow-hidden">
      {/* Optional subtle background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6 lg:px-8">
        {/* Tabs to switch between solutions (mobile friendly) */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-10 md:mb-16">
          {Object.keys(solutions).map(key => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-5 py-2.5 rounded-full text-sm md:text-base font-medium transition-all ${
                activeTab === key
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-cyan-500/20 shadow-lg'
                  : 'bg-white/5 text-gray-400 hover:text-gray-200 border border-white/10'
              }`}
            >
              {solutions[key].title}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT: Text content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 lg:space-y-8"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {current.title}
            </h2>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              {current.paragraph}
            </p>

            <ul className="space-y-4">
              {current.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-200">
                  <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-cyan-400 mt-1 flex-shrink-0" />
                  <span className="text-base md:text-lg">{bullet}</span>
                </li>
              ))}
            </ul>

            <button className="group inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium text-lg mt-4 transition-colors">
              Learn more →
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* RIGHT: Mockup dashboard */}
          <motion.div
            key={activeTab + '-mockup'}
            initial={{ opacity: 0, scale: 0.92, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            {current.mockup}
          </motion.div>
        </div>
      </div>
    </section>
  );
}