import { ThemeToggle } from "@/components/theme-toggle";
import { getSettings } from "@/lib/get-settings";

const settings = getSettings();

export const Title = () => (
  <div className="flex flex-row w-full flex-nowrap border-b">
    <h2 className="flex-grow scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-center pl-6">
      {settings.metadata.title}
    </h2>

    <div className="justify-self-end">
      <ThemeToggle />
    </div>
  </div>
);
