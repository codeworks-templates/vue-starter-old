import Swal from 'sweetalert2'

export default class Notification {
  static async confirmAction(title = 'Are you sure?', text = "You won't be able to revert this!") {
    try {
      const res = await Swal.fire({
        title: title,
        text: text,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      })
      if (res.isConfirmed) {
        return true
      }
      return false
    } catch (error) {
    }
  }

  static toast(title = 'Warning!', display = 'warning') {
    Swal.fire({
      title: title,
      icon: display,
      position: 'top-right',
      timer: 3000,
      timerProgressBar: true,
      toast: true,
      showConfirmButton: false
    })
  }

  // TODO Prompt
}
