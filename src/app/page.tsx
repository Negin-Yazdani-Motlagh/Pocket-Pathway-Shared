export default function Home() {
  return (
    <div className="min-h-full bg-zinc-950 text-zinc-50">
      {/* background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 overflow-hidden"
      >
        <div className="absolute left-[-20%] top-[-20%] h-[520px] w-[520px] rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute right-[-10%] top-[10%] h-[520px] w-[520px] rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute bottom-[-30%] left-[15%] h-[620px] w-[620px] rounded-full bg-emerald-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex w-full max-w-7xl gap-6 px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
        {/* Sidebar */}
        <aside className="hidden w-64 shrink-0 lg:block">
          <div className="sticky top-8 space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-cyan-400 text-zinc-950">
                    <span className="text-sm font-black tracking-tight">PP</span>
                  </div>
                  <div className="leading-tight">
                    <div className="text-sm font-semibold">Pocket Pathway</div>
                    <div className="text-xs text-zinc-300/80">Profile</div>
                  </div>
                </div>
                <button
                  type="button"
                  className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/5 text-zinc-200 hover:bg-white/10"
                  aria-label="Create"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 5v14M5 12h14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <nav className="rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur">
              <SidebarItem
                label="Journey"
                hint="Daily path"
                icon="route"
              />
              <SidebarItem
                label="Practice"
                hint="Quick drills"
                icon="bolt"
              />
              <SidebarItem label="Goals" hint="Targets" icon="flag" />
              <SidebarItem
                label="Leaderboard"
                hint="Compete"
                icon="trophy"
              />
              <SidebarItem label="Store" hint="Perks" icon="bag" />
              <SidebarItem label="Profile" hint="You" icon="user" active />
              <div className="mt-2 border-t border-white/10 pt-2">
                <SidebarItem label="More" hint="Settings" icon="dots" />
              </div>
            </nav>

            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-4">
              <div className="text-sm font-semibold">Focus streak</div>
              <div className="mt-2 flex items-end justify-between">
                <div>
                  <div className="text-2xl font-black tracking-tight">7</div>
                  <div className="text-xs text-zinc-300/80">days in a row</div>
                </div>
                <div className="h-10 w-24 rounded-xl bg-white/5 p-1">
                  <div className="h-full w-[70%] rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400" />
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main */}
        <main className="min-w-0 flex-1 space-y-6">
          {/* Header */}
          <header className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-800 to-zinc-900">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(236,72,153,0.55),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(34,211,238,0.45),transparent_55%)]" />
                </div>
                <div>
                  <div className="text-lg font-semibold tracking-tight">
                    Negin
                  </div>
                  <div className="text-sm text-zinc-300/80">
                    Add username • Choose a vibe • Start a streak
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-zinc-100 hover:bg-white/10"
                >
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-xl bg-white/10">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M4 20h4l10.5-10.5a2.828 2.828 0 0 0 0-4L18.5 5a2.828 2.828 0 0 0-4 0L4 15.5V20Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  Edit profile
                </button>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-4 py-2 text-sm font-extrabold text-zinc-950 hover:opacity-95"
                >
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-xl bg-black/10">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M12 3v18M3 12h18"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  Start a path
                </button>
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <StatCard label="Following" value="12" sub="Creators" icon="users" />
              <StatCard label="Followers" value="54" sub="Learners" icon="spark" />
              <StatCard label="Streak" value="7" sub="Days" icon="flame" />
              <StatCard label="Total XP" value="1200" sub="Points" icon="xp" />
            </div>
          </header>

          {/* Content */}
          <section className="grid gap-6 lg:grid-cols-3">
            <div className="space-y-6 lg:col-span-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur sm:p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h2 className="text-base font-semibold tracking-tight">
                      Badges
                    </h2>
                    <p className="mt-1 text-sm text-zinc-300/80">
                      Earn badges by practicing consistently and completing
                      quests.
                    </p>
                  </div>
                  <button
                    type="button"
                    className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-zinc-100 hover:bg-white/10"
                  >
                    View all
                  </button>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <BadgeCard
                    title="Basic Profile"
                    desc="Add a username and pick a theme."
                    progress="1/3"
                    tone="fuchsia"
                  />
                  <BadgeCard
                    title="The Start"
                    desc="Solve 3 starter puzzles."
                    progress="2/3"
                    tone="cyan"
                  />
                  <BadgeCard
                    title="Daily Coder"
                    desc="Maintain a 3‑day streak."
                    progress="1/3"
                    tone="emerald"
                  />
                  <BadgeCard
                    title="Clean Streak"
                    desc="Practice 5 days without skipping."
                    progress="1/5"
                    tone="amber"
                  />
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur sm:p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h2 className="text-base font-semibold tracking-tight">
                      Today’s plan
                    </h2>
                    <p className="mt-1 text-sm text-zinc-300/80">
                      A tiny, satisfying session to keep momentum.
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <QuickCard
                    title="Warm-up"
                    desc="2-minute concept recap"
                    meta="Easy • 2 XP"
                    icon="bolt"
                  />
                  <QuickCard
                    title="Practice set"
                    desc="3 problems (mixed)"
                    meta="Medium • 35 XP"
                    icon="route"
                  />
                  <QuickCard
                    title="Mini-project"
                    desc="Build a UI card component"
                    meta="Fun • 60 XP"
                    icon="spark"
                  />
                  <QuickCard
                    title="Reflect"
                    desc="One sentence: what changed?"
                    meta="Habit • 5 XP"
                    icon="dots"
                  />
                </div>
              </div>
            </div>

            {/* Right rail */}
            <div className="space-y-6">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur sm:p-6">
                <h2 className="text-base font-semibold tracking-tight">
                  Get more
                </h2>
                <p className="mt-1 text-sm text-zinc-300/80">
                  Unlock advanced paths and build a learning routine that sticks.
                </p>
                <button
                  type="button"
                  className="mt-4 w-full rounded-2xl bg-gradient-to-r from-amber-300 to-orange-400 px-4 py-3 text-sm font-extrabold text-zinc-950 hover:opacity-95"
                >
                  Go Pro
                </button>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur sm:p-6">
                <h2 className="text-base font-semibold tracking-tight">
                  Actions
                </h2>
                <div className="mt-4 space-y-2">
                  <ActionRow label="Edit profile" icon="edit" />
                  <ActionRow label="Public profile" icon="globe" />
                  <ActionRow label="Preferences" icon="sliders" />
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur sm:p-6">
                <h2 className="text-base font-semibold tracking-tight">
                  Get social
                </h2>
                <div className="mt-4 space-y-2">
                  <ActionRow label="Search friends" icon="search" />
                  <ActionRow label="Refer a friend" icon="gift" />
                </div>
                <div className="mt-5 border-t border-white/10 pt-4 text-xs text-zinc-300/70">
                  About • Certifications • Affiliate • Business • Blog
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

function SidebarItem({
  label,
  hint,
  icon,
  active,
}: {
  label: string;
  hint: string;
  icon: IconName;
  active?: boolean;
}) {
  const isActive = !!active;
  return (
    <button
      type="button"
      className={[
        "group flex w-full items-center justify-between rounded-2xl px-3 py-2 text-left transition",
        isActive
          ? "bg-white/10 ring-1 ring-fuchsia-400/25"
          : "hover:bg-white/10",
      ].join(" ")}
    >
      <span className="flex items-center gap-3">
        <span
          className={[
            "grid h-9 w-9 place-items-center rounded-xl border text-zinc-200 transition",
            isActive
              ? "border-white/20 bg-gradient-to-br from-fuchsia-500/30 to-cyan-400/15"
              : "border-white/10 bg-white/5 group-hover:bg-white/10",
          ].join(" ")}
        >
          <Icon name={icon} />
        </span>
        <span className="leading-tight">
          <span className="block text-sm font-semibold">{label}</span>
          <span className="block text-xs text-zinc-300/70">{hint}</span>
        </span>
      </span>
      {isActive ? (
        <span className="h-2 w-6 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400" />
      ) : null}
    </button>
  );
}

function StatCard({
  label,
  value,
  sub,
  icon,
}: {
  label: string;
  value: string;
  sub: string;
  icon: IconName;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="flex items-center justify-between">
        <div className="text-xs font-semibold text-zinc-300/80">{label}</div>
        <div className="grid h-8 w-8 place-items-center rounded-xl bg-white/5 text-zinc-200">
          <Icon name={icon} />
        </div>
      </div>
      <div className="mt-3 text-2xl font-black tracking-tight">{value}</div>
      <div className="mt-1 text-xs text-zinc-300/70">{sub}</div>
    </div>
  );
}

function BadgeCard({
  title,
  desc,
  progress,
  tone,
}: {
  title: string;
  desc: string;
  progress: string;
  tone: "fuchsia" | "cyan" | "emerald" | "amber";
}) {
  const [currentRaw, totalRaw] = progress.split("/");
  const current = Number(currentRaw);
  const total = Number(totalRaw);
  const rawPct = total > 0 ? (current / total) * 100 : 0;
  // Keep a tiny "progress visible" bar when current is 0.
  const pct =
    current === 0 ? 8 : Math.max(0, Math.min(100, Math.round(rawPct)));

  const toneClasses =
    tone === "fuchsia"
      ? "from-fuchsia-500/25 to-fuchsia-500/0"
      : tone === "cyan"
        ? "from-cyan-400/25 to-cyan-400/0"
        : tone === "emerald"
          ? "from-emerald-400/25 to-emerald-400/0"
          : "from-amber-300/25 to-amber-300/0";

  const fillTone =
    tone === "fuchsia"
      ? "from-fuchsia-400 to-cyan-300"
      : tone === "cyan"
        ? "from-cyan-300 to-sky-300"
        : tone === "emerald"
          ? "from-emerald-300 to-cyan-300"
          : "from-amber-300 to-orange-300";

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4">
      <div
        aria-hidden="true"
        className={[
          "pointer-events-none absolute inset-0 bg-gradient-to-br",
          toneClasses,
        ].join(" ")}
      />
      <div className="relative flex items-start justify-between gap-3">
        <div>
          <div className="text-sm font-semibold">{title}</div>
          <div className="mt-1 text-sm text-zinc-300/80">{desc}</div>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 px-2 py-1 text-xs font-semibold text-zinc-200">
          {progress}
        </div>
      </div>
      <div className="relative mt-4 h-2 w-full rounded-full bg-white/10">
        <div
          className={[
            "h-2 rounded-full bg-gradient-to-r",
            fillTone,
          ].join(" ")}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

function QuickCard({
  title,
  desc,
  meta,
  icon,
}: {
  title: string;
  desc: string;
  meta: string;
  icon: IconName;
}) {
  return (
    <button
      type="button"
      className="group w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-left transition hover:bg-white/10"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-sm font-semibold">{title}</div>
          <div className="mt-1 text-sm text-zinc-300/80">{desc}</div>
          <div className="mt-3 text-xs font-semibold text-zinc-300/70">
            {meta}
          </div>
        </div>
        <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/5 text-zinc-200 group-hover:bg-white/10">
          <Icon name={icon} />
        </div>
      </div>
    </button>
  );
}

function ActionRow({ label, icon }: { label: string; icon: IconName }) {
  return (
    <button
      type="button"
      className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-sm font-semibold text-zinc-100 hover:bg-white/10"
    >
      <span className="flex items-center gap-3">
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/5 text-zinc-200">
          <Icon name={icon} />
        </span>
        {label}
      </span>
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="text-zinc-300/70"
      >
        <path
          d="M9 18l6-6-6-6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

type IconName =
  | "route"
  | "bolt"
  | "flag"
  | "trophy"
  | "bag"
  | "user"
  | "dots"
  | "users"
  | "spark"
  | "flame"
  | "xp"
  | "edit"
  | "globe"
  | "sliders"
  | "search"
  | "gift";

function Icon({ name }: { name: IconName }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true" as const,
  };

  switch (name) {
    case "route":
      return (
        <svg {...common}>
          <path
            d="M7 17c2.5 0 2.5-3 5-3s2.5 3 5 3"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M7 7h.01M17 7h.01"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      );
    case "bolt":
      return (
        <svg {...common}>
          <path
            d="M13 2L3 14h7l-1 8 12-14h-7l-1-6Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "flag":
      return (
        <svg {...common}>
          <path
            d="M5 3v18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M5 4h12l-2 4 2 4H5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "trophy":
      return (
        <svg {...common}>
          <path
            d="M8 4h8v4a4 4 0 0 1-8 0V4Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M6 6H4v2a4 4 0 0 0 4 4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M18 6h2v2a4 4 0 0 1-4 4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M10 16h4M9 20h6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "bag":
      return (
        <svg {...common}>
          <path
            d="M7 8V7a5 5 0 0 1 10 0v1"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M6 8h12l-1 13H7L6 8Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "user":
      return (
        <svg {...common}>
          <path
            d="M20 21a8 8 0 1 0-16 0"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      );
    case "dots":
      return (
        <svg {...common}>
          <path
            d="M6 12h.01M12 12h.01M18 12h.01"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      );
    case "users":
      return (
        <svg {...common}>
          <path
            d="M17 21a6 6 0 0 0-12 0"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      );
    case "spark":
      return (
        <svg {...common}>
          <path
            d="M12 2l1.2 4.2L17 7l-3.8 1.1L12 12l-1.2-3.9L7 7l3.8-.8L12 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M5 14l.8 2.8L8 17.5l-2.2.7L5 21l-.8-2.8L2 17.5l2.2-.7L5 14Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "flame":
      return (
        <svg {...common}>
          <path
            d="M12 22c4 0 7-3 7-7 0-3.5-2.5-5.5-4-7.5-.9-1.2-1.6-2.7-1.6-4.9-2 1-4.4 3.4-4.4 6.9 0 1.2.3 2.4.8 3.5-1.8-.3-3.3-1.7-3.8-3.6C4.8 10.9 4 12.8 4 15c0 4 3 7 8 7Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "xp":
      return (
        <svg {...common}>
          <path
            d="M7 7l10 10M17 7L7 17"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "edit":
      return (
        <svg {...common}>
          <path
            d="M4 20h4l10.5-10.5a2.828 2.828 0 0 0 0-4L18.5 5a2.828 2.828 0 0 0-4 0L4 15.5V20Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "globe":
      return (
        <svg {...common}>
          <path
            d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M2 12h20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M12 2c3 3 4.5 6.7 4.5 10S15 19 12 22c-3-3-4.5-6.7-4.5-10S9 5 12 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "sliders":
      return (
        <svg {...common}>
          <path
            d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M2 14h4M10 12h4M18 16h4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "search":
      return (
        <svg {...common}>
          <path
            d="M10.5 18a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M16.3 16.3 21 21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "gift":
      return (
        <svg {...common}>
          <path
            d="M20 12v10H4V12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M22 7H2v5h20V7Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M12 22V7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M12 7H7.5a2.5 2.5 0 1 1 0-5C11 2 12 7 12 7Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M12 7h4.5a2.5 2.5 0 1 0 0-5C13 2 12 7 12 7Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}
