import type { Technology } from "../types/technology";

interface YourStackProps {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const YourStack = ({ stack, onRemove, onRemoveAll }: YourStackProps) => {
  return (
    <aside className="h-fit rounded-xl border border-gray-200 bg-white p-5 shadow-sm lg:sticky lg:top-24">
      <h2 className="text-lg font-bold text-gray-900">Your Stack</h2>

      <p className="mt-1 text-sm text-gray-400">
        {stack.length === 0
          ? "No technologies selected yet."
          : `${stack.length} Technology${
              stack.length > 1 ? "ies" : ""
            } Selected`}
      </p>

      {stack.length === 0 ? (
        <div className="mt-5 flex h-32 items-center justify-center rounded-xl border border-dashed border-gray-200">
          <p className="text-sm text-gray-400">Your stack is empty.</p>
        </div>
      ) : (
        <>
          <div className="mt-5 space-y-2">
            {stack.map((technology) => (
              <div
                key={technology.id}
                className="flex items-center gap-3 rounded-lg border border-gray-200 px-3 py-3"
              >
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="h-8 w-8 object-contain"
                />

                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-sm font-semibold text-gray-800">
                    {technology.name}
                  </h3>

                  <p className="text-xs text-gray-400">{technology.category}</p>
                </div>

                <button
                  onClick={() => onRemove(technology.id)}
                  className="text-xl text-gray-400 transition hover:text-red-500"
                  aria-label={`Remove ${technology.name}`}
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={onRemoveAll}
            className="mt-5 w-full rounded-lg border border-red-200 py-2.5 text-sm font-semibold text-red-500 transition hover:bg-red-50"
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  );
};

export default YourStack;
