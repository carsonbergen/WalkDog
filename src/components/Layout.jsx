import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Page from './Page';
import Topbar from './Topbar';
import { useLocation } from 'react-router-dom';

export default function Layout(props) {
    const location = useLocation();
    const [render, setRender] = useState(true);

    useEffect(() => {
        if (location.pathname === '/' || location.pathname === '/login') {
            setRender(false);
        } else {
            setRender(true);
        }
    }, [location]);

    return (
        <>
            { render ? 
                <div>
                    <Topbar />
                    <Navbar strokeWidth="8px" />
                    {props.children}
                </div>
                :
                <div>
                    {props.children}
                </div>
            }
        </>
    )
}