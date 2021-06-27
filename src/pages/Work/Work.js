import PageLinks from "../../components/PageLinks/PageLinks";
import Section from "../../components/Section/Section";

const LINKS = [
  { title: "Playbook", link: "/work/playbook" },
  { title: "Disney", link: "/work/disney" },
  { title: "Smithsonian", link: "/work/smithsonian" },
];

export default function Work() {
  return (
    <Section>
      <PageLinks links={LINKS} />
    </Section>
  );
}
