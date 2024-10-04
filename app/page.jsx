import ContactList from '@/components/ContactList'
import ContactInput from '@/components/ContactInput'
import Footer from '@/components/Footer'

export default function Home() {
  return (
   <main>
    <ContactInput/>
    <ContactList/>
    <Footer/>
   </main>
   
  );
}
