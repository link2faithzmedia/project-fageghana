import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface BlogPost {
  image: string;
  dateDay: string;
  dateMonth: string;
  category: string;
  comments: string;
  title: string;
  excerpt: string;
  href: string;
  isRtl?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    image: "/images/activities/coconut-festival.png",
    dateDay: "28",
    dateMonth: "AUG",
    category: "Uncategorized",
    comments: "1 Comment",
    title: "FAGE, GEPA and JoyFM serves coconut, fruits to...",
    excerpt: "The Federation of Associations of Ghanaian Exporters (FAGE) demonstrated community spirit on Friday by providing complimentary refreshments to...",
    href: "#",
  },
  {
    image: "/images/activities/training-workshop.jpg",
    dateDay: "25",
    dateMonth: "JUN",
    category: "المقالة العامة",
    comments: "No-Comments",
    title: "Don’t just compete, let’s lead – Sylvester Mensah...",
    excerpt: "The Chief Executive of the Ghana Export-Import (EXIM) Bank, Sylvester A. Mensuh, has challenged Ghanaian exporters in agribusiness...",
    href: "#",
  },
  {
    image: "/images/content/export-standards.webp",
    dateDay: "24",
    dateMonth: "JUN",
    category: "المقالة العامة",
    comments: "No-Comments",
    title: "إتقان دروس إدارة التغيير للشركات",
    excerpt: "هناك كي المكان الشركات معاقد إيجابية في النجاح سوق أعمال ... التغير نحن متطورون تقديم قيمة استثنائية...",
    href: "#",
    isRtl: true,
  },
];


const BlogCard = ({ post }: { post: BlogPost }) => (
  <div className="group flex flex-col bg-white overflow-hidden rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
    <div className="relative">
      <Link href={post.href}>
        <Image
          src={post.image}
          alt={post.title}
          width={416}
          height={280}
          className="w-full h-[280px] object-cover"
        />
      </Link>
      <div className="absolute top-4 right-4 bg-white text-center p-2 rounded-md shadow-sm w-[60px]">
        <span className="block text-2xl font-bold text-foreground">{post.dateDay}</span>
        <span className="block text-xs font-semibold text-muted-foreground uppercase">{post.dateMonth}</span>
      </div>
    </div>
    <div className="p-6 flex flex-col flex-grow" dir={post.isRtl ? 'rtl' : 'ltr'}>
      <div className="flex items-center text-sm text-muted-foreground mb-3 space-x-3 rtl:space-x-reverse">
        <span className={post.isRtl ? 'text-right' : 'text-left'}>{post.category}</span>
        <span className="text-muted-foreground/30">|</span>
        <span>{post.comments}</span>
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-3 leading-tight flex-grow">
        <Link href={post.href} className="hover:text-primary transition-colors duration-300">
          {post.title}
        </Link>
      </h3>
      <p className="text-muted-foreground line-clamp-3 mb-5 flex-grow">
        {post.excerpt}
      </p>
      <Link href={post.href} className="flex items-center text-primary font-bold text-sm group-hover:text-primary transition-colors duration-300 w-fit">
        Read More
        <ArrowRight className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </div>
  </div>
);


const NewsBlogSection = () => {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-primary tracking-[0.2em] uppercase">
            UPDATES
          </span>
          <h2 className="text-4xl lg:text-[42px] font-bold text-foreground mt-2">
            News and Blog
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsBlogSection;