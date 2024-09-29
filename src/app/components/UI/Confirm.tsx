import Swal from "sweetalert2"

export const Confirm = async () => {
  const result = await Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  })

  if (result.isConfirmed) {
    await Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    })
  }

  return result.isConfirmed
}
