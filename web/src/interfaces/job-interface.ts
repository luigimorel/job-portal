export default interface JobProps {
  jobs: [
    id: number,
    title: string,
    logo: string,
    company: string,
    continent: string,
    type: string,
    duration: string,
    industry: string,
    location_of_work_place: string,
    date_posted: string,
  ];
}
