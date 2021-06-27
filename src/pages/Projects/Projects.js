import PageLinks from "../../components/PageLinks/PageLinks";
import Section from "../../components/Section/Section";

const LINKS = [
  { title: "Spotify Redesign", link: "/projects/temp" },
  { title: "Retro Games: Tetris", link: "/projects/temp" },
  { title: "Retro Games: Astroid", link: "/projects/temp" },
  { title: "Retro Games: Space Invaders", link: "/projects/temp" },
];

export default function Projects() {
  return (
    <Section>
      <PageLinks links={LINKS} />
    </Section>
  );
}
