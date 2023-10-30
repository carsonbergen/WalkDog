import Navbar from './Navbar';
import Page from './Page';
import Topbar from './Topbar';

export default function Layout(props) {
    return (
        <>
            <div>
                <Topbar />
                <Navbar strokeWidth="8px" />
                {props.children}
            </div>
        </>
    )
}