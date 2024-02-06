import landingPageComponent from "@/components/landingPageComponent";

export const metadata = {
  title: "landing page",
};
function LandingPage() {
  const { First, Second } = landingPageComponent;
  return (
    <div className="landing-page">
      <First />
      <Second />
    </div>
  );
}

export default LandingPage;
