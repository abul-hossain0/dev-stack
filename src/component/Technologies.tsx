import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";

import type { Technology } from "../types/technology";

const Technologies = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTechnologies = async () => {
      try {
        setLoading(true);

        const response = await fetch("/data/technologies.json");

        if (!response.ok) {
          throw new Error("Failed to fetch technology data");
        }

        const data: Technology[] = await response.json();

        setTechnologies(data);
      } catch (error) {
        console.error("Error loading technologies:", error);

        toast.error("Failed to load technologies!");
      } finally {
        setLoading(false);
      }
    };

    fetchTechnologies();
  }, []);

  const handleAdd = (technology: Technology) => {
    const alreadyAdded = stack.some((item) => item.id === technology.id);

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack!`);

      return;
    }

    setStack((previousStack) => [...previousStack, technology]);

    toast.success(`${technology.name} added to your stack!`);
  };

  const handleRemove = (id: string) => {
    const technology = stack.find((item) => item.id === id);

    setStack((previousStack) => previousStack.filter((item) => item.id !== id));

    if (technology) {
      toast.info(`${technology.name} removed from your stack.`);
    }
  };

  const handleRemoveAll = () => {
    if (stack.length === 0) {
      return;
    }

    setStack([]);

    toast.info("All technologies removed from your stack.");
  };

  return (
    <section id="technologies" className="bg-white px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Explore the{" "}
            <span className="brand-gradient-text">Technologies</span>
          </h2>

          <p className="mt-2 text-sm text-gray-500 sm:text-base">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {loading ? (
          <div className="flex min-h-[400px] items-center justify-center">
            <div className="flex flex-col items-center">
              <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-pink-500"></div>

              <p className="mt-4 text-sm font-medium text-gray-500">
                Loading technologies...
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
              {technologies.map((technology) => (
                <TechnologyCard
                  key={technology.id}
                  technology={technology}
                  isAdded={stack.some((item) => item.id === technology.id)}
                  onAdd={handleAdd}
                />
              ))}
            </div>

            <div className="lg:col-span-1">
              <YourStack
                stack={stack}
                onRemove={handleRemove}
                onRemoveAll={handleRemoveAll}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Technologies;
