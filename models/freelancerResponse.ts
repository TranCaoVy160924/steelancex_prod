export default interface FreelancerResponse {
   Id: number;
   Title: string;
   Description: string;
   Categories: number[];
   Price: number;
   Fullname: string;
   ImageUrl: string;
   Address: string
   Email?: string,
   Phone?: string
}