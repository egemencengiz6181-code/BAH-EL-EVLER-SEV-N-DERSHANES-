import { getTranslations } from 'next-intl/server';
import ReferencesMarquee from '@/components/sections/ReferencesMarquee';

type Student = {
  name: string;
  achievement: string;
  exam: 'YKS' | 'YKS_RANK';
};

const students: Student[] = [
  { name: 'Ayşe K.',   achievement: 'YKS — İstanbul Tıp Fakültesi',      exam: 'YKS' },
  { name: 'Kerem A.', achievement: "YKS İlk 1000",            exam: 'YKS_RANK' },
  { name: 'Selin T.', achievement: 'YKS — İTÜ Bilgisayar Müh.',    exam: 'YKS' },
  { name: 'Mert Ö.',  achievement: 'YKS İlk 500',                     exam: 'YKS_RANK' },
  { name: 'Zeynep B.', achievement: 'YKS — Boğaziçi Üniversitesi',    exam: 'YKS' },
  { name: 'Arda Y.',  achievement: "YKS İlk 2000",            exam: 'YKS_RANK' },
  { name: 'Melis G.', achievement: 'YKS — Hacettepe Tıp Fak.', exam: 'YKS' },
  { name: 'Can S.',   achievement: 'YKS — Ankara Hukuk Fak.',                     exam: 'YKS' },
];

function AchievementCard({ name, achievement, exam }: Student) {
  const isRank = exam === 'YKS_RANK';
  return (
    <div className="group relative rounded-2xl p-px overflow-hidden">
      {/* Gradient border layer */}
      <div
        className={`absolute inset-0 rounded-2xl transition-opacity duration-500 ${
          isRank
            ? 'bg-gradient-to-br from-[#A03500]/40 via-[#A03500]/10 to-transparent'
            : 'bg-gradient-to-br from-primary/50 via-primary/10 to-transparent'
        }`}
      />
      {/* Card body */}
      <div className="relative rounded-[15px] bg-white dark:bg-neutral-900 px-5 py-8 flex flex-col items-center text-center gap-3 h-full min-h-[170px] justify-center">
        <span
          className={`text-[10px] font-black uppercase tracking-[0.25em] px-3 py-1 rounded-full ${
            isRank
              ? 'bg-[#A03500]/10 text-[#A03500] dark:bg-[#A03500]/20 dark:text-[#FF9E7F]'
              : 'bg-[#E35205]/10 text-[#E35205] dark:bg-[#E35205]/20 dark:text-[#FF9E7F]'
          }`}
        >
          YKS
        </span>
        <p className="text-xl md:text-2xl font-black text-foreground leading-tight">
          {achievement}
        </p>
        <p className="text-xs font-semibold text-foreground/40">{name}</p>
      </div>
      {/* Hover glow behind card */}
      <div
        className={`absolute inset-0 rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl ${
          isRank ? 'bg-[#A03500]/15' : 'bg-primary/20'
        }`}
      />
    </div>
  );
}

export default async function ReferencesPage() {
  const t = await getTranslations('References');

  return (
    <main className="min-h-screen bg-background">
      {/* ── Hero Section ──────────────────────────────────────────────────── */}
      <section className="pt-36 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/5 blur-[140px] rounded-full" />
        </div>
        <div className="relative max-w-3xl mx-auto space-y-6">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary/70">
            Başarı Hikayeleri
          </p>
          <h1 className="text-4xl md:text-6xl font-black text-foreground leading-tight">
            {t('title')}
          </h1>
          <p className="text-lg text-foreground/50 max-w-xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* ── Student Cards Grid ─────────────────────────────────────────────── */}
      <section className="pb-28 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {students.map((student) => (
            <AchievementCard key={student.name} {...student} />
          ))}
        </div>
      </section>

      {/* ── Marquee Section ────────────────────────────────────────────────── */}
      <ReferencesMarquee />
    </main>
  );
}
