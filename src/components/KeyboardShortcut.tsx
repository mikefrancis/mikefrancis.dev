import * as React from "react";

interface IKeyboardShortcutProps {
  keyCode: number;
  onKeyDown: () => void;
}

class KeyboardShortcut extends React.Component<IKeyboardShortcutProps> {
  componentDidMount() {
    window.addEventListener("keydown", (event: KeyboardEvent) => {
      if (event.keyCode === this.props.keyCode) {
        this.props.onKeyDown();
      }
    });
  }

  render() {
    return null;
  }
}

export default KeyboardShortcut;
