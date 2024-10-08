import Swal from "sweetalert2"

export const Confirm = async () => {
  const result = await Swal.fire({
    title: "¿Estas seguro de que desea publicar una nueva entrada?",
    text: "Esta acción no se puede deshacer.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Publicar"
  })

  if (result.isConfirmed) {
    await Swal.fire({
      title: "¡Publicada!",
      text: "Tu entrada ha sido publicada.",
      icon: "success"
    })
  }

  return result.isConfirmed
}
