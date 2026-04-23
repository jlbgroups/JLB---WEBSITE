import { useState } from 'react'
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
} from 'react-simple-maps'
import { motion, AnimatePresence } from 'framer-motion'

// GeoJSON for the world map (110m resolution for performance)
const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'

const hq = { name: 'Oman', flag: '🇴🇲', coordinates: [58.4, 23.6], isHQ: true }

const locations = [
  { name: 'UAE', flag: '🇦🇪', coordinates: [54.4, 24.5] },
  { name: 'Bahrain', flag: '🇧🇭', coordinates: [50.6, 26.2] },
  { name: 'Qatar', flag: '🇶🇦', coordinates: [51.2, 25.4] },
  { name: 'India', flag: '🇮🇳', coordinates: [78.9, 20.6] },
  { name: 'Malaysia', flag: '🇲🇾', coordinates: [102.0, 4.2] },
]

export default function GeoTradeMap() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <div className="relative w-full h-[350px] md:h-[500px] bg-gradient-to-br from-[#0D2418] to-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-forest/40 rounded-full blur-[100px] pointer-events-none" />

      <ComposableMap
        projection="geoEquirectangular"
        projectionConfig={{
          scale: 380,
          center: [75, 18], // Center around the Middle East and South Asia
        }}
        className="w-full h-full"
      >
        {/* World Geographies */}
        <Geographies geography={geoUrl}>
          {({ geographies }: { geographies: any[] }) =>
            geographies.map((geo: any) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="rgba(255, 255, 255, 0.04)"
                stroke="rgba(63, 162, 110, 0.15)"
                strokeWidth={0.5}
                style={{
                  default: { outline: 'none' },
                  hover: { fill: 'rgba(63, 162, 110, 0.1)', outline: 'none' },
                  pressed: { outline: 'none' },
                }}
              />
            ))
          }
        </Geographies>

        {/* Animated Connection Arcs */}
        {locations.map((loc, i) => (
          <Line
            key={`line-${i}`}
            from={hq.coordinates as [number, number]}
            to={loc.coordinates as [number, number]}
            stroke="#3FA26E"
            strokeWidth={1.5}
            strokeLinecap="round"
            className="opacity-40"
          >
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{
                duration: 2,
                delay: i * 0.3 + 0.5,
                ease: "easeInOut"
              }}
            />
          </Line>
        ))}

        {/* HQ Marker (Oman) */}
        <Marker coordinates={hq.coordinates as [number, number]}>
          <g className="cursor-pointer" onMouseEnter={() => setHovered(hq.name)} onMouseLeave={() => setHovered(null)}>
            <circle r={6} fill="#3FA26E" />
            <motion.circle
              r={12}
              stroke="#3FA26E"
              strokeWidth={1}
              fill="transparent"
              animate={{ scale: [1, 2], opacity: [0.5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
            />
            <motion.circle
              r={18}
              stroke="#3FA26E"
              strokeWidth={0.5}
              fill="transparent"
              animate={{ scale: [1, 2], opacity: [0.3, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
            />
          </g>
        </Marker>

        {/* Location Markers */}
        {locations.map((loc, i) => (
          <Marker key={loc.name} coordinates={loc.coordinates as [number, number]}>
            <g
              className="cursor-pointer"
              onMouseEnter={() => setHovered(loc.name)}
              onMouseLeave={() => setHovered(null)}
            >
              <circle r={4} fill="#3FA26E" opacity={0.8} />
              <motion.circle
                r={10}
                stroke="#3FA26E"
                strokeWidth={1}
                fill="transparent"
                animate={{ scale: [1, 1.8], opacity: [0.4, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: i * 0.4 }}
              />
            </g>
          </Marker>
        ))}
      </ComposableMap>

      {/* Hover Labels (AnimatePresence for smooth entry/exit) */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            className="absolute top-10 left-1/2 -translate-x-1/2 z-30"
          >
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 flex items-center gap-3 shadow-2xl">
              <span className="text-xl">
                {[hq, ...locations].find(l => l.name === hovered)?.flag}
              </span>
              <span className="text-[12px] font-bold text-white tracking-[0.1em] uppercase whitespace-nowrap">
                {hovered} {hovered === hq.name && '(HQ)'}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Info Tag */}
      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between pointer-events-none">
        <p className="text-white/40 text-[10px] font-medium tracking-[0.15em] uppercase flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          Strategic Trade Infrastructure
        </p>
        <div className="flex gap-2">
           <div className="w-2 h-2 rounded-full bg-white/20" />
           <div className="w-2 h-2 rounded-full bg-accent/40" />
           <div className="w-2 h-2 rounded-full bg-white/20" />
        </div>
      </div>
    </div>
  )
}
