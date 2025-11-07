import HeroProfile from "~/components/heroes/HeroProfile";
import useHeroProfileQuery from "~/hooks/heroes/useHeroProfileQuery";
import HeroProfileSkeleton from "~/components/heroes/HeroProfileSkeleton";

const Hero = () => {
  const { data: heroProfile, isLoading } = useHeroProfileQuery();
  console.log(isLoading);

  return isLoading ? <HeroProfileSkeleton /> : <HeroProfile heroProfile={heroProfile ?? null} />;
};

export default Hero;
