import * as React from "react";

interface Props {
  keyCode: number;
  onKeyDown: () => void;
}

const KeyboardShortcut: React.FC<Props> = ({ keyCode, onKeyDown }) => {
  React.useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if (event.keyCode === keyCode) {
        onKeyDown();
      }
    };

    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  });

  return null;
};

export default KeyboardShortcut;
