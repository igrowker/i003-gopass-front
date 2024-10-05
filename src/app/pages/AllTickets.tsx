import { Navbar } from "../components/UI/Navbar"
import Grid from "../components/UI/Grid"

export default function AllTickets() {
  return (
    <>
      <Navbar />
      <Grid viewType="allTickets" />
    </>
  )
}
