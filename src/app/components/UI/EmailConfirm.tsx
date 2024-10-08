import Swal from "sweetalert2"

export const EmailConfirm = async () => {
  const result = await Swal.fire({
    title: "Pronto recibirá un email para confirmar su cuenta.",
    text: "Por favor, revise su bandeja de entrada.",
    icon: "info",
    showCancelButton: false,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Ok"
  })

  //   if (result.isConfirmed) {
  //     await Swal.fire({
  //       title: "¡Publicada!",
  //       text: "Tu entrada ha sido publicada.",
  //       icon: "success"
  //     })
  //   }

  return result.isConfirmed
}
