import { PropsWithChildren } from "react";

export const Button = ( {children,  ...props }: PropsWithChildren<{className?:string}> )=>{
  return (
    <button {...props}>{children}</button>
  );
}
