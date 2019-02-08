import * as React from "react";

interface IKeyboardShortcutProps {
  keyCode: number;
  onKeyDown: () => void;
}

const KeyboardShortcut: React.FC<IKeyboardShortcutProps> = ({
  keyCode,
  onKeyDown
}) => {
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
