
import Navigation from '../components/Navigation';
export default function Landing(){
    return(
        <div className="m-8" >
            <Navigation />
            <h1 className="text-blue-600/100 dark:text-sky-400/100">Welcome to the Landing Page</h1>
            <p>This is the landing page of your application.</p>
        </div>
    );
}