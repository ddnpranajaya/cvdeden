import Hero from "./components/hero";
import "./dyp-style.css"
import RiwayatPendidikan from "./components/riwayatPendidikan";
import RiwayatPekerjaan from "./components/riwayatPekerjaan";
import FavColor from "./components/favColor";
import contact from "./components/contact";
import Form from "./components/contact";

export default function Gallery() {
  return (
    <section>
      <Hero />
      <RiwayatPendidikan />
      <RiwayatPekerjaan />
    </section>
  );
}
