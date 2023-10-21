function Footer() {
    return <footer className="page-footer green lighten-4">
        <div className="footer-copyright">
            <div className="container">
                © {new Date().getFullYear()} Copyright
                <a className="grey-text text-lighten-4 right" href="https://github.com/V4ne4ek/react-food">Repo</a>
            </div>
        </div>
    </footer>
}

export { Footer }