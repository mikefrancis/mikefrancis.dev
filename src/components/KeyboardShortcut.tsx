import * as React from "react";

interface Props {
  keyCode: number;
  onKeyDown: () => void;
}

const KeyboardShortcut: React.FC<Props> = ({ keyCode, onKeyDown }) => {
  React.useEffect(() => {
    window.addEventListener("keydown", (event: KeyboardEvent) => {
      if (event.keyCode === keyCode) {
        onKeyDown();
      }
    });
  });

  return null;
};

export default KeyboardShortcut;
