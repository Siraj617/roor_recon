"use client";

// Realistic-looking Logo Component
const CompanyLogo = ({ name, className }: { name: string; className?: string }) => (
    <div className={`flex items-center gap-2 font-bold text-xl tracking-tight ${className}`}>
        <div className="w-6 h-6 bg-slate-800 rounded-md flex-shrink-0" />
        <span>{name}</span>
    </div>
);

const companies = [
    "Microsoft", "Uber", "Airbnb", "Spotify", "Slack", "Twilio", "Stripe", "Netflix"
];

export function Research() {
    return (
        <section className="py-16 bg-white border-y border-slate-100 overflow-hidden">
            <div className="container px-4 mx-auto">
                <p className="text-center text-slate-500 mb-10 text-sm font-semibold uppercase tracking-widest">
                    Trusted by Security Teams at
                </p>

                <div className="relative overflow-hidden mask-linear-gradient">
                    <div className="flex gap-20 items-center animate-scroll whitespace-nowrap">
                        {[...companies, ...companies].map((company, index) => (
                            <div key={index} className="opacity-40 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 cursor-default">
                                <CompanyLogo name={company} className="text-slate-900" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx global>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
        </section>
    );
}
