import Navbar from './Navbar';

export default function Layout(props) {
    return (
        <>
            <div>
                <Navbar strokeWidth="8px">

                </Navbar>
                <div>
                    {props.children}
                </div>
            </div>
        </>
    )
}