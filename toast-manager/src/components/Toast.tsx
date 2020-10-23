import React, { useEffect } from "react";

export interface ToastProps {
  id: string;
  destroy: () => void;
  title: string;
  content: string;
  duration?: number;
}

const Toast: React.FC<ToastProps> = (props) => {
  const { destroy, content, title, duration = 0, id } = props;

  useEffect(() => {
    if (!duration) return;

    const timer = setTimeout(() => {
      destroy();
    }, duration);

    return () => clearTimeout(timer);
  }, [destroy, duration]);

  return (
    <div>
      <div className={"toast-header"}>
        <div>{title} {id}</div>
        <button onClick={destroy}>X</button>
      </div>
      <div className={"toast-body"}>{content}</div>
    </div>
  );
};

const shouldRerender = (prevProps: ToastProps, nextProps: ToastProps) => {
  return prevProps.id === nextProps.id;
};

export default React.memo(Toast, shouldRerender);
