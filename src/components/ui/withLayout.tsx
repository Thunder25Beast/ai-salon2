import Footer from '../Footer';
import Navigation from '../Navigation';

const withLayout = (Component: React.ComponentType) => (props: any) => (
  <>
    <Navigation />
    <main className="min-h-screen bg-navy-950">
      <Component {...props} />
    </main>
    <Footer />
  </>
);

export default withLayout;