import StatsGrid from '../components/dashboard/StatsGrid';
import CategoryBreakdown from '../components/dashboard/CategoryBreakdown';
import RecentItems from '../components/items/RecentItems';

export default function Dashboard() {
  return (
    <>
      <StatsGrid />
      <CategoryBreakdown />
      <RecentItems />
    </>
  );
}
