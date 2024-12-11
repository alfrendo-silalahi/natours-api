import { useParams } from "react-router";
import Footer from "../components/tour/Footer";
import Header from "../components/tour/Header";
import SectionCta from "../components/tour/SectionCta";
import SectionDescription from "../components/tour/SectionDescription";
import SectionHeader from "../components/tour/SectionHeader";
import SectionMap from "../components/tour/SectionMap";
import SectionPictures from "../components/tour/SectionPictures";
import SectionReviews from "../components/tour/SectionReviews";

export default function Tour() {
  const params = useParams();
  const tourSlug = params.slug;
  return (
    <>
      <h1>{tourSlug}</h1>
      <Header />
      <SectionHeader />
      <SectionDescription />
      <SectionPictures />
      <SectionMap />
      <SectionReviews />
      <SectionCta />
      <Footer />
    </>
  );
}