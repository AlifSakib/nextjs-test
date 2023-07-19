import RootLayout from "../../components/layouts/root-layout";

const Admin = () => {

    return (

        <div>
            <h1>This is the admin page</h1>
        </div>
    )
}


export default Admin;

Admin.getLayout = function getLayout(page){
    return (
        <RootLayout>
 {page}
        </RootLayout>
           
  
    )
}