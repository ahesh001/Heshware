// src/components/LaborTrackerPage.tsx
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

/** --------- Hook: detect ultra-small screens (<= 380px) --------- */
function useIsCompact(threshold = 380) {
  const [compact, setCompact] = useState<boolean>(
    typeof window !== "undefined" ? window.innerWidth <= threshold : false
  );
  useEffect(() => {
    const onResize = () => setCompact(window.innerWidth <= threshold);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [threshold]);
  return compact;
}

/** Reusable compact-list with Show more / Show less for ultra-small screens */
function CompactList({
  items,
  compactMax,
  className,
}: {
  items: string[];
  compactMax?: number;
  className?: string;
}) {
  const isCompact = useIsCompact();
  const [expanded, setExpanded] = useState(false);

  const shouldCompact = Boolean(isCompact && compactMax && items.length > (compactMax || 0));
  const visible = shouldCompact && !expanded ? items.slice(0, compactMax) : items;

  return (
    <div className={className}>
      <ul className="text-slate-300 space-y-2 max-[380px]:space-y-1">
        {visible.map((i) => (
          <li key={i} className="max-[380px]:text-sm">• {i}</li>
        ))}
      </ul>
      {shouldCompact && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-2 text-slate-400 hover:text-slate-200 underline text-sm"
          aria-expanded={expanded}
        >
          {expanded ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
}

/** Animated accordion with rotating chevron */
function Accordion({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const [maxH, setMaxH] = useState<number | undefined>(defaultOpen ? undefined : 0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;
    if (open) {
      const h = contentRef.current.scrollHeight;
      setMaxH(h);
      const t = setTimeout(() => setMaxH(undefined), 300);
      return () => clearTimeout(t);
    } else {
      const h = contentRef.current.scrollHeight;
      setMaxH(h);
      requestAnimationFrame(() => setMaxH(0));
    }
  }, [open]);

  return (
    <div className="bg-gradient-to-r from-slate-800/50 to-blue-900/30 rounded-2xl border border-slate-700 shadow-sm transition-all duration-300">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full select-none cursor-pointer px-6 py-4 max-[380px]:px-4 max-[380px]:py-3 flex items-center justify-between"
        aria-expanded={open}
      >
        <h2 className="text-2xl md:text-3xl max-[380px]:text-xl font-bold text-white text-left">{title}</h2>
        <span
          className={`ml-4 inline-flex h-8 w-8 max-[380px]:h-7 max-[380px]:w-7 items-center justify-center rounded-full border border-slate-600 text-slate-300 transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"}`}
          aria-hidden="true"
        >
          ▾
        </span>
      </button>

      <div
        ref={contentRef}
        style={{ maxHeight: maxH, transition: "max-height 300ms ease" }}
        className={`px-6 max-[380px]:px-4 overflow-hidden ${open ? "pb-6 max-[380px]:pb-4" : "pb-0"}`}
      >
        <div className={`transition-all duration-300 ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"}`}>
          {children}
        </div>
      </div>
    </div>
  );
}

function FeatureStat({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className={`bg-gradient-to-r ${color} p-[1px] rounded-lg`}>
      <div className="bg-slate-900/70 rounded-lg p-4 max-[380px]:p-3 border border-slate-700 h-full">
        <h4 className="text-slate-300 font-semibold mb-1 max-[380px]:text-sm">{label}</h4>
        <p className="text-white max-[380px]:text-sm">{value}</p>
      </div>
    </div>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-slate-800/50 p-6 max-[380px]:p-4 rounded-xl border border-slate-700 hover:border-blue-500/40 transition-all duration-300">
      <h3 className="text-2xl max-[380px]:text-lg font-semibold text-white mb-4 max-[380px]:mb-3">{title}</h3>
      {children}
    </div>
  );
}

function PlanCard({ name, price, details }: { name: string; price: string; details: string }) {
  return (
    <div className="bg-slate-900/60 rounded-xl p-4 max-[380px]:p-3 border border-slate-700">
      <div className="flex items-baseline justify-between">
        <h4 className="text-white font-semibold max-[380px]:text-sm">{name}</h4>
        <div className="text-cyan-300 font-bold max-[380px]:text-sm">{price}</div>
      </div>
      <p className="text-slate-300 mt-2 max-[380px]:mt-1 max-[380px]:text-sm">{details}</p>
    </div>
  );
}

function RoleCard({ role, items, compactMax }: { role: string; items: string[]; compactMax?: number }) {
  return (
    <div className="bg-slate-800/50 p-6 max-[380px]:p-4 rounded-xl border border-slate-700">
      <h3 className="text-xl max-[380px]:text-lg font-semibold text-white mb-3">{role}</h3>
      <CompactList items={items} compactMax={compactMax} />
    </div>
  );
}

function ComingSoonImage({ label = "Image" }: { label?: string }) {
  return (
    <div className="mt-4">
      <div className="aspect-[16/9] max-[380px]:aspect-[4/3] w-full rounded-xl border border-dashed border-slate-600 bg-slate-900/40 grid place-items-center overflow-hidden relative">
        {/* subtle shimmer */}
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-[shimmer_2s_infinite] pointer-events-none" />
        <div className="text-center px-4">
          <div className="text-slate-200 font-semibold max-[380px]:text-sm">{label} coming soon</div>
          <div className="text-slate-400 text-sm max-[380px]:text-xs">Add photos here when ready</div>
        </div>
      </div>
      <style>{`
        @keyframes shimmer { 100% { transform: translateX(100%); } }
      `}</style>
    </div>
  );
}

export default function LaborTrackerPage() {
  const isCompact = useIsCompact();
  const navigate = useNavigate();
  const backOr = (fallback: string) => {
    if (window.history.length > 1) navigate(-1);
    else navigate(fallback);
  };

  // Compact-aware Overview stats (show fewer on very small screens)
  const overviewStats = [
    { label: "Status", value: "Pilot-ready", color: "from-blue-500 to-cyan-500" },
    { label: "Focus", value: "AI-assisted logistics", color: "from-purple-500 to-pink-500" },
    { label: "Hardware", value: "SmartBox (optional)", color: "from-green-500 to-emerald-500" },
    { label: "Modes", value: "Software-only or Hybrid", color: "from-amber-500 to-yellow-500" },
  ];
  const statsToShow = isCompact ? overviewStats.slice(0, 2) : overviewStats;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-black relative overflow-hidden">
      {/* Shooting Stars Background (hide on ultra-small) */}
      <div className="shooting-stars-container max-[380px]:hidden">
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 p-6 max-[380px]:p-4 flex justify-between items-center">
        <button
          onClick={() => backOr("/learn-more")}
          className="text-slate-300 hover:text-white transition-colors duration-300 flex items-center gap-2 max-[380px]:text-sm"
        >
          ← Back to Learn More
        </button>
        <Link
          to="/"
          className="text-slate-300 hover:text-white transition-colors duration-300 max-[380px]:text-sm"
        >
          Home
        </Link>
      </nav>

      {/* Header / Hero */}
      <header className="relative z-10 text-center py-12 max-[380px]:py-8">
        <div className="w-20 h-20 max-[380px]:w-14 max-[380px]:h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mx-auto mb-6 max-[380px]:mb-4 grid place-items-center">
          <span className="text-white text-3xl max-[380px]:text-2xl font-bold">📦</span>
        </div>
        <h1 className="text-5xl md:text-6xl max-[380px]:text-4xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent mb-4">
          LaborTracker
        </h1>
        <p className="text-slate-300 text-xl max-[380px]:text-base max-w-3xl mx-auto px-8 max-[380px]:px-4">
          Smart delivery tracking for contractors, dispatchers, and logistics teams. Use QR-based SmartBoxes for
          secure drop-offs, or connect carrier tracking (FedEx/UPS/USPS) to monitor deliveries end-to-end.
        </p>
        <div className="mt-8 max-[380px]:mt-6 flex gap-4 max-[380px]:gap-3 justify-center">
          <Link
            to="/contact"
            className="px-8 py-4 max-[380px]:px-5 max-[380px]:py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
          >
            Schedule Demo
          </Link>
          <a
            href="https://github.com/ahesh001/Labor_Tracker"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 max-[380px]:px-5 max-[380px]:py-3 border border-slate-600 text-slate-300 rounded-lg hover:bg-slate-800 transition-all duration-300"
          >
            View Documentation
          </a>
        </div>
      </header>

      <main className="relative z-10 px-8 pb-16 max-[380px]:px-4 max-[380px]:pb-12">
        <div className="max-w-6xl mx-auto space-y-6 max-[380px]:space-y-4">

          {/* Overview & Highlights */}
          <Accordion title="Overview & Highlights" defaultOpen>
            <p className="text-slate-300 text-lg max-[380px]:text-base leading-relaxed mb-6 max-[380px]:mb-4">
              LaborTracker unifies <span className="font-semibold">AI-assisted workflows</span> for mobile teams with an
              optional <span className="font-semibold">SmartBox</span> hardware add-on—manage people and physical assets in one place.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-[380px]:gap-3 mb-6 max-[380px]:mb-4">
              {statsToShow.map((s) => (
                <FeatureStat key={s.label} label={s.label} value={s.value} color={s.color} />
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-[380px]:gap-3">
              <Card title="Platform Features">
                <CompactList
                  items={[
                    "📍 Real-time GPS crew tracking",
                    "🕒 Shift logs and delivery timelines",
                    "🤖 Insights powered by Marven-L",
                    "📱 Mobile-first UX for field teams and dispatch",
                  ]}
                  compactMax={3}
                />
              </Card>

              <Card title="SmartBox Teaser">
                <p className="text-slate-300">
                  A rugged, sensor-enabled unit that syncs with LaborTracker for secure drop-offs, verifiable
                  handoffs, and accountability.
                </p>
                <CompactList
                  className="mt-3"
                  items={[
                    "QR/BLE linking (optional LTE)",
                    "Chain-of-custody logs",
                    "Tamper detection",
                  ]}
                  compactMax={3}
                />
                <ComingSoonImage label="SmartBox photos" />
              </Card>
            </div>
          </Accordion>

          {/* Two-Path Tracking System */}
          <Accordion title="Two-Path Tracking System" defaultOpen>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-[380px]:gap-3">
              <Card title="1) With SmartBox (Hardware Integration)">
                <CompactList
                  items={[
                    "Pack box → scan QR → delivery entry created",
                    "SmartBox ID ties to GPS and status updates",
                    "Customer can scan QR to confirm receipt",
                  ]}
                  compactMax={3}
                />
                <p className="text-slate-300 mt-3">
                  <span className="font-semibold">Benefits:</span> Tamper-resistant tracking and clear handoffs.
                </p>
              </Card>

              <Card title="2) Software-Only Mode (No SmartBox)">
                <CompactList
                  items={[
                    "Paste third-party tracking numbers (FedEx/UPS/USPS)",
                    "Poll carrier APIs or update status manually",
                    "Same dashboard flow as SmartBox deliveries",
                  ]}
                  compactMax={3}
                />
                <p className="text-slate-300 mt-3">
                  <span className="font-semibold">Benefits:</span> No hardware, fast onboarding, works with existing tools.
                </p>
              </Card>
            </div>

            <div className="mt-10 max-[380px]:mt-6">
              <img
                width={1536}
                height={1024}
                className="w-full rounded-xl border border-slate-700 shadow-lg"
                alt="Two_Path_Sys_LaborTracker"
                src="https://github.com/user-attachments/assets/e9c30517-b0fa-4140-826e-1107168f69ce"
              />
            </div>
          </Accordion>

          {/* Role-Based UX */}
          <Accordion title="Role-Based User Experience" defaultOpen>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-[380px]:gap-3">
              <RoleCard
                role="User (Truck Driver)"
                items={[
                  "Start Delivery",
                  "Mark as Delivered (proof)",
                  "Log Labor Time",
                  "Report Delivery Issue",
                  "Live Map / Route",
                  "Upload Proof (photo/signature)",
                  "Request Maintenance",
                  "Geofence Check-In / QR",
                  "Message Lead",
                ]}
                compactMax={6}
              />
              <RoleCard
                role="Lead (Dispatcher)"
                items={[
                  "View Driver Activity (live)",
                  "Track Live Deliveries",
                  "Reassign Delivery",
                  "File Incident Report",
                  "Approve Labor Logs",
                  "Daily Summary & Exports",
                  "Edit Assignments",
                  "Upload Compliance Docs",
                  "Verify AI Alerts",
                  "Broadcast Message",
                ]}
                compactMax={6}
              />
              <RoleCard
                role="Admin (Compliance)"
                items={[
                  "Manage Users & Roles",
                  "Dashboard Analytics (KPIs)",
                  "Audit Trail Logs",
                  "View Incidents",
                  "System Config / Alerts",
                  "Export Reports (DOT/OSHA)",
                  "Access Controls",
                  "Compliance Mode (monthly)",
                  "Send System Notice",
                ]}
                compactMax={6}
              />
              <RoleCard
                role="NonUser (Customer)"
                items={[
                  "Track My Delivery (live)",
                  "View Proof (signature/photos)",
                  "Submit Feedback",
                  "Order History",
                  "Request Callback",
                ]}
                compactMax={4}
              />
            </div>
          </Accordion>

          {/* Use Cases */}
          <Accordion title="Use Cases">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-[380px]:gap-3">
              <Card title="Operational">
                <CompactList
                  items={[
                    "E-commerce last-mile proof-of-delivery",
                    "Fleet tracking and shift reporting",
                    "Field services: secure tool handoffs",
                    "Construction and events coordination",
                  ]}
                  compactMax={3}
                />
              </Card>
              <Card title="Regulated & Sensitive">
                <CompactList
                  items={[
                    "Healthcare: secure supply drops",
                    "Non-profits: aid distribution logistics",
                    "Food & Beverage: condition-aware logs",
                    "Supply chain: multi-operator handoffs",
                  ]}
                  compactMax={3}
                />
              </Card>
            </div>
          </Accordion>

          {/* Pricing – Software Plans */}
          <Accordion title="Pricing – Software Plans" defaultOpen>
            <div className="bg-slate-800/50 p-6 max-[380px]:p-4 rounded-2xl border border-slate-700">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 max-[380px]:gap-3">
                <PlanCard name="Free" price="$0" details="Basic chat, time insights, usage tracking" />
                <PlanCard name="Pro" price="$49/mo" details="Up to 10 workers + AI upgrades" />
                <PlanCard name="Enterprise (Nonprofit)" price="$499/yr" details="Full features + support" />
                <PlanCard name="Enterprise (Full)" price="$3,000/yr" details="Up to 5 teams, SmartBox bundle, extended retention" />
                <PlanCard name="Add-on User" price="$5/user" details="Scale team size flexibly" />
              </div>
            </div>
          </Accordion>

          {/* Marven-L Tier Pricing (collapsed by default; compact-friendly) */}
          <Accordion title="Marven-L Tier Pricing">
            <div className="bg-slate-800/50 p-6 max-[380px]:p-4 rounded-2xl border border-slate-700">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 max-[380px]:gap-3">
                <PlanCard name="Core" price="Included in Pro" details="Basic chat, time insights, Q&A" />
                <PlanCard name="Pro" price="+$25/mo" details="Multi-turn queries, voice, analytics" />
                <PlanCard name="Vision Pack" price="+$15/mo" details="OCR / photo scanning" />
                <PlanCard name="AutoPilot" price="+$35/mo" details="Auto-scheduling, route optimization" />
                <PlanCard name="Full Suite" price="+$59/mo" details="All Marven packs combined" />
              </div>
              <p className="text-slate-400 mt-3 max-[380px]:text-sm">
                Modular features — pick what you need, scale as you grow.
              </p>
            </div>
          </Accordion>

          {/* Bottom CTA */}
          <div className="text-center pt-8">
            <h2 className="text-3xl max-[380px]:text-2xl font-bold text-white mb-4">Ready to Transform Your Logistics?</h2>
            <p className="text-slate-300 text-lg max-[380px]:text-base mb-6">
              Launch in software-only mode, then add SmartBoxes as you scale.
            </p>
            <div className="flex gap-4 max-[380px]:gap-3 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 max-[380px]:px-5 max-[380px]:py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Schedule Demo
              </Link>
              <a
                href="https://github.com/ahesh001/Labor_Tracker"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 max-[380px]:px-5 max-[380px]:py-3 border border-slate-600 text-slate-300 rounded-lg hover:bg-slate-800 transition-all duration-300"
              >
                View Documentation
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
