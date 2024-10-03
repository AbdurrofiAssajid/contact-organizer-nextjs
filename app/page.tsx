import ContactList from '@/components/ContactList'
import ContactInput from '@/components/ContactInput'
import ContactItem from '@/components/ContactItem'

export default function Home() {
  return (
   <main>
    <ContactInput/>
    <ContactList/>
    <ContactItem imgUrl={null} name={null} email={null}/>
   </main>
   
  );
}
