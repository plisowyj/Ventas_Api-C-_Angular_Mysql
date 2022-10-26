import Swal from  'sweetalert2';

export var global={
	url: 'http://localhost:3999/api/',

	
	/* Iconos: success | error | question | info | warning */
	messagePopup(titulo:string,texto:string,icon:any, button:string){
		Swal.fire({
	            title: titulo,
	            text: texto,
	            icon: icon,
	            confirmButtonText: button
	          })
	},
	
	messageConfirm(titulo:string,texto:string,icon:any){
		Swal.fire({
		  title: titulo,
		  text: texto,
		  icon: icon,
		  showCancelButton: true,
		  confirmButtonText: 'Confirmar',
		  cancelButtonText: 'Cancelar',
		  reverseButtons: true
		}).then((result) => {
		  if (result.isConfirmed) {
		    Swal.fire({
			      text:'Realizado!',
			      icon:'success'
			  	}
		    )
		  } else if (
		    /* Read more about handling dismissals below */
		    result.dismiss === Swal.DismissReason.cancel
		  ) {
		    Swal.fire({
			      text:'Cancelado!',
			      icon:'info'
			  	}
		    )
		  }
		})
	},

	messageLink(titulo:string,texto:string,icon:any, button:string, link:string){
		Swal.fire({
	            title: titulo,
	            text: texto,
	            icon: icon,
	            confirmButtonText: button,
	            html: link
	          })
	}
};


