import AppView from ".";

export default {
  title: "Views/Dashbaord",
  component: AppView,
  parameters: {
    layout: "fullscreen",
  },
};

export const Playground = () => <AppView />;
