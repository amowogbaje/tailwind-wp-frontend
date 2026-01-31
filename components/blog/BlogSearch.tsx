import React, { useState, useEffect, useRef } from 'react';
import { Search, Loader2, ArrowRight } from 'lucide-react';
import { searchPosts } from "@/lib/wp-api"; // adjust path as needed
import Link from 'next/link'; // or 'react-router-dom'

const BlogSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Debounced search logic
  useEffect(() => {
    const timer = setTimeout(async () => {
      if (query.length > 2) {
        setIsLoading(true);
        const data = await searchPosts(query);
        setResults(data);
        setIsLoading(false);
        setIsOpen(true);
      } else {
        setResults([]);
        setIsOpen(false);
      }
    }, 400); // Wait 400ms after last keystroke

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className="max-w-2xl mx-auto relative group z-100" ref={searchRef}>
      <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
        {isLoading ? (
          <Loader2 className="text-blue-500 animate-spin" size={20} />
        ) : (
          <Search className="text-slate-400 group-focus-within:text-blue-500 transition-colors" size={20} />
        )}
      </div>
      
      <input 
        type="text" 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => query.length > 2 && setIsOpen(true)}
        placeholder="Search for diabetes, nutrition, heart health..." 
        className="w-full pl-14 pr-6 py-5 bg-white border border-slate-200 rounded-2xl shadow-xl shadow-slate-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-lg"
      />

      {/* Dropdown Results */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-100 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
          {results.length > 0 ? (
            <div className="py-2">
              <div className="px-4 py-2 text-xs font-bold text-slate-400 uppercase tracking-widest bg-slate-50">
                Suggested Articles
              </div>
              {results.map((post: any) => (
                <Link 
                  key={post.id} 
                  href={`/blogs/${post.slug}`}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between px-6 py-4 hover:bg-blue-50 transition-colors group/item"
                >
                  <span 
                    className="text-slate-700 font-medium group-hover/item:text-blue-700 transition-colors"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }} 
                  />
                  <ArrowRight size={16} className="text-slate-300 group-hover/item:text-blue-500 transition-all transform group-hover/item:translate-x-1" />
                </Link>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center text-slate-500">
              No reliable articles found for "{query}"
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BlogSearch;