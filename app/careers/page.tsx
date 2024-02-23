import ClientCareers from './_page';

export default async function Careers() {
  async function submitApplication(data) {
    'use server';
    console.log(data);
  }
  return <ClientCareers submit={submitApplication} />;
}
