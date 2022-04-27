interface Facility {
  facility_id: number;
  name: string;
  owner_name: string;
  owner_ticket: string;
  type_name: string;
  solar_system: string;
}


export interface IndustryJob {
  start_date: object;
  end_date: object;
  facility: Facility;
  activity_id : number;
  runs: number;
  blueprint : string;
  blueprint_id : number;
  blueprint_type_id : number;
  installer_id: number;
  installer_name: string;
  completed_character_id: number;
  completed_data: object;
  cost: number;
  duration: number;
  job_id: number;
  licensed_runs: number;
  pause_date: object;
  probability: number;
  product_type_id: number;
  station_id: number;
  status: string;
  successful_runs: number;
}