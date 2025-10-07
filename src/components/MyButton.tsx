import React from 'react';

interface MyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variation?: 'standard' | 'danger' | 'attention';
  className?: string;
  children?: React.ReactNode;
}

export default function MyButton({
  variation = 'standard',
  className = '',
  children,
  ...props
}: MyButtonProps) {
  const colorStyles: Record<string, string> = {
    standard:
      'from-cyan-400 via-blue-500 to-purple-600 disabled:from-cyan-400/40 disabled:via-blue-500/40 disabled:to-purple-600/40',
    danger:
      'from-amber-400 via-orange-500 to-red-600 disabled:from-amber-400/40 disabled:via-orange-500/40 disabled:to-red-600/40',
    attention:
      'from-lime-300 via-amber-400 to-orange-500 disabled:from-lime-300/40 disabled:via-amber-400/40 disabled:to-orange-500/40',
  };

  const gradient = colorStyles[variation] ?? colorStyles.standard;

  return (
    <button
      {...props}
      className={`dark:hover:bg-dark-active-bg flex w-fit cursor-pointer items-center justify-center rounded-[7px] bg-gradient-to-bl p-[2px] disabled:cursor-not-allowed ${gradient} ${className} `}
    >
      {/* Inner layer */}
      <div
        className={`dark:bg-dark-additional-bg flex w-full items-center justify-center rounded-[5px] bg-white px-2 py-1 text-sm text-slate-900 hover:bg-transparent hover:text-white disabled:text-gray-400 sm:px-5 sm:py-2 dark:text-white dark:hover:bg-transparent dark:disabled:text-gray-400`}
      >
        {children}
      </div>
    </button>
  );
}
