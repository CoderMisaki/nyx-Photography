import { Button } from "@/components/ui/button";
import { TikTokIcon, InstagramIcon, WhatsAppIcon, SOCIAL_LINKS } from "@/components/icons/SocialIcons";

export const NyxSocialButtons = () => {
  return (
    <div className="flex items-center justify-center gap-3 flex-wrap">
      {/* TikTok */}
      <Button
        variant="outline"
        type="button"
        asChild
        className="rounded-lg hover:scale-120 transition-all duration-300 cursor-pointer h-10 w-10 p-0 bg-surface border-border hover:border-primary text-primary"
      >
        <a
          href={SOCIAL_LINKS.tiktok}
          target="_blank"
          rel="noopener noreferrer"
          title="TikTok @nyxsports.id"
          aria-label="TikTok"
        >
          <TikTokIcon className="h-4 w-4" />
        </a>
      </Button>

      {/* Instagram */}
      <Button
        variant="outline"
        type="button"
        asChild
        className="rounded-lg hover:scale-120 transition-all duration-300 cursor-pointer h-10 w-10 p-0 bg-surface border-border hover:border-pink-500 text-pink-600 dark:text-pink-400"
      >
        <a
          href={SOCIAL_LINKS.instagram}
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram @nyxsports.id"
          aria-label="Instagram"
        >
          <InstagramIcon className="h-4 w-4" />
        </a>
      </Button>

      {/* WhatsApp */}
      <Button
        variant="outline"
        type="button"
        asChild
        className="rounded-lg hover:scale-120 transition-all duration-300 cursor-pointer h-10 w-10 p-0 bg-surface border-border hover:border-emerald-500 text-emerald-600 dark:text-emerald-400"
      >
        <a
          href={SOCIAL_LINKS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          title="WhatsApp +62 815-1381-1623"
          aria-label="WhatsApp"
        >
          <WhatsAppIcon className="h-4 w-4" />
        </a>
      </Button>
    </div>
  );
};

const ButtonSocialIconDemo = () => {
  return (
    <div className="flex items-center justify-center gap-4 flex-wrap">
      {/* TikTok */}
      <Button
        variant="outline"
        type="button"
        asChild
        className="rounded-lg hover:scale-120 transition-all duration-300 cursor-pointer"
      >
        <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer">
          <TikTokIcon className="h-4 w-4" />
        </a>
      </Button>
      {/* Instagram */}
      <Button
        variant="outline"
        type="button"
        asChild
        className="rounded-lg hover:scale-120 transition-all duration-300 cursor-pointer"
      >
        <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer">
          <InstagramIcon className="h-4 w-4" />
        </a>
      </Button>
      {/* WhatsApp */}
      <Button
        variant="outline"
        type="button"
        asChild
        className="rounded-lg hover:scale-120 transition-all duration-300 cursor-pointer"
      >
        <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon className="h-4 w-4" />
        </a>
      </Button>
      {/* google */}
      <Button
        variant="outline"
        type="button"
        className="rounded-lg hover:scale-120 transition-all duration-300 cursor-pointer"
      >
        <img decoding="async"
          src="https://images.shadcnspace.com/assets/svgs/icon-google.svg"
          alt="google icon"
          className="h-4 w-4"
        />
      </Button>
      {/* github */}
      <Button
        variant="outline"
        type="button"
        className="rounded-lg hover:scale-120 transition-all duration-300 cursor-pointer"
      >
        <img decoding="async"
          src="https://images.shadcnspace.com/assets/svgs/icon-github.svg"
          alt="github icon"
          className="dark:hidden h-4 w-4"
        />
        <img decoding="async"
          src="https://images.shadcnspace.com/assets/svgs/icon-github-white.svg"
          alt="github icon"
          className="hidden dark:block h-4 w-4"
        />
      </Button>
      {/* linkedin */}
      <Button
        variant="outline"
        type="button"
        className="rounded-lg hover:scale-120 transition-all duration-300 cursor-pointer"
      >
        <img decoding="async"
          src="https://images.shadcnspace.com/assets/svgs/icon-linkedin.svg"
          alt="linkedin icon"
          className="h-4 w-4"
        />
      </Button>
      {/* facebook */}
      <Button
        variant="outline"
        type="button"
        className="rounded-lg hover:scale-120 transition-all duration-300 cursor-pointer"
      >
        <img decoding="async"
          src="https://images.shadcnspace.com/assets/svgs/icon-facebook.svg"
          alt="facebook icon"
          className="h-4 w-4"
        />
      </Button>
    </div>
  );
};

export default ButtonSocialIconDemo;
