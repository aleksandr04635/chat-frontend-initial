import React from "react";

interface MyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variation?: "standard" | "danger" | "attention";
  className?: string;
  children?: React.ReactNode;
}

export default function MyButton({
  variation = "standard",
  className = "",
  children,
  ...props
}: MyButtonProps) {
  const colorStyles: Record<string, string> = {
    standard:
      "from-cyan-400 via-blue-500 to-purple-600 disabled:from-cyan-400/40 disabled:via-blue-500/40 disabled:to-purple-600/40",
    danger:
      "from-amber-400 via-orange-500 to-red-600 disabled:from-amber-400/40 disabled:via-orange-500/40 disabled:to-red-600/40",
    attention:
      "from-lime-300 via-amber-400 to-orange-500 disabled:from-lime-300/40 disabled:via-amber-400/40 disabled:to-orange-500/40",
  };

  const gradient = colorStyles[variation] ?? colorStyles.standard;

  return (
    <button
      {...props}
      /*   style={{ padding: "2px" }} */
      className={`
        flex w-fit items-center justify-center rounded-[7px]
        bg-gradient-to-bl p-[2px]
        disabled:cursor-not-allowed dark:hover:bg-dark-active-bg
        ${gradient} ${className}
      `}
    >
      {/* Inner layer */}
      <div
        /*  style={{ padding: "2px" }} */
        className={`
          flex w-full items-center justify-center
          rounded-[5px] bg-white dark:bg-dark-additional-bg
          text-sm text-slate-900 dark:text-white
          px-2 py-1 sm:px-5 sm:py-2
          hover:bg-transparent hover:text-white
          dark:hover:bg-transparent
          disabled:text-gray-400 dark:disabled:text-gray-400
        `}
      >
        {children}
      </div>
    </button>
  );
}
