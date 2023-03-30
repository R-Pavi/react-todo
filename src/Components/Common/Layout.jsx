import Nav from "../Nav/Nav";

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Nav />
            {children}
        </div>
    )
}

export default Layout;