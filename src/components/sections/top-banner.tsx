import { Check, ArrowRight } from 'lucide-react';

const TopBanner = () => {
  // Cloned from the top announcement bar.
  // The design instructions specified a centered layout, which this implementation follows.
  // The original site hides this on mobile, so `hidden md:block` is used.
  return (
    <div className="hidden w-full bg-[#00844A] px-4 py-3 text-white md:block">
      <div className="flex items-center justify-center">
        <div className="flex items-center text-sm">
          <Check className="mr-2 h-4 w-4 flex-shrink-0" />
          <span>Promoting non-traditional exports</span>
          <a href="#" className="ml-2 inline-flex items-center gap-1 font-semibold hover:underline">
            <span>Join us now</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;