// components/PostCard.tsx
export default function PostCard({ title, category, date }: any) {
  return (
    <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
      <span className="text-xs font-bold text-blue-600">{category}</span>
      <h3 className="text-xl font-bold mt-2">{title}</h3>
      <p className="text-sm text-gray-500 mt-2">{date}</p>
    </div>
  );
}