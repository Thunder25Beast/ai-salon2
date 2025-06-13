import Footer from '../Footer';
import Navigation from '../Navigation';

const withLayout = (Component: React.ComponentType) => (props: any) => {
  // Hide global Navigation/Footer if rendering CustomerPortal (salon owner portal)
  const isSalonPortal = Component && (Component.name === 'CustomerPortal');
  return (
    <>
      {!isSalonPortal && <Navigation />}
      <main className="min-h-screen bg-navy-950 m-0 p-0">
        <Component {...props} />
      </main>
      {!isSalonPortal && <Footer />}
    </>
  );
};

export default withLayout;