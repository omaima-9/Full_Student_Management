
export default function F3() {
  return (
    <main className="min-h-[60vh] w-full px-6 py-16 sm:px-10 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-neutral-900 dark:via-neutral-950 dark:to-black">
      <div className="mx-auto max-w-3xl text-center">
        {/* Title */}
        <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-amber-600 to-rose-500 bg-clip-text text-transparent">
          F3 Page
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm sm:text-base">
          Welcome to the <span className="font-semibold">F3</span> section.  
          Here you can display specific content, actions, or details related to feature F3.
        </p>

        {/* Placeholder content area */}
        <div className="mt-10 rounded-2xl border border-gray-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 p-8 shadow-md">
          <p className="text-gray-700 dark:text-gray-200 text-base">
            This is a placeholder for F3 content.  
            You can replace it with data fetched from your backend or custom UI components.
          </p>
        </div>

     
      </div>
    </main>
  );
}
