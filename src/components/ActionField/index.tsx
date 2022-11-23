import { PropsWithChildren } from 'react';
import './ActionsField.css';
const ActionField = ({ children } : PropsWithChildren) => {
  return (
    <section className="action">
      {children}
    </section>
  );
}

export default ActionField;
