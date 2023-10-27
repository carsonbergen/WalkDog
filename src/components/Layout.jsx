import Navbar from './Navbar';

export default function Layout(props) {
    return (
        <>
            <div>
                <Navbar>

                </Navbar>
                <div>
                    {props.children}
                </div>
            </div>
        </>
    )
}