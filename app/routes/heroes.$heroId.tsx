import HeroProfile from "~/components/heroes/HeroProfile";
import useHeroProfileQuery from "~/hooks/heroes/useHeroProfileQuery";

const Hero = () => {
  const { data: heroProfile } = useHeroProfileQuery();

  return <HeroProfile heroProfile={heroProfile} />;
};

export default Hero;
