import { useTranslation } from "../providers";

interface TranslatedHTMLProps {
  translationKey: string;
  className?: string;
}

export default function TranslatedHTML({
  translationKey,
  className,
}: TranslatedHTMLProps) {
  const { t } = useTranslation();

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: t(translationKey) }}
    />
  );
}
