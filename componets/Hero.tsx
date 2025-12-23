export const Hero = () => (
  <section className="pt-32 pb-20 px-6">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-xs font-bold mb-6">
          NEW TRENDS 2025
        </span>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-[0.9]">
          Design meets <br /> <span className="text-gray-400">Intelligence.</span>
        </h1>
        <p className="text-lg text-gray-500 max-w-xl leading-relaxed">
          テクノロジーとデザインの交差点で生まれる、新しい価値観と物語。
          思考を深めるためのデジタル・ジャーナル。
        </p>
      </motion.div>
    </div>
  </section>
);