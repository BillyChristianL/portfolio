/**
 * Note: Use position fixed according to your needs
 * Desktop navbar is better positioned at the bottom
 * Mobile navbar is better positioned at bottom right.
 **/

import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import Link from "next/link";
import { useRef, useState } from "react";

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockMobile = ({
    items,
    className,
  }: {
    items: { title: string; icon: React.ReactNode; href: string }[];
    className?: string;
  }) => {
    const [open, setOpen] = useState(false);
    
    return (
      <div className={cn("relative block md:hidden", className)}>
        <AnimatePresence>
          {open && (
            <motion.div
              layoutId="nav"
              className="absolute top-full mt-2 inset-x-0 flex flex-col gap-2" // Changed from bottom-full to top-full
            >
              {items.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: -10 }} // Changed from y:10 to y:-10 (starts above)
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -10, // Changed from y:10 to y:-10 (exits upward)
                    transition: {
                      delay: idx * 0.05,
                    },
                  }}
                  transition={{ delay: idx * 0.05 }} // Reversed delay order
                >
                  <Link
                    href={item.href}
                    className="h-10 w-10 rounded-full bg-gray-50 border-1 dark:bg-transparent flex items-center justify-center"
                  >
                    <div className="h-4 w-4">{item.icon}</div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        <button
          onClick={() => setOpen(!open)}
          className="h-10 w-10 rounded-full bg-transparent border-1 dark:bg-transparent flex items-center justify-center"
        >
          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <IconLayoutNavbarCollapse className="h-5 w-5 text-black dark:text-black" />
          </motion.div>
        </button>
      </div>
    );
  };

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  let mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto hidden md:flex h-16 gap-4 items-end  rounded-2xl bg-gray-50 dark:bg-neutral-900/0 px-4 pb-3",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title, // This is still passed in but not used - you might want to use it for accessibility
  icon,
  href,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  // Calculate distance from mouse to icon center
  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  // Vertical movement (downward)
  const yTransform = useTransform(distance, [-150, 0, 150], [0, 20, 0]);
  const y = useSpring(yTransform, { 
    mass: 0.1, 
    stiffness: 150, 
    damping: 12 
  });

  // Scaling transforms (grow bigger)
  const scaleTransform = useTransform(distance, [-150, 0, 150], [1, 1.5, 1]);
  const scale = useSpring(scaleTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12
  });

  return (
    <Link href={href} aria-label={title}> {/* Added aria-label for accessibility */}
      <motion.div
        ref={ref}
        style={{ 
          y,                    // Vertical movement
          scale,               // Scaling animation
          width: 40,           // Base size
          height: 40,
        }}
        className="aspect-square rounded-full border-1 bg-gray-200 dark:bg-transparent flex items-center justify-center relative"
      >
        <motion.div
          style={{ 
            width: 15, 
            height: 15,
            scale: 1.5,        // Inner icon scales slightly more
          }}
          className="flex items-center justify-center"
        >
          {icon}
        </motion.div>
      </motion.div>
    </Link>
  );
}