import ReactDOM from "react-dom/client";

const init = (targetId: string) => {
  const container = document.getElementById(targetId);
  if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(<TestComponent />);
  }
};

export default init;
