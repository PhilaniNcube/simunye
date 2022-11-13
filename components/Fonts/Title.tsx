import { Fraunces } from "@next/font/google";


type FontProps = {
  children: string;
  color?: string;
  size?: string;
}

const fraunces = Fraunces()

const Title = ({ children }: FontProps) => {
  return <h1 className={`${fraunces.className} text-[150px] text-grey`}  >{children}</h1>;
};
export default Title;
