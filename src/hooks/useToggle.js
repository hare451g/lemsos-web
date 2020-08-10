import { useState } from 'react';

function useToggle(initialToggleState = false) {
  const [isOpen, setOpen] = useState(initialToggleState);

  function toggle() {
    setOpen((prevState) => !prevState);
  }

  return [isOpen, toggle];
}

export default useToggle;
