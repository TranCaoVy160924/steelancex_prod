export default interface JobResponse {
   Id: number;
   Name: string;
   ApplyExpireDate: string;
   Description: string;
   Categories: number[];
   Offer: number;
   BusinessName: string;
   CreatedDate?: string;
}