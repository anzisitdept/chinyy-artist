export default function CommunityImpact() {
  return (
    <section id="community-impact" className="py-20 bg-gradient-to-b from-white to-[#faf7fb]">
      <div className="max-w-[1220px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-[11.5px] uppercase tracking-[0.18em] text-[#B6178C] font-[700] mb-3">
            Community Engagement
          </div>
          <h2 className="display text-[40px] text-[#2a182b] leading-[1.1]">
            Art as a Bridge for Connection
          </h2>
          <p className="text-[15px] text-[#6a556b] mt-4 max-w-[680px] mx-auto leading-relaxed">
            Through collaborative projects and community-centered practice, I create spaces where art becomes a vehicle for storytelling, healing, and meaningful human connection across cultures and generations.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image Side */}
          <div className="relative group">
            <div className="rounded-[24px] overflow-hidden shadow-2xl border-2 border-[#f1ddea]">
              <img
                src="/collabration.jpeg"
                alt="Community collaborative artwork moment - Artist Chinenye with educators and students"
                className="w-full h-auto object-cover protected-img group-hover:scale-105 transition-transform duration-500"
                draggable={false}
                onContextMenu={e => e.preventDefault()}
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-[#E454B0] to-[#B6178C] rounded-full opacity-10 blur-3xl"></div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <div className="text-[12px] uppercase tracking-[0.15em] font-[700] text-[#B6178C] mb-3">
                Collaborative Artistry
              </div>
              <h3 className="display text-[32px] text-[#2c1a2d] leading-[1.15]">
                Building Bridges Through Creative Expression
              </h3>
            </div>

            <div className="space-y-4">
              <p className="text-[15px] text-[#5a455a] leading-relaxed">
                Art is never created in isolation. Whether working with educators, students, or community members, I believe the most powerful artwork emerges from genuine collaboration and shared vision. In this moment, we celebrate the intersection of artistic practice and educational impact.
              </p>

              <p className="text-[15px] text-[#5a455a] leading-relaxed">
                These collaborative sessions represent what I do best: creating spaces where creativity becomes a language of connection, where people of different backgrounds come together to imagine, create, and heal together.
              </p>
            </div>

            {/* Impact Points */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {[
                { label: 'Community Events', value: '50+' },
                { label: 'Years Teaching', value: '18+' },
                { label: 'Lives Touched', value: 'Countless' },
                { label: 'Collaborative Works', value: 'Ongoing' }
              ].map((stat, idx) => (
                <div key={idx} className="rounded-[16px] bg-white border border-[#f1ddea] p-5 hover:shadow-lg transition-shadow">
                  <div className="text-[13px] text-[#B6178C] font-[700] uppercase tracking-[0.1em]">
                    {stat.label}
                  </div>
                  <div className="text-[22px] font-[750] text-[#2c1a2d] mt-2">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <a
                href="/#exhibitions"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-[14px] bg-gradient-to-r from-[#B6178C] to-[#E454B0] text-white font-[600] text-[14px] hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Explore More Projects
                <span className="text-[11px]">→</span>
              </a>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}