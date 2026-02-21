export function TestimonialCarousel() {
    return (
        <section className="py-24 bg-brand-dark text-white relative">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-amber/50 to-transparent" />
            <div className="container mx-auto px-4 max-w-4xl">

                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
                        Don't Just Take Our Word For It
                    </h2>
                    <div className="flex justify-center items-center gap-2 text-brand-amber text-xl">
                        ★★★★★
                    </div>
                </div>

                <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-2xl relative">
                    <div className="absolute top-6 left-6 text-6xl text-brand-amber/20 font-serif leading-none">"</div>

                    <blockquote className="relative z-10">
                        <p className="text-lg md:text-xl md:leading-relaxed mb-8">
                            I was getting all my work through Checkatrade and paying through the nose for it. They built me a website, sorted my Google listing, and within a month I was getting 4-5 enquiries a week direct.
                        </p>
                        <p className="text-lg md:text-xl md:leading-relaxed mb-8 font-semibold text-brand-ai/90">
                            Then I added the AI receptionist — now I don't miss calls even when I'm on a job. Best money I've spent.
                        </p>
                    </blockquote>

                    <div className="flex items-center gap-4 mt-8 border-t border-white/10 pt-8">
                        <div className="h-12 w-12 rounded-full bg-brand-amber/20 flex items-center justify-center font-display font-bold text-brand-amber text-xl border-2 border-brand-amber/50">
                            M
                        </div>
                        <div>
                            <div className="font-display font-bold">Mark T.</div>
                            <div className="text-sm text-brand-cream/60">Electrician, Hampshire</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
