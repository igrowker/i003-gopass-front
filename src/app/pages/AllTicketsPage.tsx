import Grid from "../components/UI/Grid"
import { Navbar } from "../components/UI/Navbar"

export default function AllTickets() {
  return (
    <>
      <Navbar />
      <Grid viewType="allTickets" />
    </>
  )
}
