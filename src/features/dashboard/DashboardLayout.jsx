import styled from "styled-components";
import { useRecentBookings } from "./useRecentBookings";
import Spinner from "../../ui/Spinner";
import { useRecentStays } from "./useRecentStays";
import Stats from "./Stats";
import { useCabins } from "../cabins/useCabins";
import SalesChart from "./SalesChart";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

export default function DashboardLayout() {
  const { bookings, isLoading: isLoading1 } = useRecentBookings();
  const {
    stays,
    isLoading: isLoading2,
    confirmedStays,
    numsDays,
  } = useRecentStays();
  const { cabins, isLoading: isLoading3 } = useCabins();
  if (isLoading1 || isLoading2 || isLoading3) return <Spinner />;

  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numsDays}
        cabinCount={cabins.length}
      />
      <div>Todays Activity</div>
      <div>Chart stay durations</div>
      <SalesChart bookings={bookings} numDays={numsDays} />
    </StyledDashboardLayout>
  );
}
