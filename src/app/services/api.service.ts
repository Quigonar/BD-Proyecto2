import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url:string = "https://localhost:44302/"

  constructor(private http:HttpClient) { }


  login(form:any) {
    console.log(form)
  }

  uploadImage(image:File):Observable<Object> {
    const formData: FormData = new FormData()
    formData.append('avatar',image,image.name)
    console.log(image)
    let dir = this.url + "imagen/guardar"
    return this.http.post(dir, formData)
  }

  getImage(imageUrl:string):Observable<Blob> {
    return this.http.get(imageUrl, {responseType: 'blob'});
  }
  
  /*login(form:LoginInterface):Observable<ResponseI>{
    console.log(form)
    let dir = this.url + "login/" + form.user + "/" + form.password
    return this.http.get<ResponseI>(dir)
  }

  gTableClients():Observable<ClientsListI[]>{
    let dir = this.url + "cliente/lista"
    return this.http.get<ClientsListI[]>(dir)
  }
  getClient(id:string):Observable<ClientsListI>{
    //console.log(id)
    let dir = this.url + "cliente/lista/" + id
    console.log("dir: " + dir)
    return this.http.get<ClientsListI>(dir)
  }
  addClient(client:ClientsListI):Observable<ResponseI>{
    let dir = this.url + "cliente/guardar"
    console.log(client)
    return this.http.post<ResponseI>(dir,client)
  }
  editClientAPI(client:ClientsListI):Observable<ResponseI>{
    let dir = this.url + "cliente/update"
    return this.http.put<ResponseI>(dir,client)
  }
  deleteClient(client:ClientsListI):Observable<ResponseI>{
    let dir = this.url + "cliente/delete/" + client.ID
    return this.http.delete<ResponseI>(dir)
  }


  gTableOffices():Observable<OfficeListI[]>{
    let dir = this.url + "sucursal/lista"
    return this.http.get<OfficeListI[]>(dir)
  }
  addOffice(office:OfficeListI):Observable<ResponseI>{
    let dir = this.url + "sucursal/guardar"
    return this.http.post<ResponseI>(dir,office)
  }
  editOfficeAPI(office:OfficeListI):Observable<ResponseI>{
    let dir = this.url + "sucursal/update"
    console.log(office)
    return this.http.put<ResponseI>(dir,office)
  }
  deleteOffice(office:OfficeListI):Observable<ResponseI>{
    let dir = this.url + "sucursal/delete/" + office.ID
    return this.http.delete<ResponseI>(dir)
  }


  gTableProviders():Observable<ProviderListI[]>{
    let dir = this.url + "proveedor/lista"
    return this.http.get<ProviderListI[]>(dir)
  }
  addProvider(provider:ProviderListI):Observable<ResponseI>{
    let dir = this.url + "proveedor/guardar"
    return this.http.post<ResponseI>(dir,provider)
  }
  editProviderAPI(provider:ProviderListI):Observable<ResponseI>{
    let dir = this.url + "proveedor/update"
    return this.http.put<ResponseI>(dir,provider)
  }
  deleteProvider(provider:ProviderListI):Observable<ResponseI>{
    let dir = this.url + "proveedor/delete/" + provider.ID
    return this.http.delete<ResponseI>(dir)
  }


  gTableProducts():Observable<ProductListI[]>{
    let dir = this.url + "producto/lista"
    return this.http.get<ProductListI[]>(dir)
  }
  addProduct(product:ProductListI):Observable<ResponseI>{
    let dir = this.url + "producto/guardar"
    return this.http.post<ResponseI>(dir,product)
  }
  editProductAPI(product:ProductListI):Observable<ResponseI>{
    let dir = this.url + "producto/update"
    console.log(product)
    return this.http.put<ResponseI>(dir,product)
  }
  deleteProduct(product:ProductListI):Observable<ResponseI>{
    let dir = this.url + "producto/delete/" + product.ID
    return this.http.delete<ResponseI>(dir)
  }


  gTableServices():Observable<ServiceListI[]>{
    let dir = this.url + "servicio/lista"
    return this.http.get<ServiceListI[]>(dir)
  }
  getService(id:Number):Observable<ServiceListI>{
    let dir = this.url + "servicio/lista/" + id
    return this.http.get<ServiceListI>(dir)
  }
  addService(service:ServiceListI):Observable<ResponseI>{
    let dir = this.url + "servicio/guardar"
    //console.log(service)
    return this.http.post<ResponseI>(dir,service)
  }
  editServiceAPI(service:ServiceListI):Observable<ResponseI>{
    let dir = this.url + "servicio/update"
    //console.log(service)
    return this.http.put<ResponseI>(dir,service)
  }
  deleteService(service:ServiceListI):Observable<ResponseI>{
    let dir = this.url + "servicio/delete/" + service.ID
    return this.http.delete<ResponseI>(dir)
  }


  gTableWorkers():Observable<WorkersListI[]>{
    let dir = this.url + "trabajador/lista"
    return this.http.get<WorkersListI[]>(dir)
  }
  addWorker(worker:WorkersListI):Observable<ResponseI>{
    //console.log(worker)
    let dir = this.url + "trabajador/guardar"
    return this.http.post<ResponseI>(dir,worker)
  }
  editWorkerAPI(worker:WorkersListI):Observable<ResponseI>{
    //console.log(worker)
    let dir = this.url + "trabajador/update"
    return this.http.put<ResponseI>(dir,worker)
  }
  deleteWorker(worker:WorkersListI):Observable<ResponseI>{
    let dir = this.url + "trabajador/delete/" + worker.ID
    return this.http.delete<ResponseI>(dir)
  }


  gTableAppointments():Observable<AppointmentsListI[]>{
    let dir = this.url + "cita/lista"
    return this.http.get<AppointmentsListI[]>(dir)
  }
  gTableAppointments2(id:string):Observable<AppointmentsListI[]>{
    let dir = this.url + "cita/lista/" + id
    return this.http.get<AppointmentsListI[]>(dir)
  }
  addAppointment(appointment:AppointmentsListI):Observable<ResponseI>{
    console.log(appointment)
    let dir = this.url + "cita/guardar"
    
    return this.http.post<ResponseI>(dir,appointment)
  }
  editAppointmentAPI(appointment:AppointmentsListI):Observable<ResponseI>{
    //console.log(appointment)
    let dir = this.url + "cita/update"
    return this.http.put<ResponseI>(dir,appointment)
  }
  deleteAppointment(appointment:AppointmentsListI):Observable<ResponseI>{
    //console.log(appointment)
    let dir = this.url + "cita/delete/" + appointment.AppointmentN
    return this.http.delete<ResponseI>(dir)
  }


  gTableInvoices():Observable<BillListI[]>{
    let dir = this.url + "factura/lista"
    return this.http.get<BillListI[]>(dir)
  }
  gTableInvoices2(id:string):Observable<BillListI[]>{
    let dir = this.url + "factura/lista/" + id
    return this.http.get<BillListI[]>(dir)
  }
  addInvoice(invoice:BillListI):Observable<ResponseI>{
    //console.log(invoice)
    let dir = this.url + "factura/guardar"
    return this.http.post<ResponseI>(dir,invoice)
  }
  deleteInvoice(invoice:string):Observable<ResponseI>{
    let dir = this.url + "factura/delete/" + invoice
    return this.http.delete<ResponseI>(dir)
  }
  facturar(invoice:string):Observable<ResponseI>{
    let dir = this.url + "factura/facturar/" + invoice
    return this.http.get<ResponseI>(dir)
  }

  gPoints(id:string):Observable<PointsListI>{
    let dir=this.url+"puntos/lista/"+ id
    return this.http.get<PointsListI>(dir)
  }

  generateReport1():Observable<ResponseI>{
    let dir = this.url + "reportes/reporte1"
    return this.http.get<ResponseI>(dir)
  }
  generateReport2(id:string):Observable<string>{
    let dir = this.url + "reportes/reporte2/" + id
    console.log(dir)
    return this.http.get<string>(dir)
  }
  generateReport3():Observable<string>{
    let dir = this.url + "reportes/reporte3"
    return this.http.get<string>(dir)
  }*/
}