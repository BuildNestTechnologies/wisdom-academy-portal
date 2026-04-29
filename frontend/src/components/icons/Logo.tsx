import logoImg from "@/assets/wisdom-logo.png";

type Props = { className?: string; animated?: boolean };

export function Logo({ className, ...props }: Props) {
  return (
    <img 
      src={logoImg} 
      alt="Wisdom Academy logo" 
      className={`object-contain ${className}`} 
      {...props}
    />
  );
}
