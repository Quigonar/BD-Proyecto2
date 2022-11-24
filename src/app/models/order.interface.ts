export interface OrderI {
    ID:string;
    RestID:string;
    RestName:string;
    ClienteID:string;
    ClienteN:string;
    ClienteLN:string;
    Province:string;
    Canton:string;
    District:string;
    Status:string; //STATUS Pending, Payed, Ready for pickup, On the way y Delivered
    Price:string;
    Products:string[];
    ProductPrices:string[];
    ProductQuantities:string[];
    ProductIDs:string[];
}