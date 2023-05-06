import LoginView from ".";

export default {
  title: "Views/Register",
  component: LoginView,
  parameters: {
    layout: "fullscreen",
  },
};

export const Playground = () => <LoginView />;
