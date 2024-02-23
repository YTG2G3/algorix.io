import ClientContact from './_page';

export default async function Contact() {
  async function submitContact(data) {
    'use server';
    console.log(data);
  }
  return <ClientContact submitResponse={submitContact} />;
}
