function fnFormatDetails(e,t){e=e.fnGetData(t),t='<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">';return t+("<tr><td>Rendering engine:</td><td>"+e[1]+" "+e[4]+"</td></tr>")+"<tr><td>Link to source:</td><td>Could provide a link here</td></tr>"+"<tr><td>Extra info:</td><td>And any further details here (images etc)</td></tr>"+"</table>"}$(document).ready(function(){$("#dynamic-table").dataTable({aaSorting:[[4,"desc"]]});var e=document.createElement("th"),t=document.createElement("td"),a=(t.innerHTML='<img src="plugins/advanced-datatable/images/details_open.png">',t.className="center",$("#hidden-table-info thead tr").each(function(){this.insertBefore(e,this.childNodes[0])}),$("#hidden-table-info tbody tr").each(function(){this.insertBefore(t.cloneNode(!0),this.childNodes[0])}),$("#hidden-table-info").dataTable({aoColumnDefs:[{bSortable:!1,aTargets:[0]}],aaSorting:[[1,"asc"]]}));$("#hidden-table-info tbody td img").click(function(){var e=$(this).parents("tr")[0];a.fnIsOpen(e)?(this.src="plugins/advanced-datatable/images/details_open.png",a.fnClose(e)):(this.src="plugins/advanced-datatable/images/details_close.png",a.fnOpen(e,fnFormatDetails(a,e),"details"))})});