import Navbar from '../../components/navbar';
import Footer  from '../../components/Footer'; 

export default function DashboardLayout({children,}: {children: React.ReactNode}) {
    return (
        <section className="dashboard">
        <div className="row mb-3">
            <Navbar />
        </div>
        <div className="mb-3">
            {children}
        </div>
        <div className='row'>
            <Footer />
        </div>
        </section>
    )
}