"use client"; // アニメーションを動かすために必須です

import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import PostCard from '@/components/PostCard';

export default function HomePage() {
  const posts = [
    { id: 1, title: "Minimalism in UI", category: "Design", date: "Dec 20, 2025" },
    { id: 2, title: "Next.js Speed Ops", category: "Dev", date: "Dec 18, 2025" },
    { id: 3, title: "The AI Revolution", category: "Tech", date: "Dec 15, 2025" },
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#050505] text-gray-900 dark:text-gray-100">
      <Navbar />
      <Hero />
      
      <main className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 pb-20">
        {/* メインフィード */}
        <div className="md:col-span-8 space-y-12">
          {posts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <PostCard {...post} />
            </motion.div>
          ))}
        </div>

        {/* サイドバー */}
        <aside className="md:col-span-4 space-y-8">
          <div className="p-8 bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm">
            <h4 className="font-bold mb-4">Newsletter</h4>
            <p className="text-sm text-gray-500 mb-4">最新の記事をメールでお届けします。</p>
            <input 
              type="email" 
              placeholder="email@example.com" 
              className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:bg-black dark:border-gray-700 outline-none focus:ring-2 ring-blue-500 transition mb-3"
            />
            <button className="w-full py-2 bg-black dark:bg-white dark:text-black text-white rounded-xl font-medium hover:opacity-80 transition">
              Subscribe
            </button>
          </div>
        </aside>
      </main>
    </div>
  );
}