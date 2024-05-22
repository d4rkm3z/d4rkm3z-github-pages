import settings from "../../content/settings.json";

type Settings = typeof settings;

export const getSettings = (): Settings => {
  return settings;
};
