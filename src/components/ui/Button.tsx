'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  isExternal?: boolean;
  withArrow?: boolean;
  icon?: React.ReactNode;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  isExternal,
  withArrow = false,
  icon,
  className,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-sm select-none focus:outline-none focus:ring-2 focus:ring-bronze-400 focus:ring-offset-2 focus:ring-offset-charcoal-950 active:scale-[0.98]';

  const sizeStyles = {
    sm: 'text-xs uppercase tracking-wider py-2.5 px-4 gap-2',
    md: 'text-sm tracking-wide py-3.5 px-6 gap-2.5',
    lg: 'text-sm sm:text-base tracking-wide py-4 px-8 gap-3 font-semibold',
  }[size];

  const variantStyles = {
    primary: 'bg-bronze-500 hover:bg-bronze-400 text-charcoal-950 font-semibold shadow-subtle-dark hover:shadow-bronze-glow hover:-translate-y-0.5',
    secondary: 'bg-charcoal-800/80 hover:bg-charcoal-700 text-ivory-100 border border-charcoal-700 hover:border-bronze-500/40 hover:-translate-y-0.5',
    outline: 'bg-transparent border border-bronze-500/40 hover:border-bronze-400 text-bronze-300 hover:text-ivory-50 hover:bg-bronze-500/10',
    ghost: 'bg-transparent hover:bg-charcoal-800/50 text-ivory-200 hover:text-ivory-50',
  }[variant];

  const content = (
    <>
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {withArrow && (
        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
      )}
    </>
  );

  const combinedClasses = cn(baseStyles, sizeStyles, variantStyles, 'group', className);

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
}
