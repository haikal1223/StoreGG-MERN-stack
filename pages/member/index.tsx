import OverviewContent from "../../components/organisms/OverviewContent";
import Sidebar from "../../components/organisms/SideBar";

export default function Member() {
  return (
    <section className="overview overflow-auto">
      <Sidebar activeMenu="overview" />
      <OverviewContent />
    </section>
  );
}
